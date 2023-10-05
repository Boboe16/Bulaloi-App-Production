import HomePage from '../components/HomePageComponents/HomePage.js'

function Page({ data }) {
  return (
  	<>
  		<HomePage data={data}/>
  	</>
  )
}

async function getServerSideProps() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/home`);
	const data = await res.json();

	return { props: { data } };		
}

export default Page;
export { getServerSideProps };

