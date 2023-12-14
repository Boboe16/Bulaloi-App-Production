// import the fs and path modules
import fs from 'fs';
import path from 'path';

// define the default handler function for the request and response
export default function handler(req, res) {
  try {
    // define the directories for the games, apps, and featured apps and games data
    const gamesDirectory = path.join(process.cwd(), 'public/apps-games-data/games');
    const appsDirectory = path.join(process.cwd(), 'public/apps-games-data/apps');
    const featuredAppsAndGamesDirectory = path.join(process.cwd(), 'public/apps-games-data/featured-apps-games');

    // read the file names from the directories
    const gamesFileNames = fs.readdirSync(gamesDirectory);
    const appsFileNames = fs.readdirSync(appsDirectory); 
    
    // initialize an empty array to store the JSON data
    const jsonDataArray = [[], []];

    // define a helper function to push the JSON data into the array
    function pushIntoJsonDataArray(fileNames, directory, index) {
      // loop through the file names
      fileNames.forEach((fileName) => {
        // get the full path of the file
        const filePath = path.join(directory, fileName);
        // read the file contents as a string
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        // parse the string into a JSON object
        const jsonData = JSON.parse(fileContents);
        // push the JSON object into the array at the given index
        jsonDataArray[index].push(jsonData);
      });
    }

    // call the helper function for the games and apps data
    pushIntoJsonDataArray(gamesFileNames, gamesDirectory, 0); // index 0 for games data
    pushIntoJsonDataArray(appsFileNames, appsDirectory, 1); // index 1 for apps data

    // read the featured apps and games data from the file
    const featuredFilePath = path.join(featuredAppsAndGamesDirectory, 'featured-apps-games.json');
    const featuredFileContents = fs.readFileSync(featuredFilePath, 'utf-8');
    const featuredJsonData = JSON.parse(featuredFileContents);
    // concatenate the games and apps data into one array
    const appsAndGames = [...jsonDataArray[0] , ...jsonDataArray[1]];
    // convert the featured apps and games object into an array of values
    const convertedArrayOfFeaturedPropertyValues = Object.values(featuredJsonData)
    // filter the array of values to keep only the ones that match the app or game names in the appsAndGames array
    const filteredFeaturedPropertyValues = convertedArrayOfFeaturedPropertyValues.filter(featureAppName => appsAndGames.some(appOrGame => appOrGame.appName === featureAppName));
    // filter the apps and games data based on the featured apps and games names
    const filteredAppsAndGames = filteredFeaturedPropertyValues.map((featureAppName) => {
      // loop through the apps and games data
      for (let i = 0; i < appsAndGames.length; i++) {
        // check if the app or game name matches the featured app or game name
        if (featureAppName == appsAndGames[i].appName) {
          // return the matching app or game data
          return appsAndGames[i];
        }
      }
    })
    // push the filtered apps and games data into the array
    jsonDataArray.push(filteredAppsAndGames); // index 2 for featured apps and games data

    // return a successful response with the JSON data array
    return res.status(200).json(jsonDataArray);
  } catch (error) {
    // return an error response with the error message
    return res.status(500).json({ error: 'Failed to read JSONs' });
  }
}
