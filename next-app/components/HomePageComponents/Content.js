import AppGameSection from './AppGameSection';

function Content({ data }) {
  const [games, apps, featureAppsAndGames] = data;

  return (
    <div id='Content' className='row'>
      <AppGameSection id='Top-Apps-and-Games' title='Featured Apps & Games' objects={featureAppsAndGames} link={false} />
      <AppGameSection id='Recently-Added-Games' title='Recently Added Games' path='/games' objects={games} link={true} />
      <AppGameSection id='Recently-Added-Apps' title='Recently Added Apps' path='/apps' objects={apps} link={true} />
    </div>
  );
}

export default Content;
