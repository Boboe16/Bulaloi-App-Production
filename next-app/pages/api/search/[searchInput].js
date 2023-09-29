import fs from 'fs';
import path from 'path';

export default async (req, res) => {
  // Get the search query from the request
  const { searchInput } = req.query;

  // Define the directories to search
  const gamesDir = path.join(process.cwd(), 'public/apps-games-data/games');
  const appsDir = path.join(process.cwd(), 'public/apps-games-data/apps');

  // Declare variables to store the files and data
  let gamesFiles, appsFiles, allFiles, allData;

  try {
    // Read the contents of the directories
    gamesFiles = await fs.promises.readdir(gamesDir);
    appsFiles = await fs.promises.readdir(appsDir);
  } catch (error) {
    // Handle any errors that may occur while reading the directories
    console.error(error);
    res.status(500).json({ message: 'Failed to read the directories' });
    return;
  }

  // Combine the files into a single array
  allFiles = [...gamesFiles.map(file => [gamesDir, file]), ...appsFiles.map(file => [appsDir, file])]; // Changed this line

  try {
    // Read and parse the contents of each file
    allData = await Promise.all(
      allFiles.map(async ([dir, file]) => { // Changed this line
        const filePath = path.join(dir, file); // Changed this line
        const fileData = await fs.promises.readFile(filePath, 'utf8');
        return JSON.parse(fileData);
      })
    );
  } catch (error) {
    // Handle any errors that may occur while reading and parsing the files
    console.error(error);
    res.status(500).json({ message: 'Failed to read and parse the files' });
    return;
  }

  let filteredData;

  try {
    // Filter the data based on the search query
    filteredData = allData.filter((data) =>
      data.appName.toLowerCase().includes(searchInput.toLowerCase()) // Changed this line to make the search case-insensitive
    );
  } catch (error) {
    // Handle any errors that may occur while filtering the data
    console.error(error);
    res.status(500).json({ message: 'Failed to filter the data' });
    return;
  }

  // Send the filtered data as a JSON response
  res.status(200).json(filteredData);
};
