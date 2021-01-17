import styles from "./component style/roadmap.module.scss";

import main from "../styles/index.module.scss";

export default function Roadmap({ children, roadmap }) {
  return (
    <div>
      {roadmap ? (
        <>
          <h1 className={[main.secondaryheader]}>Personal Roadmap</h1>

          <div className={styles.container}>
            <div className={styles.grid}>
              <div className={styles.column}>
                {/* Frontend */}

                {/* Html */}

                <h1 className={styles.headers}>Front-end</h1>
                <div className={styles.item}>
                  <img
                    className={styles.image}
                    src="/images/languages/html5.svg"
                  ></img>
                  <p className={styles.text}>HTML5</p>
                  {/* <div className={styles.progress}>
                    <div className={styles.htmlprogressvalue}></div>
                  </div> */}
                </div>

                {/* CSS */}

                <div className={styles.item}>
                  <img
                    className={styles.image}
                    src="/images/languages/css3.svg"
                  ></img>
                  <p className={styles.text}>CSS3</p>
                </div>
                {/* <div className={styles.progress}>
                  <div className={styles.cssprogressvalue}></div>
                </div> */}

                {/* JS */}

                <div className={styles.item}>
                  <img
                    className={styles.image}
                    src="/images/languages/javascript.svg"
                  ></img>
                  <p className={styles.text}>Javascript</p>
                </div>
                {/* <div className={styles.progress}>
                  <div className={styles.jsprogressvalue}></div>
                </div> */}

                {/* SASS */}

                <div className={styles.item}>
                  <img
                    className={styles.image}
                    src="/images/languages/sass.svg"
                  ></img>
                  <p className={styles.text}>SASS</p>
                </div>
                {/* <div className={styles.progress}>
                  <div className={styles.sassprogressvalue}></div>
                </div> */}
              </div>

              {/* Backend */}

              <div className={styles.column}>
                <h1 className={styles.headers}>Back-end</h1>

                {/* Python */}

                <div className={styles.item}>
                  <img
                    className={styles.image}
                    src="/images/languages/python.svg"
                  ></img>
                  <p className={styles.text}>Python</p>
                  {/* <div className={styles.progress}>
                    <div className={styles.pythonprogressvalue}></div>
                  </div> */}
                </div>

                {/* C# */}

                <div className={styles.item}>
                  <img
                    className={styles.image}
                    src="/images/languages/csharp.svg"
                  ></img>
                  <p className={styles.text}>C#</p>
                </div>
                {/* <div className={styles.progress}>
                  <div className={styles.csprogressvalue}></div>
                </div> */}
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
