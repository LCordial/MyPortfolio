import styles from "./component style/about.module.scss";

import main from "../styles/index.module.scss";

const name = "Hi, I'm Eli.";
export const siteTitle = "My Portfolio";

export default function Aboutme({ children, aboutme }) {
  return (
    <div className={[styles.container, styles.backgroundContainer].join(" ")}>
      <header className={styles.header}>
        {aboutme ? (
          <>
            <h1 className={styles.heading2Xl}>{name}</h1>
            <section className={styles.headingMd}>
              <p className={[styles.introparagraph].join(" ")}>
                I'm an Australian front-end web developer and designer, dabbling
                in back-end and game development occasionally. I specialise in web development. Using languages like Javascript, C#, and
                SCSS.
              </p>
            </section>
          </>
        ) : (
          <></>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
