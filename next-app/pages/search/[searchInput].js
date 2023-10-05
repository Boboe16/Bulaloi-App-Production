import SearchPage from '../../components/SearchPageComponents/SearchPage.js';

function Page({ data }) {
  return (
    <>
      <SearchPage data={data}/>
    </>
  ) 
}

async function getServerSideProps(context) {
  const { searchInput } = context.query;

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/search/${searchInput}`);
  const data = await res.json();

  return { props: { data } };
}

export default Page;
export { getServerSideProps };
