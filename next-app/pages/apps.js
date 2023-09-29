import AppOrGamePage from '../components/AppOrGamePageComponents/AppOrGamePage.js'

function App({ data }) {
	return (
		<AppOrGamePage id='Apps' title='Apps' data={data} />
	)
}

async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/apps-games/apps`);
  const data = await res.json();

  return {props: { data }};
}

export default App;
export { getServerSideProps };
