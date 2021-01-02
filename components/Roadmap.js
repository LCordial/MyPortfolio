import styles from "./component style/roadmap.module.scss";

export default function Roadmap({ children, roadmap }) {
  return (
    <div>
        {roadmap ? (
          <>
            <div className={styles.container}>
              <div className={styles.grid}>
                <div className={styles.column}>
                  <h1 className={styles.headers}>Front-end</h1>
                  <div className={styles.item}>
                      <img className={styles.image} src="/images/languages/html.png"></img>
                  </div>
                  <div className={styles.item}>
                      <img className={styles.image} src="/images/languages/css.png"></img>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      <main>{children}</main>
    </div>
  );
}
