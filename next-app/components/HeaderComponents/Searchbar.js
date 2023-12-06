import React, { useState } from 'react';
import { useRouter } from 'next/router';

function SearchBar(props, ref) {
  const router = useRouter();

  // Use state hook to store the input value
  const [inputValue, setInputValue] = useState('');

  // Use a callback function to handle the input change
  function handleOnChange(event) {
    // Update the state with the new input value
    setInputValue(event.target.value);
  }

  // Use a callback function to handle the button click
  function handleClick() {
    // Check if the input value is not empty
    if (inputValue) {
      // Redirect to the search page with the input value as a query parameter
      router.push(`/search/${inputValue}`);
    }
  }

  return (
    <div id='Search-bar' className='row' ref={ref}>
      <input type='text' id='Search-Input' className='col-9' placeholder='Search'
      value={inputValue} onChange={handleOnChange}/>
      <button id='Search-Button' type="button" className="col-3 btn btn-light"
      onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
}

export default React.forwardRef(SearchBar);
