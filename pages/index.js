import Head from "next/head";
import Link from "next/link";

import Aboutme from "../components/About.js";
import Special from "../components/Special.js";
import Roadmap from "../components/Roadmap.js";

import badges from "../styles/badges.module.scss";
import navbar from "../styles/navbar.module.scss";
import main from "../styles/index.module.scss";

export default function Home() {
  return (
    <div className={[main.container]}>
      <ul className={[navbar.navbarlist]}>
        <li className={[navbar.navbaritem]}>
          <Link href="/contact">
            <a className={[navbar.navbaritema]}>Contact me</a>
          </Link>
        </li>
        <li className={[navbar.navbaritem]}>
          <Link href="/store">
            <a className={[navbar.navbaritema]}>Store</a>
          </Link>
        </li>
      </ul>

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="My Portfolio" />
        <title>Eli Bessen | Programmer, Gamer</title>
      </Head>

      <main>
        <h1 className={[main.title]}>
          Welcome to my Portfolio
          <p>
            <p className={main.paragraph}>
              I code beautifully simple things, and I love what I do.
            </p>
          </p>
        </h1>

        <Aboutme home />

        <Special special />

        <h1 className={[main.secondaryheader]}>Projects</h1>

        <div className="grid">
          <a href="https://cordial.ambience.studio/" className="card">
            <h3>Portfolio &rarr;</h3>
            <p>My Portfolio.</p>

            <p className={badges.linkbadge}>
              <a href="https://github.com/LCordial/myportfolio">Source Code</a>
            </p>

            <ul className={[main.list, badges.flexbadge].join(" ")}>
              <li
                className={[
                  badges.warningbadge,
                  main.horizontallist,
                  badges.flexbadge,
                ].join(" ")}
              >
                Developing
              </li>
              <li
                className={[
                  badges.infobadge,
                  main.horizontallist,
                  badges.flexbadge,
                ].join(" ")}
              >
                Javascript
              </li>
              <li
                className={[
                  badges.infobadge,
                  main.horizontallist,
                  badges.flexbadge,
                ].join(" ")}
              >
                SCSS
              </li>
              <li
                className={[
                  badges.infobadge,
                  main.horizontallist,
                  badges.flexbadge,
                ].join(" ")}
              >
                Nextjs
              </li>
              <li
                className={[
                  badges.infobadge,
                  main.horizontallist,
                  badges.flexbadge,
                ].join(" ")}
              >
                Firebase
              </li>
            </ul>
          </a>

          <a href="https://tanks.ambience.studio" className="card">
            <h3>Tanks &rarr;</h3>
            <p>A project for Digital Technolgies class.</p>

            <p className={badges.linkbadge}>
              <a href="https://github.com/LCordial/tanks-arena">Source Code</a>
            </p>

            <ul className={[main.list, badges.flexbadge].join(" ")}>
              <li
                className={[
                  badges.warningbadge,
                  main.horizontallist,
                  badges.flexbadge,
                ].join(" ")}
              >
                Developing
              </li>
              <li
                className={[
                  badges.infobadge,
                  main.horizontallist,
                  badges.flexbadge,
                ].join(" ")}
              >
                Javascript
              </li>
              <li
                className={[
                  badges.infobadge,
                  main.horizontallist,
                  badges.flexbadge,
                ].join(" ")}
              >
                p5.js
              </li>
              <li
                className={[
                  badges.infobadge,
                  main.horizontallist,
                  badges.flexbadge,
                ].join(" ")}
              >
                Firebase
              </li>
            </ul>
          </a>

          {/* <a href="https://github.com/LCordial/puzzle-game" className="card">
            <h3>Welcome to the Game &rarr;</h3>
            <p>Find clues and solve puzzles!</p>

            <ul className={[main.list, badges.flexbadge].join(' ')}>
              <li className={[badges.errorbadge, main.horizontallist, badges.flexbadge].join(' ')}>Incomplete</li>
              <li className={[badges.infobadge, main.horizontallist, badges.flexbadge].join(' ')}>Javascript</li>
              <li className={[badges.infobadge, main.horizontallist, badges.flexbadge].join(' ')}>HTML</li>
              <li className={[badges.infobadge, main.horizontallist, badges.flexbadge].join(' ')}>CSS</li>
            </ul>

          </a> */}

          <a
            href="https://github.com/LCordial/parkour-game-template"
            className="card"
          >
            <h3>Parkour Game Template &rarr;</h3>
            <p>A template focusing on movement.</p>

            <ul className={[main.list, badges.flexbadge].join(" ")}>
              <li
                className={[
                  badges.warningbadge,
                  main.horizontallist,
                  badges.flexbadge,
                ].join(" ")}
              >
                Developing
              </li>
              <li
                className={[
                  badges.infobadge,
                  main.horizontallist,
                  badges.flexbadge,
                ].join(" ")}
              >
                Unity3D
              </li>
              <li
                className={[
                  badges.infobadge,
                  main.horizontallist,
                  badges.flexbadge,
                ].join(" ")}
              >
                C#
              </li>
            </ul>
          </a>
        </div>
      </main>

      <footer>
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Powered by Next.js
        </a>
      </footer>

      <style jsx>{`
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

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 1100px;
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
        .card:focus {
          color: #0070f3;
          border-color: #0070f3;
        }
        .card:active {
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

      <style global>
        {`

        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #bdbdbd
        }
        ::-webkit-scrollbar-thumb {
          background-color: gray;
          border-radius: 20px;
        }

      `}
      </style>
    </div>
  );
}
