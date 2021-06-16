import styles from "./component style/footer.module.scss";

import main from "../styles/index.module.scss";

export default function Footer({ children, footer }) {
  return (
    <div className={[styles.container]}>
      {footer ? (
        <>
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
