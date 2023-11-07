export default function Comments() {
  return (
    <div className="comments">
      <div className="item">
        <img src="imgs/partners/partner1.png" alt="" />
        <div className="content">
          <div className="text">
          “Next.ID has transformed the way I interact online. I now feel {' '}
            <span>in control</span> and <span>secure</span>.”
          </div>
          <div className="badge">
            <strong>Jane Doe,</strong> Partnerships at <span>Project ABC</span>
          </div>
        </div>
      </div>
      <div className="item">
        <img src="imgs/partners/partner2.png" alt="" />
        <div className="content">
          <div className="text">
            “As a developer, the Next.ID framework gives my platform an <span>edge</span> in
            the realm of <span>digital identity</span>.”
          </div>
          <div className="badge">
            <strong>John Smith,</strong> Developer at <span>Project XYZ</span>
          </div>
        </div>
      </div>
    </div>
  );
}
