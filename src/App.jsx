const INSTALL_LINKS = {
  vscode: 'https://marketplace.visualstudio.com/items?itemName=RajithaDisanayaka.react-codebridge',
  chrome: 'https://chromewebstore.google.com/detail/pgfkdfnigjfldfdbnigddjalgjnhgdoa',
  firefox: 'https://addons.mozilla.org/en-US/firefox/addon/react-dompicker-official/',
  producthunt: 'https://www.producthunt.com/products/react-dompicker',
  plugin: 'https://www.npmjs.com/package/code-inspector-plugin',
};

function Divider({ label }) {
  return (
    <div className="flex items-center gap-3 my-16">
      <span className="label shrink-0">{label}</span>
      <span className="flex-1 rule" />
    </div>
  );
}

function Mark({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="5.5" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <line x1="12" y1="1.5" x2="12" y2="4.5" />
      <line x1="12" y1="19.5" x2="12" y2="22.5" />
      <line x1="1.5" y1="12" x2="4.5" y2="12" />
      <line x1="19.5" y1="12" x2="22.5" y2="12" />
    </svg>
  );
}

function Nav() {
  return (
    <nav className="flex items-center justify-between py-6 text-[13px]">
      <a
        href="#top"
        className="inline-flex items-center gap-2.5 text-ink no-underline hover:no-underline font-medium tracking-tight"
      >
        <Mark className="w-[22px] h-[22px] text-accent" />
        <span className="text-[16px] tracking-[-0.01em]">react-dompicker</span>
      </a>
      <div className="flex items-center gap-5 text-muted">
        <a href="#install" className="text-muted hover:text-ink">install</a>
        <span className="hidden sm:inline text-muted/60">v1.2.3</span>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="pt-10 pb-4">
      <p className="label mb-8">
        v1.2.3 · react 16 – 19 · macOS / linux / windows
      </p>
      <h1 className="text-[42px] sm:text-[52px] leading-[1.05] font-semibold tracking-[-0.02em] mb-8">
        Click an element.<br />
        <span className="text-muted">Open the file.</span>
      </h1>
      <p className="text-[17px] leading-[1.6] text-ink/85 max-w-[38rem]">
        A browser extension and a VS Code extension that jump straight
        from a DOM node to the JSX that rendered it. No grepping, no
        hierarchy hunts, no class-name archaeology.
      </p>
      <div className="mt-10 flex items-center gap-5 text-[14px]">
        <a
          href="#install"
          className="inline-flex items-center gap-2 bg-accent text-paper px-5 py-3 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#1a1714] transition-all duration-150 no-underline hover:no-underline font-medium"
        >
          install <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section>
      <Divider label="— the usual workflow" />
      <div className="prose text-[15.5px] leading-[1.7] max-w-[38rem]">
        <p>
          You notice something off in the UI. You inspect the element.
          You copy a class name. You switch to the editor. You grep. You
          get seventeen results across a dozen files. You open them one
          at a time. You scroll. You find it. You fix it.
        </p>
        <p>
          You do this five or six times a day.
        </p>
        <p className="text-muted">
          The click-to-code tools that used to fix this mostly stopped
          working when React 19 removed{' '}
          <code className="text-ink">_debugSource</code>.
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section>
      <Divider label="— what this does" />
      <div className="prose text-[15.5px] leading-[1.7] max-w-[38rem]">
        <p>
          Click the extension icon to turn picker mode on. Click any
          element in the page. Your source file opens in VS Code with
          the exact JSX selected — opening tag to closing tag. Not the
          line. The element.
        </p>
        <p>
          Shift-click jumps to the parent. Esc turns picker mode back
          off.
        </p>
        <p>
          Works on React 16, 17, 18, and 19. Works with Next.js (app
          router supported through v16), Vite, Remix, Create React App,
          and Gatsby. Tested on codebases with 500+ components.
        </p>
      </div>

      <pre className="mt-10 text-[12.5px] leading-[1.9] text-ink/80 bg-paperDeep border border-rule px-5 py-5 overflow-x-auto">
{`  browser        picker on · click <Button />
     │
     ▼
  :51234         websocket message
     │
     ▼
  vs code        ts-morph locates the JSX span
     │
     ▼
  editor         <Button> … </Button>   selected`}
      </pre>
    </section>
  );
}

function OptionalUpgrade() {
  return (
    <section>
      <Divider label="— optional upgrade" />
      <div className="max-w-[38rem]">
        <div className="flex items-start gap-6 flex-wrap">
          <div className="text-[56px] sm:text-[64px] leading-[0.9] font-medium tracking-[-0.035em] tabular-nums text-ink">
            100<span className="text-accent">%</span>
          </div>
          <div className="flex-1 min-w-[220px] pt-2">
            <div className="text-[18px] sm:text-[19px] leading-[1.35] font-medium tracking-tight text-ink">
              Every click lands on the exact JSX.
            </div>
            <div className="text-[13px] text-muted mt-2 leading-[1.55]">
              Including React 19 Server Components, shadcn / Radix
              primitives, and runtime text.
            </div>
          </div>
        </div>

        <p className="text-[15px] leading-[1.7] text-ink/85 mt-10">
          Drop{' '}
          <a href={INSTALL_LINKS.plugin} target="_blank" rel="noopener noreferrer">
            <code>code-inspector-plugin</code>
          </a>{' '}
          into your Next.js or Vite config. Dev-only, zero runtime cost.
        </p>

        <pre className="mt-5 text-[12.5px] leading-[1.9] text-ink/80 bg-paperDeep border border-rule px-5 py-5 overflow-x-auto">
{`// next.config.ts
import { codeInspectorPlugin } from 'code-inspector-plugin';

export default {
  turbopack: {
    rules: codeInspectorPlugin({ bundler: 'turbopack' }),
  },
  webpack: (config) => {
    config.plugins.push(codeInspectorPlugin({ bundler: 'webpack' }));
    return config;
  },
};`}
        </pre>
      </div>
    </section>
  );
}

function Install() {
  const browsers = [
    { k: 'chrome',  name: 'react-dompicker',    href: INSTALL_LINKS.chrome },
    { k: 'firefox', name: 'react-dompicker',    href: INSTALL_LINKS.firefox },
    { k: 'edge',    name: 'use the chrome build', href: INSTALL_LINKS.chrome },
  ];

  return (
    <section id="install">
      <Divider label="— install" />
      <p className="text-[15.5px] leading-[1.7] max-w-[38rem] mb-12">
        Two extensions. Both required. Both free.
      </p>

      <div className="max-w-[38rem]">
        <p className="label mb-4">— browser, pick one</p>
        <ul className="divide-y divide-rule border-t border-b border-rule">
          {browsers.map((r) => (
            <li key={r.k}>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline gap-4 py-4 px-1 text-[14.5px] no-underline hover:no-underline hover:bg-paperDeep/70 transition-colors"
              >
                <span className="w-20 shrink-0 text-muted">{r.k}</span>
                <span className="flex-1 text-accent group-hover:underline">{r.name}</span>
                <span className="text-muted shrink-0" aria-hidden>↗</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="label mt-12 mb-4">— editor, required</p>
        <a
          href={INSTALL_LINKS.vscode}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-ink text-paper px-6 py-6 no-underline hover:no-underline hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#1d4ed8] transition-all duration-150"
        >
          <div className="flex items-baseline justify-between gap-6">
            <div>
              <div className="text-[18px] font-medium tracking-tight">
                react-codebridge
              </div>
              <div className="text-[12.5px] text-paper/60 mt-1">
                VS Code extension · the other half
              </div>
            </div>
            <div className="inline-flex items-baseline gap-2 text-[13px] text-paper/90 group-hover:text-paper">
              install <span aria-hidden>↗</span>
            </div>
          </div>
        </a>
      </div>

      <p className="mt-14 text-[15.5px] leading-[1.7] text-ink/85 max-w-[38rem]">
        Open VS Code with any React project. Click once in the browser.
        That's the whole onboarding.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-24 mb-10 text-[12.5px] text-muted">
      <div className="rule pt-6 flex flex-col items-center gap-2 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <a
            href="mailto:rajithadisanayaka999@gmail.com"
            className="text-muted hover:text-ink"
          >
            rajithadisanayaka999@gmail.com
          </a>
          <span aria-hidden>·</span>
          <a
            href={INSTALL_LINKS.producthunt}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-ink"
          >
            product hunt
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <span>built by rajitha disanayaka</span>
          <span aria-hidden>·</span>
          <span>v1.2.3 · {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="mx-auto max-w-column px-6 sm:px-8">
        <Nav />
        <main>
          <Hero />
          <Problem />
          <HowItWorks />
          <Install />
          <OptionalUpgrade />
        </main>
        <Footer />
      </div>
    </div>
  );
}
