import styles from './component style/about.module.scss'
import utilStyles from '../styles/utils.module.scss'

import Link from 'next/link'

const name = "Hi, I'm Eli."
export const siteTitle = 'My Portfolio'

export default function Aboutme({ children, home }) {
  return (
    <div className={[styles.container, styles.backgroundContainer].join(' ')}>
      <header className={styles.header}>
        {home ? (
          <>
            <img src="/images/profile.jpg" className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`} alt={name}/>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <section className={utilStyles.headingMd}>
              <p className={[utilStyles.introParagraph, styles.text].join(' ')}>I am a beginner backend and frontend Software Engineer, wanting to become better everyday. Specializing in Web development and Game Development. Using languages like Javascript, C#, HTML and CSS.</p>
            </section>
          </>
        ) : (
          <>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  )
}