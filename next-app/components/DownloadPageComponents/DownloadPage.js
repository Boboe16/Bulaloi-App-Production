import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import Stars from './Stars.js';
import Image from 'next/image';
import Header from '../HeaderComponents/Header.js';
import AppInfo from './AppInfo';
import Description from './Description';
import imageIcon from './image-icon.png';
import ImageComponent from './ImageComponent.js';

function DownloadPage({ data }) {
  const router = useRouter();

  return (
    <>
      <Header />
      <NextSeo
        title={`Download ${data.appName} for free`}
        description={data.appDescription}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_URL}/download/${data.appName}`,
          title: `Download ${data.appName} for free`,
          description: `${data.appDescription}`,
          images: [
            {
              url: `${data.appPicture}`,
              width: 512,
              height: 512,
              alt: "image",
            },
          ],
          site_name: "Bulaloi",
        }}
      />
      <div id='Content' className='row'>
        <div id='Download-Page-Image-Container'>
          <ImageComponent id='Download-Page-Image' appPicture={data.appPicture} imageIcon={imageIcon} />
        </div>
        <div className='row text-center'>
          <h3>{data.appName}</h3>
        </div>
        <div id='Stars' className='text-center'>
          {Stars(data.appRating)}
        </div>
        <AppInfo 
        	appName={data.appName} 
        	appCategory={data.appCategory} 
        	appVersion={data.appVersion} 
        	appRequirement={data.appRequirement}
        	appSize={data.appSize}
        />
        <div id='Download-Page-Button' className='row justify-content-center align-items-center'>
          <button 
          	type='button' 
          	className='col-5 btn btn-dark' 
          	onClick={() => router.push(`${data.appDownloadLink}`)}
          >
            Download
          </button>
        </div>
        <div id='Description-h4' className='row'>
          <h4>Description</h4>
        </div>
        <div id='Description-p' className='row'>
          <p>{data.appDescription}</p>
        </div>
      </div>
    </>
  );
}

export default DownloadPage;
