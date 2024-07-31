import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function Introduction() {
    const router = useRouter();

    // Use state hook to store the input value
    const [inputValue, setInputValue] = useState('');

    // Use a callback function to handle the input change
    function handleOnChange(event) {
        // Update the state with the new input value
        setInputValue(event.target.value);
    }

    function handleClick() {
        // Redirect to the search page with the input value as a query parameter
        router.push(`/search/${inputValue}`);
    }

    return (
        <div className="row text-center justify-content-center Home-Page-Introduction">
            <h1>Bulaloi - Android</h1>
            <h1>Games & Apps</h1>
            <p>Download APK, MOD APK, and Premium APK apps and games free for Android & IOS</p>

            <div id='Search-bar' className='row'>
                <input type='text' id='Search-Input' value={inputValue} onChange={handleOnChange} className='col-9' placeholder='Search'/>
                <button id='Search-Button' type="button" onClick={handleClick} className="col-3 btn btn-light">
                    Search
                </button>
            </div>
        </div>
    );
}