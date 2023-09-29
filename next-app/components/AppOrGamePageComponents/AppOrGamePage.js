import Header from '../HeaderComponents/Header.js'
import Content from './Content.js'

function AppOrGamesPage({ id, title, data}) {
	return (
		<>
			<Header />
			<Content id={id} title={title} data={data}/>
		</>
	)
}

export default AppOrGamesPage
