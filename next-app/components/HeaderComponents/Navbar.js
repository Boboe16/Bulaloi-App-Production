import { useRouter } from 'next/router'

function Navbar() {
	const router = useRouter();

  // This function is only for games & apps buttons and its dropdown buttons
  // This does not include 'Home' & 'Visit our Youtube'
  async function handleOnClickButton(appOrGame, category) {
    const ourURL = window.location.href;

    if (category) {
      await router.push(`/${appOrGame}/${category}`);
    } if (!category) {
      await router.push(`/${appOrGame}`);
    }  if (ourURL.includes(`/games`) || ourURL.includes(`/apps`)) {
      await window.location.reload()
    } 
  }
  
  return (
    <>
      <div id='OffCanvas' className="alert alert-info d-none d-lg-block">Resize your browser to show the responsive offcanvas toggle.</div>

      <div className="offcanvas-lg offcanvas-end" tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
        <div className="row offcanvas-header">
          <h5 className="col-10 offcanvas-title" id="offcanvasResponsiveLabel">Navigation Menu</h5>
          <div className='col-2'>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
          </div>
        </div>
        <div className="row offcanvas-body">
          <ul>
            <li className='row'>
              <button 
							type="button" 
							className="btn btn-secondary"
				      data-bs-dismiss="offcanvas"
						  data-bs-target="#offcanvasResponsive" 
							onClick={() => router.push('/')}>
                <p>Home</p>
              </button>
            </li>
            <li className='row'>
              <div className="row btn-group dropdown-button">
                <button 
                className="col-10 btn btn-secondary"
				        data-bs-dismiss="offcanvas"
                data-bs-target="#offcanvasResponsive" 
                type="button"
                onClick={() => handleOnClickButton('games')}>
                  <p>Games</p>
                </button>
                <button type="button" className="col-2 toggle-dropdown btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="toggle-dropdown visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button 
                    type="button" 
                    class="btn btn-secondary" 
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#offcanvasResponsive" 
                    onClick={() => handleOnClickButton('games', 'adventure')}>
                      Adventure
                    </button>
                  </li>
                  <li>
                    <button 
                    type="button" 
                    class="btn btn-secondary" 
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#offcanvasResponsive" 
                    onClick={() => handleOnClickButton('games', 'action')}>
                      Action
                    </button>
                  </li>
                </ul>
              </div>
            </li>
            <li className='row'>
              <div className="row btn-group dropdown-button">
                <button 
                className="col-10 btn btn-secondary" 
                data-bs-dismiss="offcanvas"
                data-bs-target="#offcanvasResponsive"
                type="button"
								onClick={() => router.push('/apps')}>
                  <p>Apps</p>
                </button>
                <button type="button" className="col-2 toggle-dropdown btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu">
                  {/* ... */}
                </ul>
              </div>
            </li>
            <li className='row'>
              <button 
              type="button" 
              className="btn btn-secondary"
 							onClick={() => router.push('https://youtube.com/@bulaloitech')}>
               <p>Visit our Youtube</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
