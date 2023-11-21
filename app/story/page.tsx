export default function Story() {
  const config1 = [
    {
      name: "Decentralization at Its Core",
      content: "No single entity has control over your \nidentity graph.",
      img: "imgs/story/story-1.svg",
      color: "#EECB50",
    },
    {
      name: "Privacy by Design",
      content: "Your identity, your control. Share only \nwhat you want.",
      img: "imgs/story/story-2.svg",
      color: "#70D7E6",
    },
  ];
  const config2 = [
    {
      name: "Evolving Social Graph",
      content:
        "Understand and map your digital \ninteractions across Web2 & Web3.",
      img: "imgs/story/story-3.svg",
      color: "#55B8FF",
    },
    {
      name: "Interoperable Framework",
      content:
        "Connect and share across multiple \nplatforms and cross chain seamlessly.",
      img: "imgs/story/story-4.svg",
      color: "#1A16B8",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="socioverse">
        <div className="text">
          <div className="title">
            An <span>Open</span>, <span>Connected</span>, <br />
            <span>Self-governed</span>
            <br /> Socioverse
          </div>
          <div className="content">
            We believe the power of identity and data should be in the hands of
            individuals while see the challenge in user adoption of Web3
            applications. We empower builders to onboard users from Web2 to Web3
            safer and faster, with millions of Web2 traffic as growth engine.
          </div>
        </div>
        <img className="img" src="imgs/story/finger.svg" alt="" />
      </div>
      <div className="philosophy">
        <div className="title">Our Philosophy</div>
        <div className="items">
          {config1.map((x) => {
            return (
              <div
                key={x.name}
                className="item"
                style={{
                  backgroundColor: x.color,
                }}
              >
                <div className="header">
                  <div className="title">{x.name}</div>
                  <div className="sub">{x.content}</div>
                </div>
                <img className="icon" src={x.img} alt="" />
              </div>
            );
          })}
        </div>
        <div className="items">
          {config2.map((x, idx) => {
            return (
              <div
                key={x.name}
                className={`item item-${idx}`}
                style={{
                  backgroundColor: x.color,
                }}
              >
                <div className="header">
                  <div className="title">{x.name}</div>
                  <div className="sub">{x.content}</div>
                </div>
                <img className="icon" src={x.img} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
