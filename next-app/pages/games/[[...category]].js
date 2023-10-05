import AppOrGamePage from '../../components/AppOrGamePageComponents/AppOrGamePage.js'
import { useRouter } from 'next/router';

function Page({ data }) {
  console.log(data)
  return <AppOrGamePage id='Games' sectionTitle='Games' title='Games' data={data} />
}

async function getServerSideProps(context) {
  const { category } = context.query;

  let data = null;

  if (category) {
    const res =  await fetch(`${process.env.NEXT_PUBLIC_URL}/api/apps-games/games/${category}`);
    data = await res.json();
  } else if(!category) {
    const res =  await fetch(`${process.env.NEXT_PUBLIC_URL}/api/apps-games/games`);
    data = await res.json();
  }

  return {props: { data }};
}

export default Page;
export { getServerSideProps };