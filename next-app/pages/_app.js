import '@/styles/globals.css';
import Head from "next/head";
import Script from "next/script";
import { DefaultSeo } from "next-seo";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-4230199495923533" /> {/*Verification Tag for Google Adsense*/}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
		    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="icon" href="/B-icon.png" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"/>
      </Head>
      <DefaultSeo
        title="BULALOI"
        description="Download free and without registration, full versions of any games/apps and programs on your android device, as well as their modifications. Latest news - technology/market IT/mobile games"
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_URL}`,
          title: "BULALOI - Download free apk games/apps and programs, read the latest news",
          description: "Download free and without registration, full versions of any games/apps and programs on your android device, as well as their modifications. Latest news - technology/market IT/mobile games",
          images: [
            {
              url: "https://wpuploads.appadvice.com/wp-content/uploads/2011/05/apps_sale4.jpg",
              width: 512,
              height: 512,
              alt: "image",
            },
          ],
          site_name: "BULALOI - Download free apk games/apps and programs, read the latest news",
        }}
      />
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"/>
  	  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js" integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS" crossorigin="anonymous"/>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4230199495923533" crossorigin="anonymous" /> {/*Tag that generate Google adsense ads*/}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
