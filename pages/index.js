import Head from 'next/head'

import Aboutme from "../components/About.js"
import Special from "../components/Special.js"

import utilStyles from '../styles/utils.module.css'
import badges from '../styles/badges.module.css'
import main from '../styles/index.module.css'


export default function Home() {

  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="My Portfolio"
        />
        <title>Eli Bessen | Programmer, Gamer</title>
      </Head>

      <main>

        <h1 className="title">
          Welcome to my Portfolio
          <p className={utilStyles.wavingHand}>
            👋
          </p>
        </h1>
        

        {/* <p className="description">
          Under construction. Please come back later.
        </p> */}
        
        <Aboutme home>
          <section className={utilStyles.headingMd}>
            <p className={utilStyles.introParagraph}>I am a beginner backend and frontend Software Engineer, wanting to become better everyday. Specializing in Web development and Game Development. Using languages like Javascript, C#, HTML and CSS.</p>
          </section>
        </Aboutme>
      
        <Special special></Special>

        

        <h1 className="secondaryTitle">
          Projects
        </h1>

        {/* Project Grid | To be seperated into component */}

        <div className="grid">

          <a href="https://cordial.ambience.studio/" className="card">
            <h3>Portfolio &rarr;</h3>
            <p>My Portfolio.</p>

            <p className={badges.linkbadge}><a href="https://github.com/LCordial/myportfolio">Source Code</a></p>

            <ul className={[main.list, badges.flexbadge].join(' ')}>
              <li className={[badges.infobadge, main.horizontallist, badges.flexbadge].join(' ')}>Javascript</li>
              <li className={[badges.infobadge, main.horizontallist, badges.flexbadge].join(' ')}>Nextjs</li>
              <li className={[badges.infobadge, main.horizontallist, badges.flexbadge].join(' ')}>Firebase</li>
            </ul>

          </a>

          <a href="https://tanks.ambience.studio" className="card">
            <h3>Tanks &rarr;</h3>
            <p>A project for Digital Technolgies class.</p>

            <p className={badges.linkbadge}><a href="https://github.com/LCordial/tanks-arena">Source Code</a></p>

            <ul className={[main.list, badges.flexbadge].join(' ')}>
              <li className={[badges.infobadge, main.horizontallist, badges.flexbadge].join(' ')}>Javascript</li>
              <li className={[badges.infobadge, main.horizontallist, badges.flexbadge].join(' ')}>p5.js</li>
              <li className={[badges.infobadge, main.horizontallist, badges.flexbadge].join(' ')}>Firebase</li>
            </ul>
          </a>

          <a href="https://github.com/LCordial/puzzle-game" className="card">
            <h3>Welcome to the Game &rarr;</h3>
            <p>Find clues and solve puzzles!</p>

            <ul className={[main.list, badges.flexbadge].join(' ')}>
              <li className={[badges.errorbadge, main.horizontallist, badges.flexbadge].join(' ')}>Incomplete</li>
              <li className={[badges.infobadge, main.horizontallist, badges.flexbadge].join(' ')}>Javascript</li>
              <li className={[badges.infobadge, main.horizontallist, badges.flexbadge].join(' ')}>HTML</li>
              <li className={[badges.infobadge, main.horizontallist, badges.flexbadge].join(' ')}>CSS</li>
            </ul>
          </a>

          <a href="https://github.com/LCordial/parkour-game-template" className="card">
            <h3>Parkour Game Template &rarr;</h3>
            <p>A template focusing on movement.</p>

            <ul className={[main.list, badges.flexbadge].join(' ')}>
              <li className={[badges.warningbadge, main.horizontallist, badges.flexbadge].join(' ')}>Developing</li>
              <li className={[badges.infobadge, main.horizontallist, badges.flexbadge].join(' ')}>Unity3D</li>
              <li className={[badges.infobadge, main.horizontallist, badges.flexbadge].join(' ')}>C#</li>
            </ul>
          </a>

        </div>

        {/* <h1 className="secondaryTitle">
          Hobbies
        </h1>  */}

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
          padding-bottom: 12rem;
        }

        .secondaryTitle{
          font-size: 3rem;
          padding-bottom: 7rem;
          padding-top: 5rem;
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

          max-width: 1000px;
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
        .card:focus{
          color: #0070f3;
          border-color: #0070f3;
        }
        .card:active{
          color: #003879;
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

      <style global>{`

        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #f7f7f7;
        }
        ::-webkit-scrollbar-thumb {
          background-color: gray;
          border-radius: 20px;
        }

      `}
        
      </style>

    </div>
  )
}