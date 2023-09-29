import Header from './SearchPageHeaderComponents/Header.js'
import Content from './Content.js'

function AppOrGamesPage({ data }) {
  return (
    <>
      <Header />
      <Content data={data}/>
    </>
  )
}

export default AppOrGamesPage
