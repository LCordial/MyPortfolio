import Head from 'next/head'

import styles from './component style/About.module.css'
import utilStyles from '../styles/utils.module.css'

import Link from 'next/link'

const name = 'Eli B'
export const siteTitle = 'My Portfolio'

export default function Aboutme({ children, home }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {home ? (
          <>
            <img src="/images/profile.jpg" className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`} alt={name}/>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img src="/images/profile.jpg" className={`${styles.headerImage} ${utilStyles.borderCircle}`} alt={name}/>
              </a>
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  )
}