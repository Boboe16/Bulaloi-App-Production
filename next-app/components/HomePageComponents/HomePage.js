import Header from '../HeaderComponents/Header.js';
import AppGameSection from './AppGameSection.js';
import Introduction from './Introduction.js';
import Footer from '../GlobalComponents/Footer.js';

function HomePage({ data }) {
	const [games, apps, featuredAppsAndGames] = data;
	return (
		<>
			<Header />
			<div id='Content' className='row'>
				<Introduction />
		      	<AppGameSection id='Top-Apps-and-Games' title='Featured Apps & Games' objects={featuredAppsAndGames} link={false} />
		      	<AppGameSection id='Recently-Added-Games' title='Recently Added Games' path='/games' objects={games} link={true} />
		      	<AppGameSection id='Recently-Added-Apps' title='Recently Added Apps' path='/apps' objects={apps} link={true} />
		        <Footer />
			</div>
		</>
	)
}

export default HomePage;