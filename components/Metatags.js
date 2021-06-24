export default function MetaTags() {
  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content="Hawaiians in Technology" />
      <meta
        name="description"
        content="A directory and community of Native Hawaiians in the technology industry."
      />

      {/* <!-- Open Graph / Facebook --/> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://hawaiiansintech.org" />
      <meta property="og:title" content="Hawaiians in Technology" />
      <meta
        property="og:description"
        content="A directory and community of Native Hawaiians in the technology industry."
      />
      <meta
        property="og:image"
        content="https://hawaiiansintech.org/images/HitLogoNoBackground.png"
      />

      {/* <!-- Twitter --/> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="http://hawaiiansintech.org" />
      <meta property="twitter:title" content="Hawaiians in Technology" />
      <meta
        property="twitter:description"
        content="A directory and community of Native Hawaiians in the technology industry."
      />
      <meta
        property="twitter:image"
        content="https://hawaiiansintech.org/images/HitLogoNoBackground.png"
      />
    </>
  );
}
