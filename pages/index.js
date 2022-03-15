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
        <meta name="description" content="Supercharge Your Identity with Web3 - A bridge to connect your Web2.0 services / cryptocurrency wallets to Next.ID identity system." />
        <link rel="icon" href="/favicon.ico" />
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
          <nav className="nextid-nav">
            <div className="nextid-menu-link disabled">
              Dashboard
              <span className="label label-primary ml-1">COMING SOON</span>
            </div>
            <a href="#faq" className="nextid-menu-link">FAQ</a>
          </nav>

          <div className="nextid-nav">
            <a className="nextid-menu-link ml-2 mr-2" 
              href="https://twitter.com/NextDotID" target="_blank" rel="noopener noreferrer">
              <IconTwitter />
            </a>
            <a className="nextid-menu-link ml-2"
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
           className="nextid-mask nextid-section container grid-md">
          <h2 className="nextid-section-title">
            FAQ
          </h2>
          <p className="nextid-section-subtitle">
            You ask. We answer. 
          </p>
          <p>
            
          </p>
        </div>
      </main>

      <footer className="nextid-footer">
        
      </footer>
    </>
  )
}
