"use client";
import useMatchBreakpoints from "@/utils/hooks";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Apps() {
  const { isMobile } = useMatchBreakpoints();
  const [mobile, setMobile] = useState(false);
  const [index, setIndex] = useState(0);
  const [swiper, setSwiper] = useState<any>(null);
  useEffect(() => {
    setMobile(isMobile);
  }, [isMobile]);

  const appsMap = [
    {
      key: "Proof Service",
      title: "Proof Service",
      content: `Off-chain decentralized identifiers called Avatars to securely connect social profiles and wallets.`,
      img: "imgs/apps/app-1.svg",
    },
    {
      key: "KeyValue (KV) Service",
      title: "KeyValue (KV) Service",
      content: `  Data backpack adding social metadata like usernames and Twitter followers to Avatars`,
      img: "imgs/apps/app-2.svg",
    },
    {
      key: "Relation Service",
      title: "Relation Service",
      content: `Graph database for fast query over [100k records] 410k+ verifiable social profiles with identities like ENS and Twitter; credentials like POAP and DegenScore.`,
      img: "imgs/apps/app-3.svg",
    },
    {
      key: "AuthService",
      title: "AuthService",
      content: `Quickly re-authenticate users with Avatar or wallet signatures rather than passwords`,
      img: "imgs/apps/app-4.svg",
    },
  ];
  return (
    <div className="apps">
      <div className="title-container">
        <div className="title">
          <span>Future-proof</span> Your Apps
          <br />
          <span>with Universal Profile SDK</span>
        </div>
        <div className="subtitle">
          A <span>Universal Profile SDK</span> to connect users across Web2 and
          Web3
        </div>
      </div>
      {!mobile ? (
        <div className="row">
          {appsMap.map((x, idx) => {
            return (
              <div key={x.key} className="item">
                <img src={x.img} alt="" />
                <div className="app-title">{x.title}</div>
                <div className="app-content">{x.content}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="row app-row">
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
            {appsMap.map((x) => (
              <SwiperSlide className="slide-item" key={`slide_${x.key}`}>
                <img src={x.img} alt="" />
                <div className="case-title">{x.title}</div>
                <div className="case-content">{x.content}</div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="controls">
            {appsMap.map((x, idx) => {
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
    </div>
  );
}
