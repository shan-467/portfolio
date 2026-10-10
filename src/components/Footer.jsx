import { AtSign } from 'lucide-react';
import './Footer.css';

function LinkedinMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.67c0-1.35-.03-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98v5.77H9.3V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31ZM5.29 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.07 20.45H3.51V9h3.56v11.45ZM22.22 0H1.78C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function InstagramMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <span>© 2026 MUHAMMED SHEHOOD</span>

      <div className="footer-socials">
        <a href="mailto:shansha2423@gmail.com" aria-label="Email">
          <AtSign size={16} />
        </a>

        <a
          href="https://www.linkedin.com/in/muhammed-shehood/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinMark />
        </a>

        <a
          href="https://www.instagram.com/s_h_a_n_467/"
          aria-label="Instagram"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramMark />
        </a>
      </div>
    </footer>
  );
}