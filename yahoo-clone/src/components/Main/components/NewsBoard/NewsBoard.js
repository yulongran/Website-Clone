import React from "react";
import "./NewsBoard.css";

function NewsBoard() {
  return (
    <div className="news-board">
      <div className="top-news">
        <img
          className="top-news-img"
          alt=""
          src="https://s.yimg.com/uu/api/res/1.2/qGeIlDSyggACZXf2LSpwKQ--~B/Zmk9c3RyaW07aD0zODg7cHlvZmY9MDtxPTk1O3c9NzIwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/os/creatr-uploaded-images/2020-07/a7dac5b0-d284-11ea-aaff-f196760fb1bf.cf.webp"
        />
        <div className="top-news-description">
          <div className="top-news-wrapper">
            <h2>Experts advise prompt lockdowns in 13 states</h2>
            <p>
              New guidelines from Harvard University say that the
              recommendations from President Trump's coronavirus task force may
              be too weak to suppress the virus.
            </p>
            <span>'Tipping point for uncontrolled spread' »</span>
          </div>
        </div>
      </div>
      <div className="sub-news">
        <ul>
          <li>
            <a href="/#">
              <img
                alt=""
                className="sub-news-img"
                src="https://s.yimg.com/uu/api/res/1.2/y4NxmR5pDcT86lDPpZWIOw--~B/Zmk9c3RyaW07aD0xNjA7cHlvZmY9MDtxPTgwO3c9MzQwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/os/creatr-uploaded-images/2020-07/4e3662c0-d25d-11ea-bfff-c712c2c4f9e6.cf.webp"
              />
              <h3>State senator allegedly stole $600K to pay for wedding</h3>
            </a>
          </li>
          <li>
            <a href="/#">
              <img
                alt=""
                className="sub-news-img"
                src="https://s.yimg.com/uu/api/res/1.2/pyav12z8vrBQIR1zfL.I0Q--~B/Zmk9c3RyaW07aD0xNjA7cHlvZmY9MDtxPTgwO3c9MzQwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/os/creatr-uploaded-images/2020-07/c4aec8d0-d27f-11ea-bf5f-dc0fddc52180.cf.webp"
              />
              <h3>2 states hit new record increase in virus deaths </h3>
            </a>
          </li>
          <li>
            <a href="/#">
              <img
                alt=""
                className="sub-news-img"
                src="https://s.yimg.com/uu/api/res/1.2/RHTZVAyR29lwaJ3PElFbxw--~B/Zmk9c3RyaW07aD0xNjA7cHlvZmY9MDtxPTgwO3c9MzQwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/os/creatr-uploaded-images/2020-07/09d39520-d1d2-11ea-af7d-8eab5027ca64.cf.webp"
              />
              <h3>Amazon discounts MacBook Air to all-time lowest price</h3>
            </a>
          </li>
          <li>
            <a href="/#">
              <img
                alt=""
                className="sub-news-img"
                src="https://s.yimg.com/uu/api/res/1.2/sU2ZYiJ7ytUHM9McZ3b4qw--~B/Zmk9c3RyaW07aD0xNjA7cHlvZmY9MDtxPTgwO3c9MzQwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/os/creatr-uploaded-images/2020-07/d59f6e60-d27a-11ea-bfff-243280c84afe.cf.webp"
              />
              <h3>Disney heiress lays into co.: 'Layoffs are coming'</h3>
            </a>
          </li>
          <li>
            <a href="/#">
              <img
                alt=""
                className="sub-news-img"
                src="https://s.yimg.com/uu/api/res/1.2/E69FvhdHOW1Rs7iI69t.zg--~B/Zmk9c3RyaW07aD0xNjA7cHlvZmY9MDtxPTgwO3c9MzQwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/os/creatr-uploaded-images/2020-07/4fe6f2c0-d27a-11ea-ad67-5f40669fa9d2.cf.webp"
              />
              <h3>Astros players avoided real punishment — until now</h3>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NewsBoard;
