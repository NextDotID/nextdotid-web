"use client";
import { useState } from "react";

const cardsMapping = [
  {
    key: "Plug-and-play",
    title: "Plug-and-play",
    content: "Easy-to-integrate Universal Profile SDK.",
    icon: "/imgs/cases/card-1.svg",
  },
  {
    key: "Ready-to-go “For You” Pages",
    title: "Ready-to-go “For You” Pages",
    content:
      "Use 410k+ profile connections and activity ready in our database.",
    icon: "/imgs/cases/card-2.svg",
  },
  {
    key: "Interoperable",
    title: "Interoperable",
    content:
      "Connect and share across multiple platforms and cross chain seamlessly.",
    icon: "/imgs/cases/card-3.svg",
  },
  {
    key: "Broad Compatibility",
    title: "Broad Compatibility",
    content:
      "Flexible tools that play well with others DIDs, wallets, and OAuth.",
    icon: "/imgs/cases/card-4.svg",
  },
  {
    key: "Engaging Insights",
    title: "Engaging Insights",
    content: "Dive deep into social connections without compromising privacy.",
    icon: "/imgs/cases/card-5.svg",
  },
];

export default function Identity() {
  const [active, setActive] = useState(0);
  return (
    <div className="identity">
      <div className="title-container">
        <div className="title">
          Radical Identity <span>Solutions</span> for <span>Radical Apps</span>
        </div>
        <div>Crafting Revolutionary Identities for Modern Applications</div>
      </div>
      <div className="banner">
        <form className="container">
          <label htmlFor="first" onClick={() => setActive(0)}>
            <input
              type="radio"
              name="check"
              id="first"
              checked={active === 0}
            />
            <div className="label label-1">
              <div className="num">01</div>
              <div className="label-title">Easy.</div>
              <div className="label-content">{`Experience the effortless implementation of 'Radical Identity Solutions for Radical Apps' and discover how seamless identity management can transform your application's user experience.`}</div>
            </div>
          </label>
          <label htmlFor="second" onClick={() => setActive(1)}>
            <input
              type="radio"
              name="check"
              id="second"
              checked={active === 1}
            />
            <div className="label label-2">
              <div className="num">02</div>
              <div className="label-title">Secure.</div>
              <div className="label-content">{`Security is paramount in 'Radical Identity Solutions for Radical Apps.' We employ robust encryption, stringent authentication measures, and continuous threat monitoring to ensure your app's data remains protected. With our comprehensive security protocols, you can trust that your app and its users are in safe hands`}</div>
            </div>
          </label>
          <label htmlFor="third" onClick={() => setActive(2)}>
            <input
              type="radio"
              name="check"
              id="third"
              checked={active === 2}
            />
            <div className="label label-3">
              <div className="num">03</div>
              <div className="label-title">Comprehensive.</div>
              <div className="label-content">
                {`From centralizing user data to providing valuable insights, 'Radical Identity Solutions for Radical Apps' offers a comprehensive approach to identity management, ensuring your app's success at every level.`}
              </div>
            </div>
          </label>
        </form>
        <form className="container controls">
          <label htmlFor="first">
            <input
              type="radio"
              name="check"
              id="first"
              checked={active === 0}
            />
            <div className="control"></div>
          </label>
          <label htmlFor="second">
            <input
              type="radio"
              name="check"
              id="second"
              checked={active === 1}
            />
            <div className="control"></div>
          </label>
          <label htmlFor="third">
            <input
              type="radio"
              name="check"
              id="third"
              checked={active === 2}
            />
            <div className="control"></div>
          </label>
        </form>
      </div>
      <div className="cards">
        {cardsMapping.map((x) => {
          return (
            <div key={x.key} className="card-item">
              <img className="card-icon" src={x.icon} alt="" />
              <div className="card-title">{x.title}</div>
              <div className="card-content">{x.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
