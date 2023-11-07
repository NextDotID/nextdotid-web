"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FAQRenderMap = [
  {
    key: "What is DID?",
    title: () => (
      <div className="faq-title">
        What is <span>DID</span>?
      </div>
    ),
    content: () => (
      <div className="faq-body">
        <div className="row">
          <div className="badge">Technical Standard</div>
          <div className="paragraph">
            A technical standard is a collectively agreed-upon set of guidelines
            and specifications that enable interoperability and consistent
            implementation of a particular technology or service, allowing
            different entities to effectively communicate or build upon it. In
            other words, a group of people getting together and deciding to
            build something in a certain way. For example, Gmail & Yahoo are
            popular email services that adhere to guidelines on how emails are
            transmitted, formatted, and delivered across different email
            systems. These guidelines ensure that emails can be exchanged and
            understood between various email providers, allowing for
            interoperability in the broader email ecosystem.
          </div>
        </div>
        <div className="row">
          <div className="badge">DID Standard</div>
          <div className="paragraph">
            Decentralized identity, also known as self-sovereign identity, is an
            identity framework based on open standards. It utilizes digital
            identifiers and verifiable credentials that are self-owned, and
            independent, and facilitate trusted data exchange. Its primary
            objectives are to safeguard privacy and ensure secure online
            interactions through the utilization of blockchains, distributed
            ledger technology, and private/public key cryptography.
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "How does Next.ID make the connection between Web2 and Web3 identities?",
    title: () => (
      <div className="faq-title">
        How does Next.ID make the connection between Web2 and Web3 identities?
      </div>
    ),
    content: () => (
      <div className="faq-body">
        <div className="paragraph">
          Binding Web2 and Web3 data involves linking traditional internet
          identities like social media profiles (Twitter, Facebook, etc) with
          decentralized blockchain identifiers (MetaMask, Lens) to create a
          comprehensive digital identity. This process is achieved through
          cryptographic proof where a digital identity is created by enabling
          users to sign a message with their decentralized identifier (DID)
          private key
        </div>
        <div className="paragraph">
          {
            "Let’s take Twitter and an Ethereum wallet as an example. Linking your Twitter profile and Ethereum wallet to create a digital identity essentially involves proving that you are the owner of both the Twitter account (Web2) and the Ethereum address (Web3). Here's a step-by-step breakdown:"
          }
        </div>
        <div className="grid">
          <div className="grid-item grid-1">
            <div className="grid-title">Step 1:<br/> Initiate the link</div>
            <div className="grid-content">
              You would begin the process on Next.ID.
            </div>
          </div>
          <div className="grid-item grid-2">
            <div className="grid-title">
              Step 2: Sign a message with your Next.ID private key
            </div>
            <div className="grid-item-content">
              Next.ID will generate a unique message for you to sign. You sign
              this message using your Next.ID private key, which is a process
              that can usually be handled by your Next.ID private key. This
              generates a cryptographic signature.
            </div>
          </div>
          <div className="grid-item grid-3">
            <div className="grid-title">
              Step 3: Post the signature on selected platforms like Twitter or
              Discord
            </div>
            <div className="grid-content">
              Once you have the signature, Next.ID will ask you to post this
              signature publicly on your selected social media account. This
              could be in the form of a tweet, or it could be added to your
              profile information. This serves as a public declaration linking
              your Next.ID to your Web2 social account.
            </div>
          </div>
          <div className="grid-item grid-4">
            <div className="grid-title">Step 5: Verify the link</div>
            <div className="grid-content">
              The platform then checks your Twitter account for the presence of
              this signature and validates it against the original message using
              your Ethereum public address. If it matches, it proves that the
              owner of the Ethereum address is the same as the Twitter account
              owner.
            </div>
          </div>
          <div className="grid-item grid-5">
            <div className="grid-title">Step 6: Store the verified link</div>
            <div className="grid-content">
              Once the link has been verified, Next.ID records the successful
              link between your Ethereum address and your Twitter account. This
              record serves as a part of your digital identity
            </div>
          </div>
          <div className="grid-item grid-6">
            <div className="grid-title">Step 4: Verify the link</div>
            <div className="grid-content">
              {` Next.ID then checks your Twitter account for the presence of this
              signature. Next.ID accesses information from Twitter through
              Twitter's Application Programming Interface (API). APIs are tools
              that allow different software applications to communicate and
              interact with each other. In this case, Twitter's API can allow
              Next.ID to read public tweets or profile information. To verify
              the link between your Ethereum wallet and your Twitter account,
              Next.ID uses the Twitter API to look for the tweet or profile
              information where you posted the cryptographic signature.`}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "Do you save devs time?",
    title: () => <div className="faq-title">Do you save devs time?</div>,
    content: () => (
      <div className="faq-body">
        <div className="paragraph">
          {
            "The ProofService offered by Next.ID can save developers time in real-life scenarios such as building a cryptocurrency exchange platform. Rather than spending significant resources developing an intricate identity verification system, developers can integrate Next.ID's ProofService to streamline the process. For instance, when a user signs up on the exchange platform, Next.ID's ProofService can be utilized to verify their identity by linking their social media profile, like Twitter or Facebook, with their cryptocurrency wallet. This not only simplifies the identity verification process but also ensures the authenticity of users, saving developers valuable time and effort in implementing a secure and reliable verification system, and freeing up developers to focus on other important tasks, making the development process faster and more efficient."
          }
        </div>
        <div className="paragraph">
          {
            "By leveraging Next.ID's streamlined user onboarding, data aggregation, and identity verification mechanisms, developers can save valuable time that would otherwise be spent on building these functionalities from scratch. The ready-to-use tools and services provided by Next.ID also eliminate the need for developers to invest time in complex data integration or compatibility issues. This increased efficiency allows developers to focus more on core development tasks, accelerating the overall development process, reducing time-to-market, and increasing productivity."
          }
        </div>
      </div>
    ),
  },
  {
    key: "Can devs monetize?",
    title: () => <div className="faq-title">Can devs monetize?</div>,
    content: () => (
      <div className="faq-body">
        <div className="paragraph">
          {
            "Developers can explore various monetization opportunities based on their business models and the data provided by Next.ID's RelationService . One potential avenue is leveraging the data from Next.ID's RelationService to target specific brand campaigns towards users with permission. By accessing the enriched user profiles and social connections stored in the RelationService , developers can offer targeted advertising opportunities to advertisers looking to reach specific audiences. This can be done through partnerships or giving users authorization rights to their identity graph for Ads, where developers can negotiate revenue-sharing agreements or earn commissions based on the success of the targeted Ad campaigns. This approach allows developers to monetize their applications while providing advertisers with more effective and personalized advertising opportunities. The specific business model and revenue-sharing arrangements would depend on the agreements made between users, platforms, and advertisers, tailored to suit their respective needs and objectives."
          }
        </div>
      </div>
    ),
  },
  {
    key: "Why should I care about my users being real people?",
    title: () => (
      <div className="faq-title">
        Why should I care about my users being real people?
      </div>
    ),
    content: () => (
      <div className="faq-body">
        <div className="paragraph">
          {
            "While Next.ID delivers a more comprehensive view of an individual's digital persona, it's important to note that it's not entirely bot-proof. However, it comes significantly close to validating genuine human users, offering a solution for establishing digital personhood."
          }
        </div>
      </div>
    ),
  },
  {
    key: "How do you enhance onboarding friction and safety?",
    title: () => (
      <div className="faq-title">
        How do you enhance onboarding friction and safety?
      </div>
    ),
    content: () => (
      <div className="faq-body">
        <div className="paragraph">
          {
            "Next.ID boosts users' online security by facilitating the creation of a digital identity that's not linked to their digital wallets (where their funds are stored, i.e. MetaMask). Users are able to log into different dApps using Next.ID, instead of using their wallets, to prevent exposing their wallet credentials. This Next.ID Website 10 reduces the chance of a single security mishap compromising everything. While the main goal is safeguarding user digital funds, this method also helps make their overall data safer."
          }
        </div>
      </div>
    ),
  },
  {
    key: "How do you improve DAO governance?",
    title: () => (
      <div className="faq-title">How do you improve DAO governance?</div>
    ),
    content: () => (
      <div className="faq-body">
        <div className="paragraph">
          {
            "Next.ID enhances DAO governance by enriching user profiles with valuable information, which can be accessed through Next.ID's RelationService . By incorporating details such as social connections, activity history, and expertise, DAOs gain a deeper understanding of their members and their respective contributions, enabling more informed governance decisions, efficient resource allocation, and fostering a stronger sense of community participation."
          }
        </div>
      </div>
    ),
  },
  {
    key: "How do I set up Next.ID?",
    title: () => <div className="faq-title">How do I set up Next.ID?</div>,
    content: () => (
      <div className="faq-body">
        <div className="paragraph">
          {
            "The initial iteration of Next.ID is embedded in the Mask Network browser extension. To explore Next.ID functionalities in full, install the extension, and connect your Web2 and Web3 accounts."
          }
        </div>
      </div>
    ),
  },
  {
    key: "Any support for more chains?",
    title: () => <div className="faq-title">Any support for more chains?</div>,
    content: () => (
      <div className="faq-body">
        <div className="paragraph">
          Next.ID now supports the Ethereum mainnet and plans to go multi-chain,
          to name a few, ETH L2s, Solana, Polygon, Near, and other L1s. Going
          multi-chain will be key for protocol growth and user adoption.
        </div>
      </div>
    ),
  },
  {
    key: "What’s the relationship between Next.ID and Mask Network?",
    title: () => (
      <div className="faq-title">
        What’s the relationship between Next.ID and Mask Network?
      </div>
    ),
    content: () => (
      <div className="faq-body">
        <div className="paragraph">
          Running as an independent brand and protocol, Next.ID is the DID
          partner of choice of Mask Network and also a Mask ecosystem protocol.
          It’s developed by Dimension tech which has 3 branches, namely Mask
          Network, Next.ID, Firefly. The Next.ID team now has around 10 people
          working on it, most of them are developers who have years of
          experience in Web2 and Web3.
        </div>
      </div>
    ),
  },
  {
    key: "Will all of the user data be visible and public and on-chain?",
    title: () => (
      <div className="faq-title">
        Will all of the user data be visible and public and on-chain?
      </div>
    ),
    content: () => (
      <div className="faq-body">
        <div className="paragraph">
          In Next.ID’s initial release phase, all of the user data is stored
          through Next.ID protocol can be queried through a publicly accessible
          API. The data is stored in Arweave.
        </div>
      </div>
    ),
  },
];

export default function FAQ() {
  const [activeIndexes, setActiveIndexes] = useState([0]);
  const toggleExpand = (idx: number) => {
    if (!activeIndexes.includes(idx)) setActiveIndexes([...activeIndexes, idx]);
    else {
      setActiveIndexes(activeIndexes.filter((x) => x !== idx));
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="faq">
        <div className="title">
          Frequently Asked <span>Questions</span>
        </div>
        <div className="subtitle">
          You may fill out{" "}
          <Link href={""} target="blank">
            this form
          </Link>{" "}
          and our team will contact you. You may also join us in{" "}
          <Link href={"https://t.me/NextDotIDofficial/1"} target="_blank">
            Telegram
            <Image
              width={14}
              height={14}
              src="imgs/arrow-right-up.svg"
              alt=""
            />
          </Link>
        </div>
        {FAQRenderMap.map((x, idx) => {
          return (
            <div key={x.key} className="faq-item">
              <div className="faq-header" onClick={() => toggleExpand(idx)}>
                {x.title()}{" "}
                <Image
                  className="action"
                  width={24}
                  height={24}
                  src={
                    activeIndexes.includes(idx)
                      ? "imgs/faq/close.svg"
                      : "imgs/faq/expand.svg"
                  }
                  alt=""
                />{" "}
              </div>
              {activeIndexes.includes(idx) && (
                <div className="faq-content">{x.content()}</div>
              )}
            </div>
          );
        })}
        <div className="banner">
          <div className="text">
            Still confused? We’ll get back to you after filling out <br />
            <Link href={""} target="_blank">
              this form
            </Link>{" "}
            or simply join our{" "}
            <Link href={"https://t.me/NextDotIDofficial/1"} target="_blank">
              Telegram.
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
