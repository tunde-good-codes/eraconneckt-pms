
import "./Newsletter.css";

import Content from "./components/Content";
export default function Newsletters() {

    return (
      <section id="newsletter" className="newsletter">
        <div className="newsletter-div">
          <div className="newsletter-overlay">
            <Content />
          </div>
        </div>
      </section>
    );



}
