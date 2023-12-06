import { useRouter } from 'next/router';
import DropdownMenuButtons from './DropdownMenuButtonsForNavbar';

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
                  <DropdownMenuButtons category='Action' handleOnClickButton={() => handleOnClickButton('games', 'action')} />
                  <DropdownMenuButtons category='Adventure' handleOnClickButton={() => handleOnClickButton('games', 'adventure')} />
                  <DropdownMenuButtons category='Role-playing' handleOnClickButton={() => handleOnClickButton('games', 'role-playing')} />
                  <DropdownMenuButtons category='Arcade' handleOnClickButton={() => handleOnClickButton('games', 'arcade')} />
                  <DropdownMenuButtons category='FPS' handleOnClickButton={() => handleOnClickButton('games', 'fps')} />
                  <DropdownMenuButtons category='Casual' handleOnClickButton={() => handleOnClickButton('games', 'casual')} />
                  <DropdownMenuButtons category='Others' handleOnClickButton={() => handleOnClickButton('games', 'others')} />
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
								onClick={() => handleOnClickButton('games')}>
                  <p>Apps</p>
                </button>
                <button type="button" className="col-2 toggle-dropdown btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu">
                  <DropdownMenuButtons category='Photo Editor' handleOnClickButton={() => handleOnClickButton('apps', 'photo editor')} />
                  <DropdownMenuButtons category='Task & App Management' handleOnClickButton={() => handleOnClickButton('apps', 'task-app management')} />
                  <DropdownMenuButtons category='Tools' handleOnClickButton={() => handleOnClickButton('apps', 'tools')} />
                  <DropdownMenuButtons category='Video Player & Editor' handleOnClickButton={() => handleOnClickButton('apps', 'video player and editor')} />
                  <DropdownMenuButtons category='Music' handleOnClickButton={() => handleOnClickButton('apps', 'music')} />
                  <DropdownMenuButtons category='Productivity' handleOnClickButton={() => handleOnClickButton('apps', 'productivity')} />
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
