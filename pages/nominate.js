import Head from "next/head";
import Link from "next/link";
import MetaTags from "../components/Metatags.js";
import Analytics from "../components/Analytics.js";

export default function Nominate({ technologists }) {
  return (
    <div className="container">
      <Head>
        <title>Hawaiians in Tech | Nominate</title>
        <link rel="icon" href="/favicon.ico" />
        <MetaTags />
      </Head>

      <Link href="/" shallow={true}>
        <a className="auxNav arrowback">←</a>
      </Link>

      <h1>Coming Soon</h1>

      <style jsx global>{`
        html,
        body {
          margin: 0;
          height: 100%;
          overflow: hidden;
        }
        .container {
          min-height: 100vh;
        }
        iframe {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          border: 0;
        }
      `}</style>
    </div>
  );
}
