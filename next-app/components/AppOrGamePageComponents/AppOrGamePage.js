import Header from '../HeaderComponents/Header.js'
import AppGameSection from './AppGameSection.js'

function AppOrGamesPage({ category, id, title, data}) {
	return (
		<>
			<Header />
			<div id='Content'className='row'>
				<AppGameSection category={category} id={ id } title={ title } data={data}/>
		 	</div>
		</>
	)
}

export default AppOrGamesPage
