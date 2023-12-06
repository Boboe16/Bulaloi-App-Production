import { useRouter } from 'next/router';
import Link from 'next/link';
import Stars from './Stars.js';
import imageIcon from './image-icon.png';
import ImageComponent from './ImageComponent.js';

function AppGameSection({ id, title, objects, path, link }) {
  const router = useRouter();

  return (
    <div id={id} className={`row justify-content-center App-Game-Section`}>
      <div id={`${id}-h4`} className={`row App-Game-Section-h4`}>
        {link ? (
          <Link id={`${id}-a`} href={`${path}`}>
            <h4>{title}</h4>
          </Link>
        ) : (
          <h4>{title}</h4>
        )}
      </div>
      <div className='Apps-Container row justify-content-between'>
      	{objects.map((object) => (
        	<div
          	className='Apps col-5'
          	key={object.appName}
          	onClick={() => router.push(`/download/${object.appName}`)}
        	>
          	<div id='Image-Container' className='row'>
              <ImageComponent id='Image' appPicture={object.appPicture} imageIcon={imageIcon} />
          	</div>
          	<h6 className='text-center'>{object.appName}</h6>
          	<div className='text-center'>
            	{Stars(object.appRating)}
          	</div>
        	</div>
      ))}
      </div>
    </div>
  );
}

export default AppGameSection;
