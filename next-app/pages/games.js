import AppOrGamePage from '../components/AppOrGamePageComponents/AppOrGamePage.js'

function Game({ data }) {
  return (
	<AppOrGamePage id='Games' sectionTitle='Games' title='Games' data={data} />
  )
}

async function getServerSideProps() {
  const res =  await fetch(`${process.env.NEXT_PUBLIC_URL}/api/apps-games/games`);
  const data = await res.json();

  return {props: { data }};
}

export default Game;
export { getServerSideProps };
