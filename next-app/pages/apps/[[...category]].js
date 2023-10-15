import AppOrGamePage from '../../components/AppOrGamePageComponents/AppOrGamePage.js'
import { useRouter } from 'next/router';

function Page({ data }) {
  const router = useRouter();
  const { category } = router.query;
  
  // If category exist render the AppOrGamePage component with category prop, if not then render without it
  if (category) {
    return <AppOrGamePage category={category} id='Apps' title='Apps' data={data} />
  } else if (!category) {
    return <AppOrGamePage category='all' id='Apps' title='Apps' data={data} />
  }
}

async function getServerSideProps(context) {
  const { category } = context.query;

  let data = null;

  //If category exist fetch data with it as a URL parameter, if not then fetch without it
  if (category) {
    const res =  await fetch(`${process.env.NEXT_PUBLIC_URL}/api/apps-games/apps/${category}`);
    data = await res.json();
  } else if(!category) {
    const res =  await fetch(`${process.env.NEXT_PUBLIC_URL}/api/apps-games/apps`);
    data = await res.json();
  }

  return {props: { data }};
}

export default Page;
export { getServerSideProps };