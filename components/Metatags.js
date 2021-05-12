export default function MetaTags() {
  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content="Brazilians Who Design" />
      <meta
        name="description"
        content="A repository to celebrate the work of talented Brazilian designers and showcase it to the world."
      />

      {/* <!-- Open Graph / Facebook --/> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://brazilianswho.design" />
      <meta property="og:title" content="Brazilians Who Design" />
      <meta
        property="og:description"
        content="A repository to celebrate the work of talented Brazilian designers and showcase it to the world."
      />
      <meta
        property="og:image"
        content="http://brazilianswho.design/img/preview.png"
      />

      {/* <!-- Twitter --/> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="http://brazilianswho.design" />
      <meta property="twitter:title" content="Brazilians Who Design" />
      <meta
        property="twitter:description"
        content="A repository to celebrate the work of talented Brazilian designers and showcase it to the world."
      />
      <meta
        property="twitter:image"
        content="http://brazilianswho.design/img/preview.png"
      />
    </>
  );
}
