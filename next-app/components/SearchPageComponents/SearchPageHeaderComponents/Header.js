import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'
import NavBarForMobileAndTabletDevices from './NavBarForMobileAndTabletDevices.js'
import NavBarForDesktopDevices from './NavBarForDesktopDevices.js'
import SearchBar from './Searchbar.js'
import Bulaloi_Text from './bulaloi-text.png'
import Search_Icon from './search-icon.png'
import Navbar_Icon from './navbar-icon.png'

function Header() {
	const router = useRouter()

  const [showSearchBar, setShowSearchBar] = useState(false)
  const searchRef = useRef(null)

  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 991px)'
  })

  const isPhoneOrTablet = useMediaQuery({
    query: '(max-width: 990px)'
  })

  const handleSearchButtonClick = () => {
    setShowSearchBar(prevShowSearchBar => !prevShowSearchBar)
  }

  const handleOutsideClick = (event) => {
    if (
      searchRef.current && !searchRef.current.contains(event.target) &&
      !event.target.closest('#Search-button')
    ) {
      setShowSearchBar(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <>
      <div id='Header' className='row align-items-center'>
        <div className='col-4'>
          <Image
            id='Search-button'
            className='2'
            src={Search_Icon}
            alt='search-button'
            onClick={handleSearchButtonClick}
          />
        </div>
				<div className='col-4 d-flex justify-content-center'>
	  			<Image 
	  				id='Bulaloi-Text' 
	  				src={Bulaloi_Text} 
	  				alt='bulaloi text'
	  				onClick={() => router.push('/')} 
	  			/>
        </div>
          { isPhoneOrTablet && isClient &&
            <div className='col-4 d-flex justify-content-end'>
              <Image
                id='Navbar-button'
                className='col-2'
                src={Navbar_Icon}
                alt='navbar-button'
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvasResponsive'
                aria-controls='offcanvasResponsive'
              />
            </div>
          }
      </div>

      {showSearchBar && <SearchBar ref={searchRef} />}
      
      { isPhoneOrTablet && isClient && <NavBarForMobileAndTabletDevices /> }
      { isDesktopOrLaptop && isClient && <NavBarForDesktopDevices /> }
    </>
  )
}

export default Header