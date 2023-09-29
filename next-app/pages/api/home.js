import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const gamesDirectory = path.join(process.cwd(), 'public/apps-games-data/games');
    const appsDirectory = path.join(process.cwd(), 'public/apps-games-data/apps');
    const featuredAppsAndGamesDirectory = path.join(process.cwd(), 'public/apps-games-data/featured-apps-games');

    const gamesFileNames = fs.readdirSync(gamesDirectory);
    const appsFileNames = fs.readdirSync(appsDirectory); // Fix: Use appsDirectory here
    const featuredAppsAndGamesFileNames = fs.readdirSync(featuredAppsAndGamesDirectory); // Fix: Use featuredAppsAndGamesDirectory here

    const jsonDataArray = [[], [], []];

    function pushIntoJsonDataArray(fileNames, directory, index) {
      fileNames.forEach((fileName) => {
        const filePath = path.join(directory, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        const jsonData = JSON.parse(fileContents);
        jsonDataArray[index].push(jsonData);
      });
    }

    pushIntoJsonDataArray(gamesFileNames, gamesDirectory, 0);
    pushIntoJsonDataArray(appsFileNames, appsDirectory, 1);
    pushIntoJsonDataArray(featuredAppsAndGamesFileNames, featuredAppsAndGamesDirectory, 2);

    return res.status(200).json(jsonDataArray);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to read JSONs' });
  }
}
