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
        <title>Eli Bessen | Programmer</title>
      </Head>

      <main>
        <Title title />

        <Aboutme aboutme />

        <a name="projects" id="projects"></a>
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
                Javascript
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
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow-y: scroll;
        }

        .grid {
          display: flex;
          justify-content: center;

          z-index: 1;
          flex-wrap: wrap;
          margin-top: 3rem;
        }

        .card {
          z-index: 1;
          background-color: white;
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
          color: #1e6091;
          border-color: #168aad;
        }
        .card:active {
          color: #184e77;
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

        html {
          scroll-behavior: smooth;
        }

        html,
        body,
        div,
        span,
        object,
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
          overflow-x: hidden;
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
