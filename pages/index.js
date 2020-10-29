import Head from 'next/head'

import Layout from "../components/layout"
import utilStyles from '../styles/utils.module.css'
//import gridStyles from '../styles/grid.css'
import tags from '../styles/tags.module.css'

export default function Home() {
  return (
    <div className="container">

      <Head>
        <title>My Portfolio</title>
      </Head>

      <main>

        <h1 className="title">
          Welcome to my Portfolio
        </h1>

        {/* <p className="description">
          Under construction. Please come back later.
        </p> */}
        
        <Layout home>
          <section className={utilStyles.headingMd}>
            <p className={utilStyles.introParagraph}></p>
          </section>
        </Layout>


        <div className="grid">
          {/* <a href="https://github.com/LCordial" className="card">
            <h3>Github &rarr;</h3>
            <p>Find my source code for all projects.</p>
            <p><code>c#, Javascript, HTML, CSS</code></p>
          </a> */}

          <a href="https://tanks.ambience.studio" className="card">
            <h3>Tanks &rarr;</h3>
            <p>A project for Digital Technolgies class.</p>
            <p className={tags.linkTag}><a href="https://github.com/LCordial/tanks-arena">Source Code</a></p>
            <p><code>Javascript, p5.js</code></p>
          </a>

          <a href="https://github.com/LCordial/parkour-game-template" className="card">
            <h3>Parkour Game Template &rarr;</h3>
            <p>A template focusing on movement.</p>
            <p><code>Unity3D, c#</code></p>
          </a>

        </div>


      </main>

      <footer>
        
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Powered by Next.js
        </a>

      </footer>


      {/* To be moved */}

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          font-size: 0.8rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>


      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>

    </div>
  )
}