import Header from '../HeaderComponents/Header.js'
import AppGameSection from './AppGameSection.js'

function AppOrGamesPage({ id, title, data}) {
	return (
		<>
			<Header />
			<div id='Content'className='row'>
				<AppGameSection id={ id } title={ title } data={data}/>
		 	</div>
		</>
	)
}

export default AppOrGamesPage
