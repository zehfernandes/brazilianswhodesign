export default function MetaTags() {
  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content="Hawaiians In Tech" />
      <meta
        name="description"
        content="A repository to celebrate the work of talented Native Hawaiian technologists and showcase it to the world."
      />

      {/* <!-- Open Graph / Facebook --/> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://hawaiiansintech.org" />
      <meta property="og:title" content="Hawaiians in Tech" />
      <meta
        property="og:description"
        content="A repository to celebrate the work of talented Native Hawaiian technologists and showcase it to the world."
      />
      <meta
        property="og:image"
        content="http://hawaiiansintech.org/img/preview.png"
      />

      {/* <!-- Twitter --/> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="http://hawaiiansintech.org" />
      <meta property="twitter:title" content="Hawaiians in Tech" />
      <meta
        property="twitter:description"
        content="A repository to celebrate the work of talented Native Hawaiian technologists and showcase it to the world."
      />
      <meta
        property="twitter:image"
        content="http://hawaiiansintech.org/img/preview.png"
      />
    </>
  );
}
