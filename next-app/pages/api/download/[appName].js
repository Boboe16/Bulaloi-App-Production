import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
    const { appName } = req.query;

    if (!appName || typeof appName !== 'string' || appName.includes('..')) {
        res.status(400).json({ error: 'Invalid appName' });
        return;
    }

    const appsGamesDataPath = path.join(process.cwd(), 'public', 'apps-games-data');
    const appFilePath = path.join(appsGamesDataPath, 'apps', `${appName}.json`);
    const gameFilePath = path.join(appsGamesDataPath, 'games', `${appName}.json`);
    
    let responseData = {};

    if (fs.existsSync(appFilePath)) {
        responseData = JSON.parse(fs.readFileSync(appFilePath, 'utf-8'));
    } else if (fs.existsSync(gameFilePath)) {
        responseData = JSON.parse(fs.readFileSync(gameFilePath, 'utf-8'));
    } else {
        responseData = { error: 'App not found' };
        res.status(404);
    }

    res.status(200).json(responseData);
}
