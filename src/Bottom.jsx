import React from "react";
import "./bottom.css";
import svg from "./images/svg.png";
export default function Bottom() {
  return (
    <div className="mb">
      <div className="leftb">
        <h1 className="hb">
          Invest in skills,
          <br /> <span className="sp">earn 10X</span> of what you paid.
        </h1>
        <p className="pb">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="boxesb">
          <div className="boxb">
            <h1>1.2 Cr/Year</h1>
            <p>highest fresher package</p>
          </div>
          <div className="boxb">
            <h1>Multiple 100 Ranks </h1>
            <p> in kickstart last year</p>
          </div>
        </div>
        <div className="boxesb">
          <div className="boxb">
            <h1>1000+ Offers</h1>
            <p>from top companies</p>
          </div>
          <div className="boxb">
            <h1>Trusted by IITians</h1>
            <p>for their career prep</p>
          </div>
        </div>
      </div>
      <div className="rightb">
        <div className="top">
          <div className="topl">
            <h1>Premium Victory Batch</h1>
            <span>₹19,999</span>
            <p>₹13,999</p>
          </div>
          <div className="topr">
            <img src={svg} alt="svg" />
          </div>
        </div>
        <div className="bot">
            <div className="botbox"></div>
            <div className="bt">100+ Hrs Live Content</div>
            <div className="botbox"></div>
            <div className="bt">50+ Hrs Contest</div>
            <div className="botbox"></div>
            <div className="bt">500+ Problems</div>
            <div className="botbox"></div>
            <div className="bt">Includes an interview bootcamp and access to a mentor network</div>
            <div className="botbox"></div>
            <div className="bt">Enjoy access to our content for one year (paid extensions available)</div>
            <div className="botbox"></div>
            <div className="bt">Flexible payment options, including no-cost EMI, are available.</div>
            <button className="btn">Join now →</button>
        </div>
      </div>
    </div>
  );
}
