import DownloadPage from '../../components/DownloadPageComponents/DownloadPage.js'

export default function Page({ data }) {
  return <DownloadPage data={data} />;
}

import fs from 'fs';
import path from 'path';

export async function getStaticProps({ params }) {
  const { appName } = params;

  // Base path
  const appsGamesDataPath = path.join(process.cwd(), 'public', 'apps-games-data');
  
  // The app path
  const appFilePath = path.join(appsGamesDataPath, 'apps', `${appName}.json`);
  const gameFilePath = path.join(appsGamesDataPath, 'games', `${appName}.json`);
  
  let data = {};

  // If the JSON exist in one of the path read it 
  if (fs.existsSync(appFilePath)) {
      data = JSON.parse(fs.readFileSync(appFilePath, 'utf-8'));
  } else if (fs.existsSync(gameFilePath)) {
      data = JSON.parse(fs.readFileSync(gameFilePath, 'utf-8'));
  } else {
      data = { error: 'App not found' };
  }

  return { props: { data } };
}

export async function getStaticPaths() {
  const basePath = path.join(process.cwd(), `public/apps-games-data`);

  // Read the JSON files in both directories
  const gamesPath = path.join(basePath, 'games');
  const appsPath = path.join(basePath, 'apps');
  const gamesFiles = fs.readdirSync(gamesPath);
  const appsFiles = fs.readdirSync(appsPath);

  // Parse the JSON files in both directories
  const gamesData = gamesFiles.map(file => {
    const filePath = path.join(gamesPath, file);
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const jsonData = JSON.parse(content);
      return jsonData;
    } catch (error) {
      console.error(`Error parsing JSON file ${filePath}:`, error);
      return null;
    }
  }).filter(Boolean); // Remove any null entries due to parsing errors

  const appsData = appsFiles.map(file => {
    const filePath = path.join(appsPath, file);
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const jsonData = JSON.parse(content);
      return jsonData;
    } catch (error) {
      console.error(`Error parsing JSON file ${filePath}:`, error);
      return null;
    }
  }).filter(Boolean); // Remove any null entries due to parsing errors

  const data = [...gamesData, ...appsData];

  // Map each object's `appName` property to `params`
  const paths = data.map((obj) => ({
    params: { appName: obj.appName },
  }));

  return { paths, fallback: false };
}
