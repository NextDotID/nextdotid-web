import Head from 'next/head'
import Link from 'next/link'

import IconTwitter from '../public/assets/icon-twitter.svg'
import IconGitHub from '../public/assets/icon-github.svg'
import LogoNextID from '../public/assets/nextid-logo.svg'
import LogoBgNext from '../public/assets/bg-next.svg'
import LogoBgID from '../public/assets/bg-id.svg'
import LogoMask from '../public/assets/mask-logo.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.ID</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="Your Digital Identities In One Place - An open-sourced protocol that synergises your Web2 and Web3 profiles. Next.ID connects and authenticates your digital footprints, all while giving you full ownership of your identities." />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@NextDotID" />
        <meta name="twitter:creator" content="@NextDotID"/>
        <meta property="og:title" content="Next.ID" />
        <meta property="og:description" content="Your Digital Identities In One Place - An open-sourced protocol that synergises your Web2 and Web3 profiles. Next.ID connects and authenticates your digital footprints, all while giving you full ownership of your identities." />
        <meta property="og:url" content="https://next.id" />
        <meta property="og:image" content="https://next.id/assets/nextid-social-image.jpg" />
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
          <Link href="/">
            <a className="nextid-logo-link">
              <h1 className="nextid-title text-assistive">Next.ID</h1>
              <LogoNextID className="nextid-logo" alt="Next.ID" />
            </a>
          </Link>
          <nav className="nextid-nav hide-sm">
            <a href="https://docs.next.id/?utm_source=nextid" className="nextid-menu-link mr-2" target="_blank" rel="noopener noreferrer">
              DOCS
              {/* <span className="label label-primary ml-1">COMING SOON</span> */}
            </a>
            <a href="#faq" className="nextid-menu-link ml-2">FAQ</a>
          </nav>

          <div className="nextid-nav">
            <a className="nextid-menu-link ml-2" 
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
            Your <strong>Digital Identities</strong>
            <br/>In One Place
          </h2>
          <p className="nextid-section-subtitle">An open-sourced protocol that synergises your Web2 and Web3 profiles. Next.ID connects and authenticates your digital footprints, all while giving you full ownership of your identities.</p>
          <p>
            <a href="https://docs.next.id/?utm_source=nextid" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">Developer Docs ›</a>
          </p>
        </div>

        <div id="mask"
           className="nextid-mask nextid-section container grid-md">
          <h2 className="nextid-section-title">
            Connect <span className="text-primary text-large">.</span> Verify <span className="text-primary text-large">.</span> Control <span className="text-primary text-large">.</span>
          </h2>
          <p className="nextid-section-subtitle">
            <LogoMask height="64" />
          </p>
          <p className="nextid-section-subtitle">
            Mask Network is the first application that leverages Next.ID as your bridge to a complete digital identity.
          </p>
          <p>
            <a href="https://mask.io/?utm_source=nextid" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">Install MASK ›</a>
          </p>
        </div>

        <div id="faq"
           className="nextid-faq nextid-section container grid-sm">
          <h2 className="nextid-section-title">
            FAQ
          </h2>
          <div className="nextid-faq-container">
            <p className="nextid-faq-question">
              What is Next.ID?
            </p>
            <p className="nextid-faq-answer">
              Next.ID is an identity protocol created by Dimension, the team behind Mask Network. Next.ID protocol serves as the nerve center of Web2 and Web3 user identities. As an open-sourced and platform-agnostic identity infrastructure, Next.ID establishes the foundation for you to fully own your Digital Identities.
            </p>
            <p className="nextid-faq-question">
              How do I set up Next.ID?
            </p>
            <p className="nextid-faq-answer">
              The initial iteration of Next.ID is embedded on the Mask Network browser extension. To explore Next.ID functionalities in full, install the extension and connect your Web2 and Web3 accounts. 
              <br/><br/>Current supported Web2 accounts:
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
              Current supported Web3 apps:
              <ul>
                <li>Mask Network</li>
                <li>MetaMask</li>
                <li>OpenSea</li>
              </ul>
            </p>
            <p className="nextid-faq-question">
              What role does Next.ID play in Digital Identities in Web3?
            </p>
            <p className="nextid-faq-answer">
              Next.ID is an open-source protocol that empowers users to create their own Digital Identities across platforms as we transition towards a decentralized cyber space. 
              <br/><br/>With Next.ID, users are able to:
              <ul>
                <li>Consolidate your Web2 and Web3 identities in one accessible location.</li>
                <li>Build a complete digital identity graph via verified on-chain and off-chain actions.</li>
                <li>Create friend and/or business networks with a more responsible understanding of second and third degree effects.</li>
              </ul>
            </p>
            <p className="nextid-faq-question">
              Do I need to connect my wallet to use Next.ID?
            </p>
            <p className="nextid-faq-answer">
              The first iteration of Next.ID will be accessible via the Mask Network browser extension. You don’t need to have a digital wallet to use Next.ID; however, the core value of Next.ID V1 is making verified connections between your Web3 identities including wallet addresses with your Web2 identities.
            </p>
            <p className="nextid-faq-question">
              Will all of the user data be visible and public and on-chain? 
            </p>
            <p className="nextid-faq-answer">
              In Next.ID’s initial release phase, all of the user data stored through Next.ID protocol can be queried through a publicly-assessible API. The data is stored in Arweave.
            </p>

            <p className="nextid-faq-question">
              I am a developer, how can I develop protocols and dApps on Next.ID?
            </p>
            <p className="nextid-faq-answer">
              As Next.ID is committed to the principles of transparency and decentralization, developers are encouraged to visit <a href="https://github.com/nextdotid/proof-server/tree/master/docs" target="_blank" rel="noopener noreferrer">Next.ID GitHub</a> to contribute and find out more.
            </p>
            <p className="nextid-faq-note">
              You can also reach out via <a href="mailto:hello@next.id">hello@next.id</a>.
            </p>
          </div>
        </div>
      </main>

      <footer className="nextid-footer">
        <div className="nextid-nav">
          <a className="nextid-menu-link ml-2" 
            href="https://twitter.com/NextDotID" target="_blank" rel="noopener noreferrer">
            <IconTwitter />
          </a>
          <a className="nextid-menu-link ml-2"
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
