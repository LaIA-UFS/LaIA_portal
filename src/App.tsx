import { useCallback, useEffect, useRef, useState, type MouseEvent as ReactMouseEvent, type PointerEvent as ReactPointerEvent } from 'react';
import { createPortal } from 'react-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import SkipLink from './components/SkipLink';
import { members, type MemberGroup } from './data/members';
import { translate, type Language } from './data/translations';
import ArticlePage from './pages/ArticlePage';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

type ViewId = 'home-view' | 'blog-view' | 'article-view' | 'not-found';
type FilterId = 'todos' | MemberGroup;
type Theme = 'light' | 'dark';
type HeroPointerEvent = ReactMouseEvent<HTMLElement> | ReactPointerEvent<HTMLElement>;

interface Route {
  view: ViewId;
  section: string;
}

interface NavigationRequest extends Route {
  revision: number;
  focus: boolean;
}

const homeSections = ['inicio', 'sobre', 'atuacao', 'noticias', 'equipe', 'contato'];
const viewIds: ViewId[] = ['home-view', 'blog-view', 'article-view', 'not-found'];
const aliases: Readonly<Record<string, string>> = {
  '': 'inicio',
  '/': 'inicio',
  '/sobre': 'sobre',
  '/equipe': 'equipe',
  '/contato': 'contato',
  '/atuacao': 'atuacao',
  '/blog/': '/blog',
  blog: '/blog',
  missoes: 'atuacao',
  conteudo: 'inicio',
};

function resolveRoute(hash: string): Route {
  const raw = hash.replace(/^#/, '');
  const section = aliases[raw] ?? raw;

  if (homeSections.includes(section)) return { view: 'home-view', section };
  if (section === '/blog') return { view: 'blog-view', section: 'blog' };
  if (section === '/blog/laia-no-portal-ufs') return { view: 'article-view', section: 'blog' };
  return { view: 'not-found', section: '' };
}

function readLanguage(): Language {
  try {
    return localStorage.getItem('laia-language') === 'en' ? 'en' : 'pt';
  } catch {
    return 'pt';
  }
}

function readTheme(): Theme {
  const current = document.documentElement.dataset.theme;
  if (current === 'light' || current === 'dark') return current;

  try {
    const saved = localStorage.getItem('laia-theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // The operating-system preference remains available when storage is disabled.
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getPageTitle(view: ViewId, language: Language): string {
  const titles: Record<Language, Record<ViewId, string>> = {
    pt: {
      'home-view': 'LaIA — Inteligência Artificial na UFS',
      'blog-view': 'Blog da LaIA — UFS',
      'article-view': 'A LaIA no Portal UFS — Blog da LaIA',
      'not-found': 'Página não encontrada — LaIA/UFS',
    },
    en: {
      'home-view': 'LaIA — Artificial Intelligence at UFS',
      'blog-view': 'LaIA Blog — UFS',
      'article-view': 'LaIA on the UFS Portal — LaIA Blog',
      'not-found': 'Page not found — LaIA/UFS',
    },
  };

  return titles[language][view];
}

function TeamMembers({ language, filter, container }: { language: Language; filter: FilterId; container: HTMLElement }) {
  const visibleMembers = members.filter((member) => filter === 'todos' || member.group === filter);
  const groupName = filter === 'administracao'
    ? translate('groupAdministration', language) ?? 'Administração'
    : translate('groupDirectors', language) ?? 'Diretorias';
  const count = language === 'en'
    ? `${visibleMembers.length} ${visibleMembers.length === 1 ? 'member' : 'members'}`
    : `${visibleMembers.length} ${visibleMembers.length === 1 ? 'integrante' : 'integrantes'}`;
  const countText = filter === 'todos' ? count : `${count} · ${groupName}`;

  useEffect(() => {
    document.querySelectorAll<HTMLButtonElement>('[data-filter]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.filter === filter));
    });
    const countElement = document.querySelector<HTMLElement>('#team-count');
    if (countElement) countElement.textContent = countText;
  }, [filter, countText]);

  return createPortal(
    visibleMembers.map((member) => {
      const roles = language === 'en' ? member.roleEn : member.roles;
      const portraitPrefix = translate('portraitPrefix', language) ?? 'Retrato de';
      return (
        <article className="person" key={member.name}>
          <div className="person-photo">
            <img
              src={`/assets/${member.image}`}
              width="1200"
              height="1200"
              alt={`${portraitPrefix} ${member.name}`}
              loading="lazy"
              draggable={false}
            />
          </div>
          <div className="person-info">
            <h3>{member.name}</h3>
            <p>{roles.map((role) => <span key={role}>{role}</span>)}</p>
          </div>
        </article>
      );
    }),
    container,
  );
}

export default function App() {
  const originalContent = useRef(new WeakMap<Element, string>());
  const originalAttributes = useRef(new WeakMap<Element, Map<string, string | null>>());
  const themeChangedByUser = useRef(false);
  const routeRef = useRef<Route>(resolveRoute(window.location.hash));
  const [navigation, setNavigation] = useState<NavigationRequest>(() => ({
    ...resolveRoute(window.location.hash),
    revision: 0,
    focus: false,
  }));
  const [language, setLanguage] = useState<Language>(readLanguage);
  const [theme, setTheme] = useState<Theme>(readTheme);
  const [teamFilter, setTeamFilter] = useState<FilterId>('todos');
  const [newsIndex, setNewsIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [teamGrid, setTeamGrid] = useState<HTMLElement | null>(null);

  const updateHeroGlow = useCallback((event: HeroPointerEvent) => {
    if ('pointerType' in event && event.pointerType === 'touch') return;

    const hero = event.currentTarget;
    const bounds = hero.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    if (x < 0 || y < 0 || x > bounds.width || y > bounds.height) return;

    hero.style.setProperty('--cursor-x', `${x}px`);
    hero.style.setProperty('--cursor-y', `${y}px`);
    hero.classList.add('cursor-active');
  }, []);

  const clearHeroGlow = useCallback((event: HeroPointerEvent) => {
    event.currentTarget.classList.remove('cursor-active');
  }, []);

  const navigateToCurrentHash = useCallback((focus = true) => {
    setMenuOpen(false);
    setNavigation((current) => ({
      ...resolveRoute(window.location.hash),
      revision: current.revision + 1,
      focus,
    }));
  }, []);

  useEffect(() => {
    routeRef.current = navigation;
  }, [navigation]);

  useEffect(() => {
    // The preserved static page template provides the target after its first render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTeamGrid(document.getElementById('team-grid'));
  }, []);

  useEffect(() => {
    const root = document;

    root.querySelectorAll<HTMLElement>('[data-i18n], [data-i18n-html]').forEach((element) => {
      if (!originalContent.current.has(element)) originalContent.current.set(element, element.innerHTML);
      const key = element.dataset.i18n ?? element.dataset.i18nHtml;
      if (!key) return;
      const original = originalContent.current.get(element) ?? '';
      element.innerHTML = language === 'en' ? translate(key, 'en') ?? original : original;
    });

    root.querySelectorAll<HTMLElement>('[data-i18n-aria], [data-i18n-alt], [data-i18n-content]').forEach((element) => {
      let original = originalAttributes.current.get(element);
      if (!original) {
        original = new Map([
          ['aria-label', element.getAttribute('aria-label')],
          ['alt', element.getAttribute('alt')],
          ['content', element.getAttribute('content')],
        ]);
        originalAttributes.current.set(element, original);
      }

      const attributeKeys = [
        ['i18nAria', 'aria-label'],
        ['i18nAlt', 'alt'],
        ['i18nContent', 'content'],
      ] as const;

      attributeKeys.forEach(([dataKey, attributeName]) => {
        const key = element.dataset[dataKey];
        if (!key) return;
        const translated = language === 'en' ? translate(key, 'en') : undefined;
        const value = translated ?? original?.get(attributeName);
        if (value !== undefined && value !== null) element.setAttribute(attributeName, value);
      });
    });

    const description = translate('description', language);
    const descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description && descriptionMeta) descriptionMeta.content = description;

    root.querySelectorAll<HTMLButtonElement>('[data-language]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });

    const menuButton = root.querySelector<HTMLButtonElement>('.menu-toggle');
    const menuText = menuButton?.querySelector('span');
    if (menuText) menuText.textContent = translate(menuOpen ? 'menuClose' : 'menuLabel', language) ?? 'Menu';

    const count = root.querySelector<HTMLOutputElement>('[data-news-count]');
    if (count) {
      const total = root.querySelectorAll('[data-news-slide]').length;
      count.textContent = `${String(newsIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
      count.setAttribute('aria-label', `${translate('newsArticle', language) ?? 'Notícia'} ${newsIndex + 1} ${translate('ofWord', language) ?? 'de'} ${total}`);
    }

    const slides = root.querySelectorAll<HTMLElement>('[data-news-slide]');
    slides.forEach((slide, index) => {
      const current = index === newsIndex;
      slide.hidden = !current;
      slide.setAttribute('aria-hidden', String(!current));
    });
    const previous = root.querySelector<HTMLButtonElement>('[data-news-prev]');
    const next = root.querySelector<HTMLButtonElement>('[data-news-next]');
    if (previous) previous.disabled = newsIndex === 0;
    if (next) next.disabled = newsIndex === slides.length - 1;

    document.documentElement.lang = language === 'en' ? 'en' : 'pt-BR';
    document.title = getPageTitle(navigation.view, language);
  }, [language, menuOpen, navigation.view, newsIndex]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (themeColor) themeColor.content = theme === 'dark' ? '#152356' : '#18275f';

    const themeButton = document.querySelector<HTMLButtonElement>('#theme-toggle');
    if (themeButton) {
      themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
      themeButton.setAttribute('aria-label', translate(theme === 'dark' ? 'themeToLight' : 'themeToDark', language) ?? 'Alternar contraste');
    }

    if (themeChangedByUser.current) {
      try {
        localStorage.setItem('laia-theme', theme);
      } catch {
        // The chosen theme still applies for this visit when storage is unavailable.
      }
    }
  }, [language, theme]);

  useEffect(() => {
    const root = document;

    const header = root.querySelector<HTMLElement>('#header');
    const navigationElement = root.querySelector<HTMLElement>('#navigation');
    const menuButton = root.querySelector<HTMLButtonElement>('.menu-toggle');
    if (!navigationElement || !menuButton) return;

    navigationElement.classList.toggle('open', menuOpen);
    menuButton.setAttribute('aria-expanded', String(menuOpen));
    const label = menuButton.querySelector('span');
    if (label) label.textContent = translate(menuOpen ? 'menuClose' : 'menuLabel', language) ?? 'Menu';
    if (header && menuOpen) header.dataset.menuOpen = 'true';
    else header?.removeAttribute('data-menu-open');
  }, [language, menuOpen]);

  useEffect(() => {
    const root = document;

    viewIds.forEach((viewId) => {
      const view = root.querySelector<HTMLElement>(`#${viewId}`);
      if (view) view.hidden = viewId !== navigation.view;
    });

    root.querySelectorAll<HTMLAnchorElement>('[data-nav]').forEach((link) => {
      const active = link.dataset.nav === navigation.section;
      if (active) link.setAttribute('aria-current', navigation.section === 'blog' ? 'page' : 'location');
      else link.removeAttribute('aria-current');
    });

    document.title = getPageTitle(navigation.view, language);

    const target = navigation.view === 'home-view'
      ? document.getElementById(navigation.section)
      : root.querySelector<HTMLElement>(`#${navigation.view}`);
    if (!target) return;

    const frame = window.requestAnimationFrame(() => {
      if (navigation.view === 'home-view') {
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        target.scrollIntoView({ behavior: navigation.focus && !reducedMotion ? 'smooth' : 'auto', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
      if (navigation.focus) {
        const heading = target.querySelector<HTMLElement>('h1, h2');
        (heading ?? target).focus({ preventScroll: true });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [language, navigation]);

  useEffect(() => {
    const onHashChange = () => navigateToCurrentHash(true);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [navigateToCurrentHash]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const target = event.target;

      if (target.closest('.menu-toggle')) {
        setMenuOpen((open) => !open);
        return;
      }

      if (target.closest('#theme-toggle')) {
        themeChangedByUser.current = true;
        setTheme((current) => current === 'dark' ? 'light' : 'dark');
        return;
      }

      const languageButton = target.closest<HTMLButtonElement>('[data-language]');
      if (languageButton) {
        const next = languageButton.dataset.language === 'en' ? 'en' : 'pt';
        setLanguage(next);
        try {
          localStorage.setItem('laia-language', next);
        } catch {
          // The selected language remains active for this visit.
        }
        return;
      }

      const filterButton = target.closest<HTMLButtonElement>('[data-filter]');
      if (filterButton) {
        const filter = filterButton.dataset.filter;
        if (filter === 'todos' || filter === 'administracao' || filter === 'diretoria') {
          setTeamFilter(filter);
        }
        return;
      }

      if (target.closest('[data-news-prev]')) {
        setNewsIndex((index) => Math.max(0, index - 1));
        return;
      }
      if (target.closest('[data-news-next]')) {
        setNewsIndex((index) => Math.min(document.querySelectorAll('[data-news-slide]').length, index + 1));
        return;
      }

      const hashLink = target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (hashLink) {
        setMenuOpen(false);
        if (hashLink.hash === window.location.hash) {
          event.preventDefault();
          navigateToCurrentHash(true);
        }
        return;
      }

      if (!target.closest('.header')) setMenuOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      const wasOpen = document.querySelector('.menu-toggle')?.getAttribute('aria-expanded') === 'true';
      setMenuOpen(false);
      if (wasOpen) document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus();
    };

    const onDragStart = (event: DragEvent) => {
      if (event.target instanceof Element && event.target.closest('img')) event.preventDefault();
    };

    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('dragstart', onDragStart);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('dragstart', onDragStart);
    };
  }, [navigateToCurrentHash]);

  useEffect(() => {
    const root = document;
    const header = root.querySelector<HTMLElement>('#header');
    if (!header) return;

    let frame: number | null = null;
    const updateSection = () => {
      frame = null;
      header.classList.toggle('is-scrolled', window.scrollY > 12);
      if (routeRef.current.view !== 'home-view') return;

      const marker = header.offsetHeight + Math.min(window.innerHeight * 0.25, 170);
      let current = 'inicio';
      homeSections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= marker) current = id;
      });
      const active = current === 'noticias' ? 'blog' : current;
      root.querySelectorAll<HTMLAnchorElement>('[data-nav]').forEach((link) => {
        if (link.dataset.nav === active) link.setAttribute('aria-current', active === 'blog' ? 'page' : 'location');
        else link.removeAttribute('aria-current');
      });
    };

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(updateSection);
    };
    const onResize = () => {
      if (window.innerWidth > 760) setMenuOpen(false);
      updateSection();
    };

    updateSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const year = document.querySelector<HTMLElement>('#year');
    if (year) year.textContent = String(new Date().getFullYear());
  }, []);

  return (
    <>
      <SkipLink />
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <HomePage onHeroPointerMove={updateHeroGlow} onHeroPointerLeave={clearHeroGlow} />
        <BlogPage />
        <ArticlePage />
        <NotFoundPage />
      </main>
      <Footer />
      {teamGrid ? <TeamMembers language={language} filter={teamFilter} container={teamGrid} /> : null}
    </>
  );
}
