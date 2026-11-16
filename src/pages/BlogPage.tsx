export default function BlogPage() {
  return (
<section id="blog-view" className="page-view" hidden aria-labelledby="blog-title">
        <div className="container">
          <a className="back-link" href="#inicio" data-i18n="backHome">Voltar ao início</a>
          <div className="blog-heading"><h1 id="blog-title" tabIndex={-1} data-i18n-html="blogTitle">Blog da <em>LaIA.</em></h1><p data-i18n="blogSubtitle">Notícias e registros da Liga.</p></div>
          <div className="news-pager" data-news-pager role="group" aria-label="Navegação de notícias" data-i18n-aria="newsPagerLabel">
            <button type="button" data-news-prev aria-label="Notícia anterior" data-i18n-aria="newsPrevious" disabled><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14.5 5-7 7 7 7" /></svg></button>
            <output data-news-count aria-live="polite" aria-label="Notícia 1 de 1">01 / 01</output>
            <button type="button" data-news-next aria-label="Próxima notícia" data-i18n-aria="newsNext" disabled><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9.5 5 7 7-7 7" /></svg></button>
          </div>
          <a className="featured-story blog-feature" data-news-slide href="#/blog/laia-no-portal-ufs">
            <div className="blog-photo"><img draggable={false} src="/assets/laia-portal-ufs.webp" width="1500" height="1000" alt="Artur Lima no Departamento de Computação da UFS" data-i18n-alt="articleThumbAlt" loading="lazy" /><span className="photo-credit" data-i18n="photoCredit">Foto: Carol Matos / Ascom UFS</span></div>
            <div className="blog-story-copy"><div className="story-meta"><span className="tag" data-i18n="pressTag">Na imprensa</span><time dateTime="2025-09-09" data-i18n="shortDate">09 set. 2025</time></div><h2 data-i18n="storyTitle">A LaIA no Portal UFS: inteligência artificial, formação e impacto social.</h2><p data-i18n="storySummary">Conheça a iniciativa de estudantes e professores do DCOMP que deu origem à Liga.</p><span className="story-source" data-i18n="storySource">Fonte: Portal UFS · Ascom</span><span className="story-footer"><span data-i18n="readStory">Ler notícia</span></span></div>
          </a>
          <div className="blog-follow"><div><h2 data-i18n="followTitle">Instagram da LaIA</h2><p data-i18n="followText">Publicações sobre as atividades da Liga.</p></div><a className="text-link" href="https://www.instagram.com/laia.ufs/" target="_blank" rel="noopener noreferrer">@laia.ufs <span className="sr-only" data-i18n="newTab">(nova aba)</span></a></div>
        </div>
      </section>
  );
}
