import styles from "./component style/title.module.scss";

import main from "../styles/index.module.scss";

import animationController from "../controllers/animationcontroller.js";

const name = "Eli.";

export default function Title({ children, title }) {
  return (
    <div>
      <header className={styles.header}>
        {title ? (
          <>
            <div className={styles.container}>
              <div className={`${styles.titleText} ${styles.titleAnimation}`}>
                <h1>I code beautifully simple things.</h1>
              </div>
              <div className={styles.icon}>
                <nav className={`${styles.menu} ${styles.profileAnimation}`}>
                  <input
                    type="checkbox"
                    href="#"
                    className="menu-open"
                    name="menu-open"
                    id="menu-open"
                  />
                  <label className="menu-open-button" for="menu-open">
                    <div className={styles.profileContainer}>
                      <img
                        src="/images/profile.jpg"
                        className={`${styles.headerHomeImage} ${styles.borderCircle} ${styles.profileAnimation}`}
                      />
                    </div>
                  </label>
                  <a
                    href="https://www.instagram.com/lcordial_/"
                    className="menu-item orange"
                  >
                    <label>
                      <img
                        className={styles.menuimage}
                        src="/images/socials/instagram.svg"
                      ></img>
                    </label>
                  </a>
                  <a
                    href="https://twitter.com/LCordial_"
                    className="menu-item lightblue"
                  >
                    <label>
                      <img
                        className={styles.menuimage}
                        src="/images/socials/twitter.svg"
                      ></img>
                    </label>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCNCLfAQwOSe1HmPmPWX3sJA"
                    className="menu-item red"
                  >
                    <label>
                      <img
                        className={styles.menuimage}
                        src="/images/socials/youtube.svg"
                      ></img>
                    </label>
                  </a>
                  <a
                    href="https://github.com/LCordial"
                    className="menu-item purple"
                  >
                    <label>
                      <img
                        className={styles.menuimage}
                        src="/images/socials/github.svg"
                      ></img>
                    </label>
                  </a>
                  <a href="#projects" className="menu-item green">
                    <label>
                      <img
                        className={styles.menuimage}
                        src="/images/socials/code.svg"
                      ></img>
                    </label>
                  </a>
                  <a href="https://github.com/Ambience-Studios" className="menu-item blue"><label>
                      <img
                        className={styles.menuimage}
                        src="/images/socials/box.svg"
                      ></img>
                    </label></a>
                </nav>
                <div className={`${main.credit} ${main.white}`}>
                  Photo by <a href="https://unsplash.com/@heytowner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">JOHN TOWNER</a> on <a href="https://unsplash.com/s/photos/forest-4k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </header>
      <main>{children}</main>
      <style jsx>
        {`
          body {
            padding: 0;
            margin: 0;
            background: #596778;
            color: #eeeeee;
            text-align: center;
            font-family: "Lato", sans-serif;
          }

          @media screen and (max-width: 700px) {
            body {
              padding: 170px 0 0 0;
              width: 100%;
            }
          }

          a {
            color: inherit;
          }

          .menu-item,
          .menu-open-button {
            border-radius: 100%;
            width: 80px;
            height: 80px;
            margin-left: -40px;
            position: absolute;
            text-align: center;
            line-height: 80px;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
            -webkit-transition: -webkit-transform ease-out 200ms;
            transition: -webkit-transform ease-out 200ms;
            transition: transform ease-out 200ms;
            transition: transform ease-out 200ms,
              -webkit-transform ease-out 200ms;
          }

          .menu-open {
            display: none;
          }

          .menu-open:checked + .menu-open-button .line-1 {
            -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
            transform: translate3d(0, 0, 0) rotate(45deg);
          }

          .menu-open:checked + .menu-open-button .line-2 {
            -webkit-transform: translate3d(0, 0, 0) scale(0.1, 1);
            transform: translate3d(0, 0, 0) scale(0.1, 1);
          }

          .menu-open:checked + .menu-open-button .line-3 {
            -webkit-transform: translate3d(0, 0, 0) rotate(-45deg);
            transform: translate3d(0, 0, 0) rotate(-45deg);
          }

          /* .menu-item {
          transition: all 0.1s ease 0s;
       } */

          .menu-item:hover {
            background: #eeeeee;
            color: #3290b1;
          }

          .menu-item:nth-child(3) {
            -webkit-transition-duration: 180ms;
            transition-duration: 180ms;
          }

          .menu-item:nth-child(4) {
            -webkit-transition-duration: 180ms;
            transition-duration: 180ms;
          }

          .menu-item:nth-child(5) {
            -webkit-transition-duration: 180ms;
            transition-duration: 180ms;
          }

          .menu-item:nth-child(6) {
            -webkit-transition-duration: 180ms;
            transition-duration: 180ms;
          }

          .menu-item:nth-child(7) {
            -webkit-transition-duration: 180ms;
            transition-duration: 180ms;
          }

          .menu-item:nth-child(8) {
            -webkit-transition-duration: 180ms;
            transition-duration: 180ms;
          }

          .menu-item:nth-child(9) {
            -webkit-transition-duration: 180ms;
            transition-duration: 180ms;
          }

          .menu-open-button {
            z-index: 2;
            -webkit-transition-timing-function: cubic-bezier(
              0.175,
              0.885,
              0.32,
              1.275
            );
            transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
            -webkit-transition-duration: 400ms;
            transition-duration: 400ms;
            -webkit-transform: scale(1.1, 1.1) translate3d(0, 0, 0);
            transform: scale(1.1, 1.1) translate3d(0, 0, 0);
            cursor: pointer;
            box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
          }

          .menu-open-button:hover {
            -webkit-transform: scale(1.2, 1.2) translate3d(0, 0, 0);
            transform: scale(1.2, 1.2) translate3d(0, 0, 0);
          }

          .menu-open:checked + .menu-open-button {
            -webkit-transition-timing-function: linear;
            transition-timing-function: linear;
            -webkit-transition-duration: 200ms;
            transition-duration: 200ms;
            -webkit-transform: scale(0.8, 0.8) translate3d(0, 0, 0);
            transform: scale(0.8, 0.8) translate3d(0, 0, 0);
          }

          .menu-open:checked ~ .menu-item {
            -webkit-transition-timing-function: cubic-bezier(
              0.935,
              0,
              0.34,
              1.33
            );
            transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
          }

          .menu-open:checked ~ .menu-item:nth-child(3) {
            transition-duration: 180ms;
            -webkit-transition-duration: 180ms;
            -webkit-transform: translate3d(0.08361px, -104.99997px, 0);
            transform: translate3d(0.08361px, -104.99997px, 0);
          }

          .menu-open:checked ~ .menu-item:nth-child(4) {
            transition-duration: 280ms;
            -webkit-transition-duration: 280ms;
            -webkit-transform: translate3d(90.9466px, -52.47586px, 0);
            transform: translate3d(90.9466px, -52.47586px, 0);
          }

          .menu-open:checked ~ .menu-item:nth-child(5) {
            transition-duration: 380ms;
            -webkit-transition-duration: 380ms;
            -webkit-transform: translate3d(90.9466px, 52.47586px, 0);
            transform: translate3d(90.9466px, 52.47586px, 0);
          }

          .menu-open:checked ~ .menu-item:nth-child(6) {
            transition-duration: 480ms;
            -webkit-transition-duration: 480ms;
            -webkit-transform: translate3d(0.08361px, 104.99997px, 0);
            transform: translate3d(0.08361px, 104.99997px, 0);
          }

          .menu-open:checked ~ .menu-item:nth-child(7) {
            transition-duration: 580ms;
            -webkit-transition-duration: 580ms;
            -webkit-transform: translate3d(-90.86291px, 52.62064px, 0);
            transform: translate3d(-90.86291px, 52.62064px, 0);
          }

          .menu-open:checked ~ .menu-item:nth-child(8) {
            transition-duration: 680ms;
            -webkit-transition-duration: 680ms;
            -webkit-transform: translate3d(-91.03006px, -52.33095px, 0);
            transform: translate3d(-91.03006px, -52.33095px, 0);
          }

          .menu-open:checked ~ .menu-item:nth-child(9) {
            transition-duration: 780ms;
            -webkit-transition-duration: 780ms;
            -webkit-transform: translate3d(-0.25084px, -104.9997px, 0);
            transform: translate3d(-0.25084px, -104.9997px, 0);
          }

          .blue {
            background-color: #669ae1;
            box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
            text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
          }

          .blue:hover {
            color: #669ae1;
            text-shadow: none;
          }

          .green {
            background-color: #70cc72;
            box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
            text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
          }

          .green:hover {
            color: #70cc72;
            text-shadow: none;
          }

          .purple {
            background-color: #c49cde;
            box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
            text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
          }

          .purple:hover {
            color: #c49cde;
            text-shadow: none;
          }

          .orange {
            background-color: #fc913a;
            box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
            text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
          }

          .orange:hover {
            color: #fc913a;
            text-shadow: none;
          }

          .lightblue {
            background-color: #62c2e4;
            box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
            text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
          }

          .lightblue:hover {
            color: #62c2e4;
            text-shadow: none;
          }

          .red {
            background-color: #fe4365;
            box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
            text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
          }

          .red:hover {
            color: #fe4365;
            text-shadow: none;
          }
        `}
      </style>
    </div>
  );
}
