import Head from 'next/head'

import styles from './component style/Special.module.css'
import utilStyles from '../styles/utils.module.css'

import Link from 'next/link'

export default function Special({ children, special }) {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          {special ? (
            <>
            <div className={styles.container}>
                <div className={styles.leftcolumn}>
                    <figure><img src="../public/images/hard-drive.svg"></img></figure>
                    
                    <h1 className={styles.headers}>Technologies</h1>
                    <p>Using different technologies makes programming a whole lot better, and easier. That's why I use them.</p>

                    <p className={styles.paragraphtitle}>Technologies:</p>
                    <ul className={styles.techlist}>
                        <li>Firebase</li>
                        <li>Next.js</li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <figure><img src="public/images/hard-drive.svg"></img></figure>
                    
                    <h1 className={styles.headers}>Languages</h1>
                    <p>Languages that I program mainly in</p>

                    <p className={styles.paragraphtitle}>Backend Languages</p>
                    <ul className={styles.techlist}>
                        <li>Javascript</li>
                        <li>C#</li>
                    </ul>
                    <p className={styles.paragraphtitle}>Frontend Languages</p>
                    <ul className={styles.techlist}>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className={styles.rightcolumn}>
                    <figure><img src="../public/images/hard-drive.svg"></img></figure>
                    
                    <h1 className={styles.headers}>Technologies</h1>
                    <p>Using different technologies makes programming a whole lot better, and easier. That's why I use them.</p>

                    <p className={styles.paragraphtitle}>Technologies:</p>
                    <ul className={styles.techlist}>
                        <li>Firebase</li>
                        <li>Next.js</li>
                    </ul>
                </div>
            </div>
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