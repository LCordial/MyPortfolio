import styles from "./component style/footer.module.scss";

import main from "../styles/index.module.scss";

export default function Footer({ children, footer }) {
  return (
    <div className={[styles.container]}>
      {footer ? (
        <>
          <div className={[styles.socials]}>
            <a href="https://twitter.com/LCordial_">
              <img
                src="/images/socials/twitter.svg"
                className={[styles.sociallogos]}
              ></img>
            </a>
            <a href="https://www.youtube.com/channel/UCNCLfAQwOSe1HmPmPWX3sJA">
              <img
                src="/images/socials/youtube.svg"
                className={[styles.sociallogos]}
              ></img>
            </a>
            <a href="https://www.instagram.com/lcordial_/">
              <img
                src="/images/socials/instagram.svg"
                className={[styles.sociallogos]}
              ></img>
            </a>
          </div>

          <a href="https://github.com/LCordial" className={[styles.creation]}>
            <p>Handcrafted by me</p>
          </a>

          <a href="https://nextjs.org/" className={[styles.nextjs]}>
            <p>Powered by</p>{" "}
            <img
              src="/images/nextjslogo.png"
              className={[styles.nextjslogo]}
            ></img>
          </a>
        </>
      ) : (
        <></>
      )}
      <main>{children}</main>
    </div>
  );
}
