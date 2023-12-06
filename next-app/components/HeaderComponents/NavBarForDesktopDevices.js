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
      <div id='NavbarForDesktop' className='row-fluid'>
        <ul className='row'>
          <li className='col'>
            <button 
  					type="button" 
  					className="btn btn-dark col-12"
  					onClick={() => router.push('/')}>
              <p>Home</p>
            </button>
          </li>
          <li className='col'>
            <div className="col-12 btn-group dropdown-button">
              <button 
              className="col-10 btn btn-dark"
              type="button"
              onClick={() => handleOnClickButton('games')}>
                <p>Games</p>
              </button>
              <button type="button" className="col-2 toggle-dropdown btn btn-sm btn-dark dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="toggle-dropdown visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu">
                <DropdownMenuButtons isDesktop={true} category='Action' handleOnClickButton={() => handleOnClickButton('games', 'action')} />
                <DropdownMenuButtons isDesktop={true} category='Adventure' handleOnClickButton={() => handleOnClickButton('games', 'adventure')} />
                <DropdownMenuButtons isDesktop={true} category='Role-playing' handleOnClickButton={() => handleOnClickButton('games', 'role-playing')} />
                <DropdownMenuButtons isDesktop={true} category='Arcade' handleOnClickButton={() => handleOnClickButton('games', 'arcade')} />
                <DropdownMenuButtons isDesktop={true} category='FPS' handleOnClickButton={() => handleOnClickButton('games', 'fps')} />
                <DropdownMenuButtons isDesktop={true} category='Casual' handleOnClickButton={() => handleOnClickButton('games', 'casual')} />
                <DropdownMenuButtons isDesktop={true} category='Others' handleOnClickButton={() => handleOnClickButton('games', 'others')} />
              </ul>
            </div>
          </li>
          <li className='col'>
            <div className="col-12 btn-group dropdown-button">
              <button 
              className="col-10 btn btn-dark"
              type="button"
  						onClick={() => handleOnClickButton('apps')}>
                <p>Apps</p>
              </button>
              <button type="button" className="col-2 toggle-dropdown btn btn-sm btn-dark dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu">
                <DropdownMenuButtons isDesktop={true} category='Photo Editor' handleOnClickButton={() => handleOnClickButton('apps', 'photo editor')} />
                <DropdownMenuButtons isDesktop={true} category='Task & App Management' handleOnClickButton={() => handleOnClickButton('apps', 'task-app management')} />
                <DropdownMenuButtons isDesktop={true} category='Tools' handleOnClickButton={() => handleOnClickButton('apps', 'tools')} />
                <DropdownMenuButtons isDesktop={true} category='Video Player & Editor' handleOnClickButton={() => handleOnClickButton('apps', 'video player and editor')} />
                <DropdownMenuButtons isDesktop={true} category='Music' handleOnClickButton={() => handleOnClickButton('apps', 'music')} />
                <DropdownMenuButtons isDesktop={true} category='Productivity' handleOnClickButton={() => handleOnClickButton('apps', 'productivity')} />
              </ul>
            </div>
          </li>
          <li className='col'>
            <button 
            type="button" 
            className="col-12 btn btn-dark"
  						onClick={() => router.push('https://youtube.com/@bulaloitech')}>
             <p>Visit our Youtube</p>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
