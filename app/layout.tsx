import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Camp Blog' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header className="site-header">
          <div className="container row">
            <a href="/" className="brand">Camp Blog</a>
            <nav className="nav">
              <a href="/studio" className="btn">Studio</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="container">© Camp Blog</div>
        </footer>
      </body>
    </html>
  );
}
