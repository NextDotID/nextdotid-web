"use client";
import useMatchBreakpoints from "@/utils/hooks";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function UseCases() {
  const { isMobile } = useMatchBreakpoints();
  const [mobile, setMobile] = useState(false);
  const [index, setIndex] = useState(0);
  const [swiper, setSwiper] = useState<any>(null);
  useEffect(() => {
    setMobile(isMobile);
  }, [isMobile]);

  const worksMap = [
    {
      key: "Create",
      title: "Create",
      content:
        "Create a decentralized identity with Next.ID Avatar with Proof Service",
      img: "imgs/cases/case-1.svg",
    },
    {
      key: "Link",
      title: "Link",
      content:
        "Use Avatar signature to securely link to Twitter, ETH, ENS, Discord identities with confidence, updating metadata on KV Service",
      img: "imgs/cases/case-2.svg",
    },
    {
      key: "Explore",
      title: "Explore",
      content:
        "Analyze social graphs, recognize trends, and opportunities with Relation Service",
      img: "imgs/cases/case-3.svg",
    },
  ];

  return (
    <div className="cases">
      <div className="title">
        <span>How</span> It Works
      </div>
      {(!mobile && (
        <div className="row">
          {worksMap.map((x) => {
            return (
              <div key={x.key} className="item">
                <img src={x.img} alt="" />
                <div className="case-title">{x.title}</div>
                <div className="case-content">{x.content}</div>
              </div>
            );
          })}
        </div>
      )) || (
        <div className="row cases-row">
          <Swiper
            style={{
              width: "100%",
            }}
            onSwiper={setSwiper}
            onActiveIndexChange={(v) => {
              setIndex(v.activeIndex);
            }}
            wrapperClass="swiper-row"
            slidesPerView={"auto"}
            normalizeSlideIndex
            centeredSlides={true}
          >
            {worksMap.map((x) => (
              <SwiperSlide className="slide-item" key={`slide_${x.key}`}>
                <img src={x.img} alt="" />
                <div className="case-title">{x.title}</div>
                <div className="case-content">{x.content}</div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="controls">
            {worksMap.map((x, idx) => {
              return (
                <div
                  onClick={() => {
                    swiper.slideTo(idx);
                  }}
                  key={`control_${x.key}`}
                  className={`control ${index === idx ? "active" : ""}`}
                ></div>
              );
            })}
          </div>
        </div>
      )}
      <div className="intro">
        <div className="left">
          <div className="left-title">
            Use Cases <span></span>
          </div>
          <div className="container">
            <div className="common-title">Authentic User Assurance</div>
            <div className="common-content">
              Combat sybil attacks effectively. Attract genuine users to your
              applications and protocols, ensuring a safer, more credible Web3
              community.
            </div>
          </div>
          <img src="/imgs/cases/case-4.svg" alt="" />
        </div>
        <div className="right">
          <div className="item">
            <div className="common-title">Unified Identity Portfolio</div>
            <div className="common-content">
              Craft futuristic profiles akin to Web3.bio. Centralize essential
              identities for easy access, creating a one-stop digital identity
              hub.
            </div>
          </div>
          <div className="item">
            <div className="common-title">Community Growth Toolkit</div>
            <div className="common-content">
              Discover hotspots of potential user personas and activity with the
              Relation Service. Unlock targeted engagement and grow your
              community strategically
            </div>
          </div>
          <div className="item">
            <div className="common-title">Cross-chain User Analytics:</div>
            <div className="common-content">
              Harness rich user insights from an expansive mapping across Web2 &
              Web3. Build analytics products with comprehensive social graph
              analytics.
            </div>
          </div>
          <div className="item">
            <div className="common-title">Universal Gaming Passport</div>
            <div className="common-content">
              Deploy a native decentralized identity across diverse on-chain
              games. Elevate your gaming persona, accumulating reputation
              seamlessly in the Autonomous World.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
