export default function Header() {
  return (
<header className="header" id="header">
      <div className="container header-row">
        <a className="brand" href="#inicio" aria-label="LaIA — início" data-i18n-aria="brandHome">
          <img draggable={false} src="/assets/laia-oficial-branca.png" width="1791" height="977" alt="LaIA" />
        </a>
        <button className="menu-toggle" type="button" aria-controls="navigation" aria-expanded="false">
          <span data-i18n="menuLabel">Menu</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h16M4 16h16" /></svg>
        </button>
        <nav className="navigation" id="navigation" aria-label="Navegação principal" data-i18n-aria="mainNavigation">
          <div className="navigation-links">
            <a href="#sobre" data-nav="sobre" data-i18n="navAbout">A LaIA</a>
            <a href="#atuacao" data-nav="atuacao" data-i18n="navActivity">Atuação</a>
            <a href="#/blog" data-nav="blog" data-i18n="navBlog">Blog</a>
            <a href="#equipe" data-nav="equipe" data-i18n="navTeam">Equipe</a>
            <a href="#contato" data-nav="contato" className="nav-contact" data-i18n="navContact">Fale com a Liga</a>
          </div>
          <div className="header-controls">
            <div className="header-social" role="group" aria-label="Redes sociais da LaIA" data-i18n-aria="headerSocialLabel">
              <a href="https://github.com/LaIA-UFS" target="_blank" rel="noopener noreferrer" aria-label="LaIA no GitHub" data-i18n-aria="socialGithub">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.2-1.5 6.2-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.8 12.8 0 0 0-6.7 0C7.8 1.2 6.7 1.5 6.7 1.5a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.2 6.4 6.2 6.7a3.4 3.4 0 0 0-.9 2.7V22" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/liga-acadêmica-de-inteligência-artificial/" target="_blank" rel="noopener noreferrer" aria-label="LaIA no LinkedIn" data-i18n-aria="socialLinkedin">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.75" y="3.75" width="16.5" height="16.5" rx="3.25" /><path d="M8 10v6M8 7v.1M11.5 16v-3.1a2.25 2.25 0 0 1 4.5 0V16M11.5 10v6" /></svg>
              </a>
              <a href="https://www.instagram.com/laia.ufs/" target="_blank" rel="noopener noreferrer" aria-label="LaIA no Instagram" data-i18n-aria="socialInstagram">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.8" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg>
              </a>
            </div>
            <div className="language-switch" role="group" aria-label="Idioma" data-i18n-aria="languageLabel">
              <button type="button" data-language="pt" aria-pressed="true" aria-label="Português">PT</button>
              <button type="button" data-language="en" aria-pressed="false" aria-label="English">EN</button>
            </div>
            <button className="theme-toggle" id="theme-toggle" type="button" aria-pressed="false" aria-label="Ativar modo escuro">
              <svg className="icon-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>
              <svg className="icon-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 15.4A8.4 8.4 0 0 1 8.6 3.8a8.5 8.5 0 1 0 11.6 11.6Z" /></svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
