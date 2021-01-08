import styles from "./component style/title.module.scss";

import main from "../styles/index.module.scss";

export default function Title({ children, title }) {
  return (
    <div>
      <header className={styles.header}>
        {title ? (
          <>
            <div className={styles.container}>
              <h1 className={[styles.title]}>
                Welcome to my Portfolio
                <p>
                  <p className={main.paragraph}>
                    I code beautifully simple things, and I love what I do.
                  </p>
                </p>
              </h1>
              <p>
                <span>
                  Photo by{" "}
                  <a
                    className={styles.link}
                    href="https://unsplash.com/@filipz?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
                  >
                    Filip Zrnzević
                  </a>{" "}
                  on{" "}
                  <a
                    className={styles.link}
                    href="https://unsplash.com/@filipz?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
                  >
                    Unsplash
                  </a>
                </span>
              </p>
            </div>
          </>
        ) : (
          <></>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
