import Header from '../HeaderComponents/Header.js'
import Content from './Content.js'

function HomePage({ data }) {
	return (
		<>
			<Header />
			<Content data={ data } />
		</>
	)
}

export default HomePage
