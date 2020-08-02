import Head from "next/head";
import Link from "next/link";
import MetaTags from "../components/Metatags.js";
import Analytics from "../components/Analytics.js";

export default function Nominate({ designers }) {
  return (
    <div className="container">
      <Head>
        <title>Brazilians Who Design | Nomiate</title>
        <link rel="icon" href="/favicon.ico" />
        <MetaTags />
      </Head>

      <div style={{ width: "100%", position: "relative", height: "100vh" }}>
        <iframe
          id="typeform-full"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="camera; microphone; autoplay; encrypted-media;"
          src="https://form.typeform.com/to/bbrPUqMe"
        ></iframe>{" "}
        <script
          type="text/javascript"
          src="https://embed.typeform.com/embed.js"
        ></script>
        <Analytics />
      </div>

      <Link href="/" shallow={true}>
        <a className="auxNav arrowback">←</a>
      </Link>
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
