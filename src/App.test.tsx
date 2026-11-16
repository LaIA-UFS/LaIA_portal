import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import indexHtml from '../index.html?raw';
import App from './App';

let container: HTMLDivElement;
let root: Root;

function click(selector: string): void {
  const element = document.querySelector<HTMLElement>(selector);
  if (!element) throw new Error(`Elemento não encontrado: ${selector}`);
  element.click();
}

async function renderSite(): Promise<void> {
  await act(async () => {
    root = createRoot(container);
    root.render(<App />);
  });
}

beforeEach(() => {
  vi.stubGlobal('IS_REACT_ACT_ENVIRONMENT', true);
  localStorage.clear();
  window.history.replaceState({}, '', '/');
  delete document.documentElement.dataset.theme;
  container = document.createElement('div');
  container.id = 'root';
  document.body.replaceChildren(container);

  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: vi.fn((query: string) => ({
      matches: query.includes('prefers-color-scheme') ? false : false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(() => true),
    })),
  });
  Object.defineProperty(window, 'requestAnimationFrame', {
    configurable: true,
    value: vi.fn((callback: FrameRequestCallback) => {
      callback(0);
      return 1;
    }),
  });
  Object.defineProperty(window, 'cancelAnimationFrame', { configurable: true, value: vi.fn() });
  Object.defineProperty(window, 'scrollTo', { configurable: true, value: vi.fn() });
  Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', { configurable: true, value: vi.fn() });
});

afterEach(async () => {
  await act(async () => root?.unmount());
  document.body.replaceChildren();
  vi.unstubAllGlobals();
});

describe('site interactions', () => {
  it('loads the official VLibras widget once outside the React root', () => {
    const scriptTag = '<script defer src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>';
    const scriptCount = indexHtml.split(scriptTag).length - 1;

    expect(scriptCount).toBe(1);
    expect(indexHtml.indexOf('</div>', indexHtml.indexOf('<div id="root">'))).toBeLessThan(indexHtml.indexOf(scriptTag));
    expect(indexHtml.indexOf(scriptTag)).toBeLessThan(indexHtml.indexOf('src="/src/main.tsx"'));
  });

  it('renders the existing sections and all member portraits without draggable images', async () => {
    await renderSite();

    expect(document.querySelectorAll('#home-view > section')).toHaveLength(6);
    expect(document.querySelectorAll('.person')).toHaveLength(10);
    expect(document.querySelector<HTMLElement>('#blog-view')?.hidden).toBe(true);
    expect([...document.querySelectorAll('img')].every((image) => image.getAttribute('draggable') === 'false')).toBe(true);
    expect(document.querySelector('#hero-title')?.textContent).toContain('Inteligência Artificial');
  });

  it('switches language and persists the selection', async () => {
    await renderSite();

    await act(async () => click('[data-language="en"]'));

    expect(document.documentElement.lang).toBe('en');
    expect(document.querySelector('#hero-title')?.innerHTML).toContain('Academic League');
    expect(localStorage.getItem('laia-language')).toBe('en');
    expect(document.querySelectorAll('.person')).toHaveLength(10);

    await act(async () => root.unmount());
    await renderSite();
    expect(document.documentElement.lang).toBe('en');
    expect(document.querySelector('#hero-title')?.innerHTML).toContain('Academic League');
  });

  it('toggles the site theme and saves a user-selected preference', async () => {
    await renderSite();
    expect(document.documentElement.dataset.theme).toBe('light');

    await act(async () => click('#theme-toggle'));

    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(localStorage.getItem('laia-theme')).toBe('dark');
    expect(document.querySelector('#theme-toggle')?.getAttribute('aria-pressed')).toBe('true');

    await act(async () => root.unmount());
    await renderSite();
    expect(document.documentElement.dataset.theme).toBe('dark');
  });

  it('follows the operating-system theme on a first visit without saving a default choice', async () => {
    vi.mocked(window.matchMedia).mockImplementation((query: string) => ({
      matches: query.includes('prefers-color-scheme'),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(() => true),
    }));

    await renderSite();

    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(localStorage.getItem('laia-theme')).toBeNull();
  });

  it('opens and closes the mobile menu and filters the board', async () => {
    await renderSite();

    await act(async () => click('.menu-toggle'));
    expect(document.querySelector('#navigation')?.classList.contains('open')).toBe(true);
    expect(document.querySelector('.menu-toggle')?.getAttribute('aria-expanded')).toBe('true');

    await act(async () => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(document.querySelector('#navigation')?.classList.contains('open')).toBe(false);

    await act(async () => click('[data-filter="diretoria"]'));
    expect(document.querySelectorAll('.person')).toHaveLength(7);
    expect(document.querySelector('[data-filter="diretoria"]')?.getAttribute('aria-pressed')).toBe('true');
    expect(document.querySelector('#team-count')?.textContent).toContain('7 integrantes');
  });

  it('updates the hash routes between the home page, blog, and article', async () => {
    await renderSite();

    await act(async () => {
      window.location.hash = '/blog';
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });
    expect(document.querySelector<HTMLElement>('#blog-view')?.hidden).toBe(false);
    expect(document.querySelector<HTMLElement>('#home-view')?.hidden).toBe(true);

    await act(async () => {
      window.location.hash = '/blog/laia-no-portal-ufs';
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });
    expect(document.querySelector<HTMLElement>('#article-view')?.hidden).toBe(false);
    expect(document.querySelector('#article-title')?.textContent).toContain('A LaIA no Portal UFS');
  });

  it('moves the hero glow with the pointer', async () => {
    await renderSite();
    vi.mocked(window.matchMedia).mockImplementation((query: string) => ({
      matches: query === '(hover: none)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(() => true),
    }));
    const hero = document.querySelector<HTMLElement>('.hero');
    if (!hero) throw new Error('Hero não encontrado.');
    vi.spyOn(hero, 'getBoundingClientRect').mockReturnValue({
      x: 20, y: 30, left: 20, top: 30, right: 520, bottom: 430, width: 500, height: 400,
      toJSON: () => ({}),
    });

    await act(async () => {
      hero.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, clientX: 120, clientY: 180 }));
    });

    expect(hero.classList.contains('cursor-active')).toBe(true);
    expect(hero.style.getPropertyValue('--cursor-x')).toBe('100px');
    expect(hero.style.getPropertyValue('--cursor-y')).toBe('150px');
  });

  it('accepts pointer events without relying on MouseEvent inheritance', async () => {
    await renderSite();
    const hero = document.querySelector<HTMLElement>('.hero');
    if (!hero) throw new Error('Hero não encontrado.');
    vi.spyOn(hero, 'getBoundingClientRect').mockReturnValue({
      x: 10, y: 20, left: 10, top: 20, right: 510, bottom: 420, width: 500, height: 400,
      toJSON: () => ({}),
    });
    const pointerMove = new MouseEvent('pointermove', { bubbles: true, clientX: 110, clientY: 220 });
    Object.defineProperty(pointerMove, 'pointerType', { value: 'mouse' });

    await act(async () => hero.dispatchEvent(pointerMove));

    expect(hero.classList.contains('cursor-active')).toBe(true);
    expect(hero.style.getPropertyValue('--cursor-x')).toBe('100px');
    expect(hero.style.getPropertyValue('--cursor-y')).toBe('200px');
  });
});
