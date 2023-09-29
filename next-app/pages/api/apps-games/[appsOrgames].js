import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { appsOrgames } = req.query;

  // Check if query is either 'apps' or 'games'
  if (appsOrgames !== 'apps' && appsOrgames !== 'games') {
    return res.status(400).json({ error: 'Invalid query' });
  }

  const basePath = path.join(process.cwd(), `public/apps-games-data`);

  try {
    let data = [];

    // Read the JSON files in the specified directory
    const filesPath = path.join(basePath, appsOrgames);
    const files = fs.readdirSync(filesPath);

    // Parse the JSON files in the specified directory
    data = files.map(file => {
      const filePath = path.join(filesPath, file);
      try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const jsonData = JSON.parse(content);
        return jsonData;
      } catch (error) {
        console.error(`Error parsing JSON file ${filePath}:`, error);
        return null;
      }
    }).filter(Boolean); // Remove any null entries due to parsing errors

    return res.status(200).json(data);
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
}
