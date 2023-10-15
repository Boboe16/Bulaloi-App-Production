// Import the fs module to read files
import fs from 'fs';

// Define the api handler function
export default function handler(req, res) {
  // Destructure the URL queries from req(response)
  const { appOrGame, category } = req.query;

  // Get the path to the data folder
  const dataPath = process.cwd() + `/public/apps-games-data/${appOrGame}`;

  // Read all the files in the data folder
  fs.readdir(dataPath, async (err, files) => {
    // Handle any errors
    if (err) {
      res.status(500).json({ message: 'Something went wrong' });
      return;
    }

    // Filter out only the json files
    const jsonFiles = files.filter(file => file.endsWith('.json'));

    // Create an empty array to store the data
    let data = [];

    // Loop through the json files
    for (const file of jsonFiles) {
      // Read the file content as a string
      const content = fs.readFileSync(dataPath + '/' + file, 'utf-8');

      // Parse the content as a JSON object
      const json = JSON.parse(content);

      // Push the json object to the data array
      data.push(json);
    }

    // Sort the data array based on the appCreated property in descending order
    await data.sort((a, b) => new Date(b.appCreated) - new Date(a.appCreated));

    // If category is specified, filter the data array based on the appCategory property
    function sortAppsCategory(data, category) {
      if (category == 'all') {
        return data;
      } else if (category) {
        function capitalize(string) {
          return `${string.charAt(0).toUpperCase() + string.slice(1)}`;
        }

        return data = data.filter(app => app.appCategory == capitalize(category));
      }
    }

    const filteredData = await sortAppsCategory(data, category);

    // Send the filtered and sorted data as a response
    await res.status(200).json(filteredData);
  });
}
