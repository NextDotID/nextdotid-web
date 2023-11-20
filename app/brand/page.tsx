"use client";
import Button from "@/component/Button";
import Link from "next/link";
import SVG from "react-inlinesvg";
import Clipboard from "react-clipboard.js";

export default function BrandPage() {
  const dontsMap = [
    {
      key: 0,
      title: "Don’t use drop shadows",
      content: "Please don’t add shadows behind the logo",
      img: "imgs/brand/logodont-1.svg",
    },
    {
      key: 1,
      title: "Avoid using outlines",
      content: "Please don’t add outlines to the logo",
      img: "imgs/brand/logodont-2.svg",
    },
    {
      key: 2,
      title: "Do not stretch",
      content: "Please don’t stretch the logo",
      img: "imgs/brand/logodont-3.svg",
    },
    {
      key: 3,
      title: "Low resolution",
      content: "Please don’t apply logo in low resolution",
      img: "imgs/brand/logodont-4.svg",
    },
    {
      key: 4,
      title: "No textures",
      content: "Please don’t use logo as a frame for imagery",
      img: "imgs/brand/logodont-5.svg",
    },
    {
      key: 5,
      title: "Avoid low contrast",
      content: "Please don’t place on low contrast colors",
      img: "imgs/brand/logodont-6.svg",
    },
  ];
  const colors = [
    { key: "Zafre Blue", name: "Zafre Blue", hex: "#1A16B8" },
    { key: "Bluetiful", name: "Bluetiful", hex: "#1C68F3" },
    { key: "Maya Blue", name: "Maya Blue", hex: "#55B8FF" },
    { key: "Medium Sky Blue", name: "Medium Sky Blue", hex: "#70D7E6" },
    { key: "Golden Ochre", name: "Golden Ochre", hex: "#EECB50" },
    { key: "Floral White", name: "Floral White", hex: "#FFF9F2" },
    { key: "Blue Black", name: "Blue Black", hex: "#030227" },
    { key: "Eerie Black", name: "Eerie Black", hex: "#141414" },
  ];

  const gradients = [
    {
      key: "background: linear-gradient(51deg, #EECB50 43.1%, #55B8FF 61.1%, #1A16B8 74.09%)",
      colors: [
        {
          hex: "#EECB50",
          stop: "43.1",
        },
        {
          hex: "#55B8FF",
          stop: "61.1",
        },
        {
          hex: "#1A16B8",
          stop: "74.09",
        },
      ],
      degree: 51,
    },
    {
      key: "background: var(--gradients-gradient-2, linear-gradient(222deg, #EECB50 5.45%, #70D7E6 78.15%)",
      colors: [
        {
          hex: "#EECB50",
          stop: "5.45",
        },
        {
          hex: "#70D7E6",
          stop: "78.15",
        },
      ],
      degree: 222,
    },
    {
      key: "background: var(--gradients-gradient-3, linear-gradient(224deg, #1A16B8 29.93%, #55B8FF 75.86%)",
      colors: [
        {
          hex: "#1A16B8",
          stop: "29.93",
        },
        {
          hex: "#55B8FF",
          stop: "75.86",
        },
      ],
      degree: 224,
    },
    {
      key: "background: var(--gradients-gradient-4, linear-gradient(226deg, #EECB50 15.01%, #1A16B8 76.16%)",
      colors: [
        {
          hex: "#EECB50",
          stop: "15.01",
        },
        {
          hex: "#1A16B8",
          stop: "76.16",
        },
      ],
      degree: 226,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="section brand-header">Brand Guidelines</div>
      <div className="section">
        <div className="title">Next.ID Brand</div>
        <div className="row">
          <div className="item">
            <div className="item-title">Logomark</div>
            <img className="item-img" src="imgs/brand/logomark.svg" alt="" />
            <div className="item-content">
              {`The logomark is constructed with the concept of Next.ID at its core-- the arrow conveying the forward-moving active process of connection and progression of Next.ID as a protocol, while the period represents the individual components bringing together discrete digital identifiers and data points, overall highlighting the protocol's role in organizing and assembling these components into a meaningful whole.`}
            </div>
          </div>
          <div className="item">
            <div className="item-title">Logotype</div>
            <img className="item-img" src="imgs/brand/logotype.svg" alt="" />
            <div className="item-content">{`The Next.ID logotype is made from a distinctive, futuristic typeface that forms the foundation, custom-designed to evoke a sense of forward-thinking innovation. With the bold arrow line linking the "e"  and "x", it represents the merging and interweaving of various digital identities, reflecting the protocol's ability to weave together a person's multiple identifiers into a sovereign identity graph.`}</div>
          </div>
        </div>
        <div className="row">
          <div className="item">
            <div className="item-title">Clearspace</div>
            <img
              className="item-img big"
              src="imgs/brand/clearspace.svg"
              alt=""
            />
            <div className="item-content">
              {`The clearspace of our logo is a designated area around the logo where no other elements or text should be placed. This clearspace is crucial to maintain the logo's visual integrity, legibility, and impact, ensuring it stands out effectively in various applications.`}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="item logodonts">
            <div className="item-title">{`Logo Dont's`}</div>
            <div className="item-content">{`Creating an effective and memorable logo is crucial for brand identity and recognition. Here are some key do's and don'ts for logo design:`}</div>
            <div className="flex">
              {dontsMap.map((x) => {
                return (
                  <div key={x.key} className="logo-item">
                    <img src={x.img} alt="" />
                    <div className="item-title">{x.title}</div>
                    <div className="item-content">{x.content}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="section colors">
        <div className="title">
          Colors
          <div className="subtitle">
            Our brand palette combines rich, deep, and warm hues with a clean,
            timeless backdrop to create a sophisticated and approachable brand
            identity.
          </div>
        </div>
        <div className="wrapper">
          {colors.map((x) => {
            return (
              <div key={x.key} className="card">
                <div
                  className="color"
                  style={{
                    background: x.hex,
                    border: x.hex === "#FFF9F2" ? "1px solid #DBD3C9" : "",
                  }}
                ></div>
                <div className="card-title">{x.name}</div>
                <div className="card-content">{x.hex}</div>
              </div>
            );
          })}
        </div>
        <div className="flex-title">
          <div className="title gradient">Gradients</div>
          <div className="line" />
        </div>
        <div className="wrapper center">
          {gradients.map((x, idx) => {
            return (
              <div key={x.key} className="card">
                <img
                  className="gradient"
                  src={`imgs/brand/gradient-${idx + 1}.png`}
                  alt=""
                />
                <div className="gradient-content">
                  <div className="table">
                    <div className="item-hex">
                      <div className="item-title">HEX</div>
                      {x.colors
                        .map((x) => x.hex)
                        .map((i) => {
                          return (
                            <div key={`item_${i}`} className="flex">
                              <div
                                style={{
                                  width: ".75rem",
                                  height: ".75rem",
                                  background: i,
                                }}
                              ></div>
                              {i}
                            </div>
                          );
                        })}
                      <div
                        className="flex"
                        style={{
                          alignSelf: "flex-start",
                        }}
                      >
                        <SVG
                          src="imgs/brand/degree.svg"
                          width={12}
                          height={12}
                        />
                        {x.degree}°
                      </div>
                    </div>
                    <div className="item-hex">
                      <div className="item-title">STOP</div>
                      {x.colors
                        .map((x) => x.stop)
                        .map((i) => {
                          return (
                            <div key={`item_${i}`} className="flex">
                              {i}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  <Link
                    href={`imgs/brand/gradient-${idx + 1}.png`}
                    target="_blank"
                    download
                  >
                    <Button variant="secondary">
                      PNG <SVG src="imgs/brand/download.svg" />
                    </Button>
                  </Link>

                  <div className="code">
                    <p>{x.key} </p>
                    <Clipboard
                      component="div"
                      className="action"
                      data-clipboard-text={x.key}
                      onSuccess={() => {}}
                    >
                      <SVG width={16} height={16} src="imgs/brand/copy.svg" />
                    </Clipboard>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="section asset">
        <div className="title">
          <div>Assets</div>
          <Button variant="primary">
            <Link href={"#"}>Download Assets</Link>{" "}
            <SVG src="imgs/brand/download.svg" />
          </Button>
        </div>
        <div className="assets-wrapper">
          <div className="asset-item">
            <img src="imgs/brand/logomark.svg" alt="" />
            <div className="ctx">
              <div className="ctx-title">Logomark</div>
              <div className="flex">
                <Link href={"imgs/brand/logomark.png"} target="_blank" download>
                  <Button variant="secondary">
                    PNG <SVG src="imgs/brand/download.svg" />
                  </Button>
                </Link>

                <Link href={"imgs/brand/logomark.svg"} target="_blank" download>
                  <Button variant="secondary">
                    SVG <SVG src="imgs/brand/download.svg" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="asset-item">
            <img src="imgs/brand/logotype.svg" alt="" />
            <div className="ctx">
              <div className="ctx-title">Logotype</div>
              <div className="flex">
                <Link href={"imgs/brand/logotype.png"} target="_blank" download>
                  <Button variant="secondary">
                    PNG <SVG src="imgs/brand/download.svg" />
                  </Button>
                </Link>

                <Link href={"imgs/brand/logotype.svg"} target="_blank" download>
                  <Button variant="secondary">
                    SVG <SVG src="imgs/brand/download.svg" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
