import Head from 'next/head'
import Link from 'next/link'

import navbar from '../styles/navbar.module.scss'

export default function Home() {

  return (
    <div className="container">

        <ul className={[navbar.navbarlist]}>

            <li className={[navbar.navbaritem]}>
                    <Link href="/">
                        <a className={[navbar.navbaritema]} >Home</a>
                    </Link>
            </li>
            <li className={[navbar.navbaritem]}>
                    <Link href="/contact">
                        <a className={[navbar.navbaritema]} >Contact me</a>
                    </Link>
            </li>

        </ul>

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="My Portfolio"
        />
        <title>Eli Bessen | Store</title>
      </Head>

      <main>

        <p>Store coming soon! | Please come back later</p>

      </main>

      <footer>
        
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Powered by Next.js
        </a>

      </footer>

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
          background: #bdbdbd
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