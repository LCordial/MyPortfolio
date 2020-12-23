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
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${styles.borderCircle}`}
              alt={name}
            />
            <h1 className={styles.heading2Xl}>{name}</h1>
            <section className={styles.headingMd}>
              <p className={[styles.introparagraph].join(" ")}>
                I'm an Australian front-end web developer and designer, dabbling
                in back-end development occasionally. I specialise in web and
                game development. Using languages like Javascript, C#, HTML and
                SCSS.
              </p>
            </section>
            <h1>
              <a
                href="https://www.youtube.com/channel/UCNCLfAQwOSe1HmPmPWX3sJA"
                className={[styles.title]}
              >
                Cordial Youtube
              </a>
            </h1>
            <p className={styles.description}>
              I also love to game. I am a small youtuber posting mainly gaming
              content which is edited in{" "}
              <a
                className={[main.plainlink]}
                href="https://www.blackmagicdesign.com/products/davinciresolve/"
              >
                Davinci Resolve.
              </a>
            </p>
          </>
        ) : (
          <></>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
