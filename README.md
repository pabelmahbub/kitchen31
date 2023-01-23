#### Live site in this link: https://kitchen31-best20foods.netlify.app/

To run in local. Initially:
```
git clone https://github.com/pabelmahbub/kitchen31.git
npm install
npm start[to start the app in local machine]
```
In main branch: Open another terminal in root folder to run this app in local using ```json server``` database by installing ```json-server``` In branch ```firestore-db``` no need json-server, only npm installation.
```
npm i json-server[if npm installed no need to do]
npx json-server --watch data/db.json
```
Following package versions are noted from packeage.json:
```
"name": "kitchen31",
"version": "0.1.0",
"firebase": "8.5",
"json-server": "^0.17.1",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-router-dom": "^6.7.0",
```
To build app:
```
npm run build
```
User can create a food recipe and search favourite dishes from the collection. Image is attached:
<br />
https://user-images.githubusercontent.com/43867380/213872202-acdf7b44-1457-479c-9983-4d06421f9472.png
