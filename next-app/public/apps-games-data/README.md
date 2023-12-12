## App and Game Data

This repository contains JSON files that store data for various apps and games. The JSON files are organized into four folders, each representing a different category: `apps`, `games`, `featured-games`, and `all-apps-games`.

### File Structure

Each JSON file should follow the following structure:

```json
{
  "appOrGame": "App or Game",
  "appPicture": "URL to App Picture",
  "appName": "App or Game Name",
  "appRating": "App or Game Rating",
  "appDownloadLink": "URL to App or Game Download",
  "appDescription": "App or Game Description",
  "appCategory": "App or Game Category",
  "appVersion": "App Version (optional)",
  "appRequirement": "App Requirements (optional)",
  "appSize": "App Size (optional)"
}
```

### Data Fields

- `appOrGame` (required): Specifies whether the entry represents an "App" or a "Game".

- `appPicture` (required): A URL pointing to the picture or icon representing the app or game.

- `appName` (required): The name of the app or game.

- `appRating` (required): The rating of the app or game (e.g., 4.5 out of 5).

- `appDownloadLink` (required): A URL providing the download link for the app or game.

- `appDescription` (required): A brief description or overview of the app or game.

- `appCategory` (required): The category to which the app or game belongs (e.g., Productivity, Entertainment, Puzzle, etc.).

- `appVersion` (optional): The version number of the app (can be omitted if not applicable).

- `appRequirement` (optional): The system requirements or compatibility details for the app (can be omitted if not applicable).

- `appSize` (optional): The size of the app in terms of storage space required (can be omitted if not applicable).

### Category Rules

If you put the value in category's property its should be like this.

for games:

1. `action`
2. `role-playing`
3. `adventure`
4. `casual`
4. `others`
5. `fps`
6. `arcade`

for apps:

1. `phone editor`
2. `task-app management`
3. `video player and editor`
4. `music`
5. `productivity`

### Folder Structure

The JSON files are organized into the following folders:

1. `apps`: Contains JSON files representing various apps.

2. `games`: Contains JSON files representing different games.

3. `featured-games`: Contains one JSON file representing featured games.

4. `all-apps-games`: Contains JSON files representing a combined list of both apps and games.

### Usage

Feel free to add or modify JSON files in the respective folders to include new apps or games, update existing entries, or remove entries as needed. The data provided in these JSON files can be used for various purposes, such as populating app or game listings, generating content for an app store, or creating a portfolio showcase.

Happy coding!
