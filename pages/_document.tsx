import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          {/* Google Tag Manager */}
          <script dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K2CGWGXF');`
          }}>
          </script>
          {/* End Google Tag Manager */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&family=Roboto&display=swap" rel="stylesheet" />
          {/* <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Demo Video for Gist AI",
            "description": "How to use Gist AI to summarize webpages and Youtube videos",
            "thumbnailUrl": [{keyPointsFromWebpageAndYt}],
            "contentUrl": "/assets/videos/DemoVideowithYT.mp4",
            "duration": "PT0M37S"
          })}
        </script> */}
      </Head>
      <body>
      {/* Google Tag Manager (noscript) */}
      <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K2CGWGXF"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`
      }}>
      </noscript>
      {/* End Google Tag Manager (noscript) */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
