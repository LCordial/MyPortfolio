// Importing next.js extras
import Head from "next/head";
import Link from "next/link";

// Importing Componenets
import Title from "../components/Title.js";
import Aboutme from "../components/About.js";
import Column from "../components/Column.js";
import Roadmap from "../components/Roadmap.js";
import Footer from "../components/Footer.js";

// Importing Styles
import badges from "../styles/badges.module.scss";
import navbar from "../styles/navbar.module.scss";
import main from "../styles/index.module.scss";

export default function Home() {
  return (
    <div className={[main.container]}>
      <Head>
        <link rel="icon" href="/images/profile.jpg" />
        <meta name="description" content="My Portfolio" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta charSet="UTF-8" />
        <title>Eli Bessen | Programmer, Gamer</title>
      </Head>

      <main>
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

        {/* Renderign Title, About Me and Columns etc.*/}
        <Title title />

        <Aboutme aboutme />

        <Column column />

        <h1 className={[main.secondaryheader]}>Personal Roadmap</h1>

        <Roadmap roadmap />

        <h1 className={[main.secondaryheader]}>Projects</h1>

        <div className="grid">
          <a href="https://cordial.ambience.studio/" className="card">
            <h3>Portfolio &rarr;</h3>
            <p>My Portfolio.</p>

            <p>
              <a
                className={badges.linkbadge}
                href="https://github.com/LCordial/myportfolio"
              >
                Source Code
              </a>
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

          {/* <a href="https://tanks.ambience.studio" className="card">
            <h3>Tanks &rarr;</h3>
            <p>A project for Digital Technolgies class.</p>

            <p>
              <a
                className={badges.linkbadge}
                href="https://github.com/LCordial/tanks-arena"
              >
                Source Code
              </a>
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
          </a> */}

          <a
            href="https://github.com/Ambience-Studios/ambience.css"
            className="card"
          >
            <h3>Ambience.css &rarr;</h3>
            <p>
              A lightweight CSS framework to create a modern, sleek and
              intuitive website.
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
                SCSS
              </li>
              <li
                className={[
                  badges.infobadge,
                  main.horizontallist,
                  badges.flexbadge,
                ].join(" ")}
              >
                CSS
              </li>
              <li
                className={[
                  badges.infobadge,
                  main.horizontallist,
                  badges.flexbadge,
                ].join(" ")}
              >
                HTML
              </li>
            </ul>
          </a>

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

        <Footer footer />
      </main>

      <style jsx>{`
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

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

        html,
        body,
        div,
        span,
        object,
        iframe,
        figure {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          text-size-adjust: none;
          overflow: hidden;
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
