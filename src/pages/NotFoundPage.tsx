export default function NotFoundPage() {
  return (
<section id="not-found" className="container page-view not-found" hidden aria-labelledby="not-found-title"><p className="eyebrow" data-i18n="notFoundEyebrow">Página não encontrada</p><h1 id="not-found-title" tabIndex={-1} data-i18n-html="notFoundTitle">Página não disponível</h1><p data-i18n="notFoundText">Este endereço não está disponível. Volte ao início ou acesse o Blog da LaIA.</p><div className="not-found-actions"><a className="button button-primary" href="#inicio" data-i18n="homeButton">Voltar ao início</a><a className="text-link" href="#/blog" data-i18n="journalCta">Acessar o Blog</a></div></section>
  );
}
