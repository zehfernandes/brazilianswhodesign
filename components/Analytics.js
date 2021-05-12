export default function Analytics() {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-168079933-1"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());

            gtag("config", "UA-XXXXXXXX-X");
          `,
        }}
      />
    </>
  );
}
