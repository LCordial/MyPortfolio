import styles from "./component style/roadmap.module.scss";

export default function Roadmap({ children, roadmap }) {
  return (
    <div>
      <header className={styles.header}>
        {roadmap ? (
          <>
            <div className={styles.container}></div>
          </>
        ) : (
          <></>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
