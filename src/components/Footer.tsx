export default function Footer() {
  return (
<footer className="footer">
      <div className="container footer-row"><a className="brand" href="#inicio" aria-label="LaIA — voltar ao início" data-i18n-aria="brandFooter"><img draggable={false} src="/assets/laia-oficial-branca.png" width="1791" height="977" alt="LaIA" /></a><p data-i18n-html="footerDescription">Liga Acadêmica de Inteligência Artificial<br />Universidade Federal de Sergipe</p><a href="#/blog" className="text-link" data-i18n="footerBlog">Blog da LaIA</a></div>
      <div className="container footer-bottom"><span>© <span id="year">2026</span> LaIA/UFS</span><a href="#inicio" data-i18n="footerHome">Voltar ao início</a></div>
    </footer>
  );
}
