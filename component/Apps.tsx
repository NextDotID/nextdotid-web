export default function Apps() {
  return (
    <div className="apps">
      <div className="title-container">
        <div className="title">
          <span>Future-proof</span> Your Apps
          <br />
          <span>with Universal Profile SDK</span>
        </div>
        <div>
          A <span>Universal Profile SDK</span> to connect users across Web2 and
          Web3
        </div>
      </div>
      <div className="row">
        <div className="item">
          <img src="/imgs/apps/app-1.svg" alt="" />
          <div className="app-title">Proof Service</div>
          <div className="app-content">
            Off-chain decentralized identifiers called Avatars to securely
            connect social profiles and wallets.
          </div>
        </div>
        <div className="item">
          <img src="/imgs/apps/app-2.svg" alt="" />
          <div className="app-title">KeyValue (KV) Service</div>
          <div className="app-content">
            Data backpack adding social metadata like usernames and Twitter
            followers to Avatars
          </div>
        </div>
        <div className="item">
          <img src="/imgs/apps/app-3.svg" alt="" />
          <div className="app-title">Relation Service</div>
          <div className="app-content">
            Graph database for fast query over [100k records] 410k+ verifiable
            social profiles with identities like ENS and Twitter; credentials
            like POAP and DegenScore.
          </div>
        </div>
        <div className="item">
          <img src="/imgs/apps/app-4.svg" alt="" />
          <div className="app-title">AuthService</div>
          <div className="app-content">
            Quickly re-authenticate users with Avatar or wallet signatures
            rather than passwords
          </div>
        </div>
      </div>
    </div>
  );
}
