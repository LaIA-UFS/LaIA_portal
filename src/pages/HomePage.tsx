import { useEffect, useRef, useState } from 'react';

interface HomePageProps {
  onHeroPointerMove: React.PointerEventHandler<HTMLElement> & React.MouseEventHandler<HTMLElement>;
  onHeroPointerLeave: React.PointerEventHandler<HTMLElement> & React.MouseEventHandler<HTMLElement>;
}

export default function HomePage({ onHeroPointerMove, onHeroPointerLeave }: HomePageProps) {
  const journalRef = useRef<HTMLElement | null>(null);
  const [journalRevealed, setJournalRevealed] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window),
  );

  useEffect(() => {
    const section = journalRef.current;
    if (!section) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      setJournalRevealed(true);
      observer.unobserve(section);
    }, { threshold: 0.16 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
<div id="home-view">
        <section className="hero" id="inicio" aria-labelledby="hero-title" onPointerMove={onHeroPointerMove} onMouseMove={onHeroPointerMove} onPointerLeave={onHeroPointerLeave} onMouseLeave={onHeroPointerLeave}>
          <div className="container hero-layout">
            <div className="hero-copy">
              <h1 id="hero-title" tabIndex={-1} data-i18n-html="heroTitle">Liga Acadêmica<br />de <em>Inteligência Artificial.</em></h1>
              <p className="hero-description" data-i18n="heroDescription">A LaIA reúne estudantes e professores da Universidade Federal de Sergipe para aprender, pesquisar e desenvolver aplicações de inteligência artificial em conjunto.</p>
              <a className="text-link hero-link" href="#sobre" data-i18n="heroAction">Sobre a LaIA</a>
            </div>
          </div>
        </section>

        <section className="section about-section" id="sobre" aria-labelledby="about-title">
          <div className="container about-layout">
            <div className="about-heading"><h2 id="about-title" tabIndex={-1} data-i18n-html="aboutTitle">Inteligência Artificial<br /><em>na UFS.</em></h2></div>
            <div className="about-copy">
              <p className="lead" data-i18n="aboutLead">Liga Acadêmica de Inteligência Artificial da Universidade Federal de Sergipe.</p>
              <p data-i18n="aboutBodyOne">A LaIA reúne a comunidade do Departamento de Computação da UFS para compartilhar conhecimento, incentivar a pesquisa e aproximar a IA da sociedade.</p>
              <p data-i18n="aboutBodyTwo">Da formação acadêmica às aplicações práticas, as atividades da Liga são desenvolvidas com colaboração e responsabilidade.</p>
              <a className="text-link" href="#equipe" data-i18n="aboutCta">Composição da diretoria</a>
            </div>
          </div>
          <div className="container about-note"><span className="note-label" data-i18n="aboutNoteLabel">Atuação acadêmica</span><p data-i18n="aboutNoteBody">A atuação da LaIA articula atividades de formação, pesquisa e inovação em inteligência artificial na UFS.</p><span className="note-symbol" aria-hidden="true">LaIA</span></div>
        </section>

        <section className="section activity-section" id="atuacao" aria-labelledby="activity-title">
          <div className="container activity-layout">
            <div className="activity-intro">
              <h2 id="activity-title" tabIndex={-1} data-i18n-html="activityTitle">Educação, pesquisa<br /><em>e inovação.</em></h2>
              <p data-i18n="activityIntro">A LaIA atua em três frentes: educação, pesquisa e inovação.</p>
            </div>
            <ol className="activity-list">
              <li className="activity-item">
                <div><h3 data-i18n="educationTitle">Educação</h3><p data-i18n="educationBody">Workshops, palestras e atividades de formação para compartilhar conhecimentos em inteligência artificial.</p></div>
              </li>
              <li className="activity-item">
                <div><h3 data-i18n="researchTitle">Pesquisa</h3><p data-i18n="researchBody">Incentivo à investigação científica e à colaboração entre estudantes e professores da universidade.</p></div>
              </li>
              <li className="activity-item">
                <div><h3 data-i18n="innovationTitle">Inovação</h3><p data-i18n="innovationBody">Projetos práticos que exploram aplicações da IA e aproximam a formação acadêmica de problemas reais.</p></div>
              </li>
            </ol>
          </div>
        </section>

        <section ref={journalRef} className={`section journal-section${journalRevealed ? ' journal-revealed' : ''}`} id="noticias" aria-labelledby="journal-title">
          <span className="journal-mark" aria-hidden="true">LaIA</span>
          <div className="container journal-layout">
            <div className="journal-heading">
              <h2 id="journal-title" tabIndex={-1} data-i18n-html="journalTitle">Notícias<br /><em>da LaIA.</em></h2>
              <a className="text-link" href="#/blog" data-i18n="journalCta">Acessar o Blog</a>
            </div>
            <a className="featured-story" href="#/blog/laia-no-portal-ufs" aria-label="Ler: A LaIA no Portal UFS — inteligência artificial, formação e impacto social" data-i18n-aria="featuredStoryAria">
              <div className="journal-photo"><img draggable={false} src="/assets/laia-portal-ufs.webp" width="1500" height="1000" alt="Artur Lima no Departamento de Computação da UFS" data-i18n-alt="articleThumbAlt" loading="lazy" /><span className="photo-credit" data-i18n="photoCredit">Foto: Carol Matos / Ascom UFS</span></div>
              <div className="journal-story-copy">
                <div className="story-meta"><span className="tag" data-i18n="pressTag">Na imprensa</span><time dateTime="2025-09-09" data-i18n="shortDate">09 set. 2025</time></div>
                <h3 data-i18n="storyTitle">A LaIA no Portal UFS: inteligência artificial, formação e impacto social.</h3>
                <p data-i18n="storySummary">Conheça a iniciativa de estudantes e professores do DCOMP que deu origem à Liga.</p>
                <span className="story-footer"><span data-i18n="readStory">Ler notícia</span></span>
              </div>
            </a>
          </div>
        </section>

        <section className="section team-section" id="equipe" aria-labelledby="team-title">
          <div className="container">
            <div className="team-heading">
              <div><h2 id="team-title" tabIndex={-1} data-i18n-html="teamTitle">Diretoria<br /><em>LaIA/UFS.</em></h2></div>
              <p className="team-intro" data-i18n="teamIntro">Composição da diretoria da Liga Acadêmica de Inteligência Artificial da UFS.</p>
            </div>
            <div className="team-toolbar">
              <div className="filters" role="group" aria-label="Filtrar equipe por área" data-i18n-aria="filterTeam">
                <button type="button" data-filter="todos" aria-pressed="true" data-i18n="filterAll">Todos</button>
                <button type="button" data-filter="administracao" aria-pressed="false" data-i18n="filterAdministration">Administração</button>
                <button type="button" data-filter="diretoria" aria-pressed="false" data-i18n="filterDirectors">Diretorias</button>
              </div>
              <p className="result-count" id="team-count" role="status" aria-live="polite" aria-atomic="true"></p>
            </div>
            <div className="team-grid" id="team-grid"></div>
            <noscript><p className="noscript-note" data-i18n="noscriptMessage">Ative o JavaScript para visualizar a equipe e acessar as páginas do Blog.</p></noscript>
          </div>
        </section>

        <section className="section contact-section" id="contato" aria-labelledby="contact-title">
          <div className="container contact-grid">
            <div className="contact-primary">
              <h2 id="contact-title" tabIndex={-1} data-i18n-html="contactTitle">Contato<br /><em>institucional.</em></h2>
              <p className="contact-intro" data-i18n="contactIntro">Para informações sobre as atividades ou propostas de colaboração, entre em contato com a LaIA.</p>
              <a className="email-address" href="mailto:laia@dcomp.ufs.br">laia@dcomp.ufs.br</a>
              <div className="contact-actions"><a className="button button-primary" href="mailto:laia@dcomp.ufs.br" data-i18n="emailButton">Enviar e-mail</a></div>
            </div>
            <aside className="contact-aside" aria-label="Onde encontrar a LaIA" data-i18n-aria="contactAside">
              <div className="contact-block"><span className="field-label" data-i18n="socialLabel">Redes sociais</span><nav className="social-links" aria-label="Redes sociais da LaIA" data-i18n-aria="socialNav">
                <a href="https://www.instagram.com/laia.ufs/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da LaIA" data-i18n-aria="socialInstagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.8" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg><span>Instagram</span><span className="sr-only" data-i18n="newTab">(nova aba)</span></a>
                <a href="https://www.linkedin.com/company/liga-acadêmica-de-inteligência-artificial/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn da LaIA" data-i18n-aria="socialLinkedin"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9v10M5 5.5v.1M10 19v-6a4 4 0 0 1 8 0v6M10 9v10" /><circle cx="5" cy="5.5" r="1" fill="currentColor" stroke="none" /></svg><span>LinkedIn</span><span className="sr-only" data-i18n="newTab">(nova aba)</span></a>
              </nav></div>
              <div className="contact-block"><span className="field-label" data-i18n="locationLabel">Localização</span><address data-i18n-html="address">Departamento de Computação<br />Universidade Federal de Sergipe<br />São Cristóvão, Sergipe</address><a className="map-link" href="https://www.google.com/maps/search/?api=1&amp;query=Departamento+de+Computacao+UFS+Sao+Cristovao" target="_blank" rel="noopener noreferrer"><span data-i18n="mapLink">Ver no mapa</span><span className="sr-only" data-i18n="newTab">(nova aba)</span></a></div>
            </aside>
          </div>
        </section>
      </div>
  );
}
