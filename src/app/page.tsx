import Link from "next/link";

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0a0a0a;
          --surface: #111111;
          --border: #222222;
          --text: #f0ede8;
          --muted: #666;
          --accent: #c8a96e;
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          min-height: 100vh;
        }

        .wrapper {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* NAV */
        nav {
          padding: 2rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border);
        }

        .logo {
          font-family: 'DM Serif Display', serif;
          font-size: 1.25rem;
          letter-spacing: 0.08em;
          color: var(--text);
          text-decoration: none;
        }

        .logo span {
          color: var(--accent);
        }

        .nav-location {
          font-size: 0.75rem;
          color: var(--muted);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        /* HERO */
        .hero {
          padding: 7rem 0 5rem;
        }

        .hero-eyebrow {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(3rem, 8vw, 5.5rem);
          line-height: 1.05;
          color: var(--text);
          margin-bottom: 2rem;
        }

        .hero-title em {
          font-style: italic;
          color: var(--accent);
        }

        .hero-desc {
          font-size: 1.05rem;
          color: var(--muted);
          line-height: 1.7;
          max-width: 480px;
          margin-bottom: 3rem;
        }

        /* APP CARD */
        .apps-label {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 1rem;
        }

        .app-card {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1rem 1.5rem;
          text-decoration: none;
          transition: border-color 0.2s, transform 0.2s;
        }

        .app-card:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
        }

        .app-icon {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: linear-gradient(135deg, #c8a96e22, #c8a96e44);
          border: 1px solid #c8a96e33;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .app-info {
          text-align: left;
        }

        .app-name {
          font-family: 'DM Serif Display', serif;
          font-size: 1rem;
          color: var(--text);
          display: block;
        }

        .app-tagline {
          font-size: 0.8rem;
          color: var(--muted);
          display: block;
          margin-top: 0.15rem;
        }

        .app-badge {
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent);
          border: 1px solid var(--accent);
          border-radius: 99px;
          padding: 0.2rem 0.6rem;
          margin-left: auto;
        }

        /* DIVIDER */
        .divider {
          border: none;
          border-top: 1px solid var(--border);
          margin: 4rem 0;
        }

        /* FOOTER */
        footer {
          padding: 2rem 0 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-copy {
          font-size: 0.75rem;
          color: var(--muted);
        }

        .footer-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer-links a {
          font-size: 0.75rem;
          color: var(--muted);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: var(--text);
        }

        /* DOT GRID BG */
        .dot-bg {
          position: fixed;
          inset: 0;
          background-image: radial-gradient(circle, #ffffff08 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
          z-index: 0;
        }

        .content {
          position: relative;
          z-index: 1;
        }
      `}</style>

      <div className="dot-bg" />

      <div className="content">
        <div className="wrapper">
          <nav>
            <Link href="/" className="logo">NY<span>.</span>STUDIO</Link>
            <span className="nav-location">Aktobe, Kazakhstan</span>
          </nav>

          <section className="hero">
            <p className="hero-eyebrow">Independent App Studio</p>
            <h1 className="hero-title">
              Crafting apps<br />
              people <em>love</em>
            </h1>
            <p className="hero-desc">
              NY Studio is a indie studio building delightful mobile apps. 
              Apps made with love, used with joy.
            </p>

            <p className="apps-label">Our apps (more to come!)</p>
            <Link href="https://nomnombear.com" target="_blank" rel="noopener noreferrer" className="app-card">
              <div className="app-icon">🐻</div>
              <div className="app-info">
                <span className="app-name">NomNomBear</span>
                <span className="app-tagline">AI-powered recipe & nutrition app</span>
              </div>
              <span className="app-badge">Live</span>
            </Link>
          </section>

          <hr className="divider" />

          <footer>
            <span className="footer-copy">© {new Date().getFullYear()} NY Studio. All rights reserved.</span>
            <div className="footer-links">
              <Link href="https://nomnombear.com">NomNomBear</Link>
              <Link href="mailto:nurbek@nystudio.dev">Contact</Link>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}