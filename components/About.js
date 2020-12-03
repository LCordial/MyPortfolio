import styles from "./component style/about.module.scss";

const name = "Hi, I'm Eli.";
export const siteTitle = "My Portfolio";

export default function Aboutme({ children, home }) {
  return (
    <div className={[styles.container, styles.backgroundContainer].join(" ")}>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${styles.borderCircle}`}
              alt={name}
            />
            <h1 className={styles.heading2Xl}>{name}</h1>
            <section className={styles.headingMd}>
              <p className={[styles.introparagraph].join(" ")}>
                I'm an Australian front-end web developer. I specialise in web
                and game development. Wanting to become better everyday.
                Specializing in Web development and Game Development. Using
                languages like Javascript, C#, HTML and CSS.
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
