"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SVG from "react-inlinesvg";
import Link from "next/link";
export default function Comments() {
  const [index, setIndex] = useState(0);
  const [swiper, setSwiper] = useState<any>(null);
  return (
    <div className="comments">
      <SVG
        src="imgs/partners/left.svg"
        width={36}
        height={36}
        className="action-left"
        onClick={() => {
          if (index === 1) {
            swiper.slideTo(0);
          }
        }}
      />
      <SVG
        src="imgs/partners/left.svg"
        width={36}
        height={36}
        onClick={() => {
          if (index === 0) {
            swiper.slideTo(1);
          }
        }}
        className="action-right"
      />
      <Swiper
        style={{ width: "100%" }}
        wrapperClass="partner-wrapper"
        onSwiper={setSwiper}
        onActiveIndexChange={(v) => {
          setIndex(v.activeIndex);
        }}
      >
        <SwiperSlide key={0} className="item">
          <img src="imgs/partners/partner1.svg" alt="" />
          <div className="content">
            <div className="text">
              “We used <span>{`Next.ID's Relation Service`}</span>, which
              brought us a large amount of identity data and gave us the ability
              to understand a {`user's`} identity and relationships. And we are
              trying to build our identity layer based on{" "}
              <span>{`Next.ID's Proof Service`}</span>. The {`team's`} in-depth
              understanding of DID makes us choose to develop based on{" "}
              <span>{`Next.ID`}</span> instead of building it ourselves from
              scratch.”
            </div>
            <div className="badge">
              <strong>0xJA</strong>, Developer at
              <span>Data2.Cash</span>
            </div>
            <Link href="https://github.com/0xja-eth" target="_blank">
              <SVG width={36} height={36} src="imgs/partners/github.svg" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide key={1} className="item">
          <img src="imgs/partners/partner2.svg" alt="" />
          <div className="content">
            <div className="text">
              “The integration with <span>{`Next.ID's`}</span>{" "}
              <span>RelationService</span> has opened up new avenues for us,
              allowing for more comprehensive off-chain and on-chain identity
              queries and enriched social use cases. The partnership has
              bolstered our ability to provide a more nuanced and accurate risk
              analysis for our users.”
            </div>
            <div className="badge">
              <strong>0xScope</strong>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="controls">
        <div
          onClick={() => {
            swiper.slideTo(0);
          }}
          className={`control ${index === 0 ? "active" : ""}`}
        ></div>
        <div
          onClick={() => {
            swiper.slideTo(1);
          }}
          className={`control ${index === 1 ? "active" : ""}`}
        ></div>
      </div>
    </div>
  );
}
