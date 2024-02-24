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

          {/* Meta Pixel Code */}
          <script dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '927804795261254'); fbq('track', 'PageView');`
          }}>
          </script>
          <noscript dangerouslySetInnerHTML={{
              __html: `<img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=927804795261254&ev=PageView&noscript=1"
            />`
          }}>
          </noscript>
          {/* End Meta Pixel Code */}

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
