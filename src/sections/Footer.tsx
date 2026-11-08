export default function Footer() {
  return (
    <footer className="site-footer">
      <a href="#Home" className="wordmark">
        nataly tuong<span>.</span>
      </a>
      <p>© {new Date().getFullYear()} Nataly Tuong</p>
      <a href="#Home" className="back-top">
        BACK TO THE SURFACE <span aria-hidden="true">↑</span>
      </a>
    </footer>
  );
}
