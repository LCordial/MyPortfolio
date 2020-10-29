import Head from 'next/head'

import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

import Link from 'next/link'

const name = 'Eli B'
export const siteTitle = 'My Portfolio'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="My Portfolio"
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img src="/public/images/image.jpg" className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`} alt={name}/>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img src="/public/images/image.jpg" className={`${styles.headerImage} ${utilStyles.borderCircle}`} alt={name}/>
              </a>
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  )
}