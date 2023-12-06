import { useState } from 'react';
import Image from 'next/image';

export default function Component({ id, appPicture, imageIcon }) {
	const [imageSrc, setImageSrc] = useState(appPicture);

	// Check if a string is a valid URL
	function isValidURL(string) {
	  try {
	    // Try to create a new URL object
	    new URL(string);
	    // If no error is thrown, return true
	    return true;
	  } catch (error) {
	    // If an error is thrown, return false
	    return false;
	  }
	}

	if (isValidURL(appPicture)) {
		return (
    	<Image 
        id={id}
        width={1000} 
        height={600} 
        src={imageSrc} 
        alt='image'
        onError={() => setImageSrc(imageIcon)} 
      />
		);
	} else {
		return (
    	<Image 
        id='Image' 
        width={1000} 
        height={600}  
        src={imageIcon} 
        alt='image' 
      />
		);
	}
}