import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
