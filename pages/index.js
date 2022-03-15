import Head from 'next/head'
import IconTwitter from '../public/assets/icon-twitter.svg'
import IconGitHub from '../public/assets/icon-github.svg'
import LogoNextID from '../public/assets/nextid-logo.svg'
import LogoBgNext from '../public/assets/bg-next.svg'
import LogoBgID from '../public/assets/bg-id.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.ID</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="Supercharge Your Identity with Web3 - A bridge to connect your Web2.0 services / cryptocurrency wallets to Next.ID identity system." />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@NextDotID" />
        <meta name="twitter:creator" content="@NextDotID"/>
        <meta property="og:title" content="Next.ID" />
        <meta property="og:description" content="Supercharge Your Identity with Web3 - A bridge to connect your Web2.0 services / cryptocurrency wallets to Next.ID identity system." />
        <meta property="og:url" content="https://next.id" />
        <meta property="og:image" content="/nextid-social-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Next.ID" />
        <link rel="canonical" href="https://next.id" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <main className="nextid-container">
        <div className="nextid-bg">
          <LogoBgNext className="nextid-bg-next" />
          <LogoBgID className="nextid-bg-id" />
        </div>

        <header className="nextid-header container grid-md">
          <a href="/" className="nextid-logo-link">
            <h1 className="nextid-title text-assistive">Next.ID</h1>
            <LogoNextID className="nextid-logo" alt="Next.ID" />
          </a>
          <nav className="nextid-nav hide-sm">
            <div className="nextid-menu-link disabled">
              Dashboard
              <span className="label label-primary ml-1">COMING SOON</span>
            </div>
            <a href="#faq" className="nextid-menu-link">FAQ</a>
          </nav>

          <div className="nextid-nav">
            <a className="nextid-menu-link ml-1" 
              href="https://twitter.com/NextDotID" target="_blank" rel="noopener noreferrer">
              <IconTwitter />
            </a>
            <a className="nextid-menu-link ml-1"
              href="https://github.com/nextdotid" target="_blank" rel="noopener noreferrer">
              <IconGitHub />
            </a>
          </div>
        </header>

        <div className="nextid-hero nextid-section container grid-md">
          <h2 className="nextid-section-title">
            Supercharge Your <br/><strong>Identity</strong> with Web3
          </h2>
          <p className="nextid-section-subtitle">A bridge to connect your Web2.0 services / cryptocurrency wallets to Next.ID identity system.</p>
        </div>

        <div id="mask"
           className="nextid-mask nextid-section container grid-md">
          <h2 className="nextid-section-title">
            Connect <span className="text-primary text-large">›</span> Verify <span className="text-primary text-large">›</span> Use
          </h2>
          <p className="nextid-section-subtitle">
            You can experience Next.ID in the Mask Network browser extension and apps. 
          </p>
          <p>
            <a href="https://mask.io" target="_blank" rel="noopener noreferrer" className="btn btn-primary ml-2">Install MASK ›</a>
          </p>
        </div>

        <div id="faq"
           className="nextid-faq nextid-section container grid-sm">
          <h2 className="nextid-section-title">
            FAQ
          </h2>
          <p className="nextid-section-subtitle">
            You ask. We answer. 
          </p>
          <div className="nextid-faq-container">
            <p className="nextid-faq-question">
              What is Next.ID actually?
            </p>
            <p className="nextid-faq-answer">
              A bridge to connect your Web2.0 services / cryptocurrency wallets to Next.ID identity system. Your friends or followers can easily find you on any supported platforms.
            </p>
            <p className="nextid-faq-question">
              How can I use Next.ID APIs?
            </p>
            <p className="nextid-faq-answer">
              You can view and use Next.ID APIs in the <a href="https://github.com/nextdotid/proof-server/tree/master/docs" target="_blank" rel="noopener noreferrer">Next.ID GitHub</a>.
            </p>
            <p className="nextid-faq-question">
              What is the infrastructure for Next.ID?
            </p>
            <p className="nextid-faq-answer">
              We will announce something soon.
            </p>
            <p className="nextid-faq-note">
              If you still have a question, you can always contact us. <a href="mailto:hello@next.id">hello@next.id</a>
            </p>
          </div>
        </div>
      </main>

      <footer className="nextid-footer">
        <div className="nextid-nav">
          <a className="nextid-menu-link ml-1" 
            href="https://twitter.com/NextDotID" target="_blank" rel="noopener noreferrer">
            <IconTwitter />
          </a>
          <a className="nextid-menu-link ml-1"
            href="https://github.com/nextdotid" target="_blank" rel="noopener noreferrer">
            <IconGitHub />
          </a>
        </div>
        <div className="nextid-nav">
          <p>&copy; 2022 Next.ID</p>
          {/* <a href="#" className="nextid-menu-link ml-2 mr-2">Privacy Policy</a><a href="#" className="nextid-menu-link">Terms of Service</a> */}
        </div>
      </footer>
    </>
  )
}
