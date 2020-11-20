a folder to server, a folder to client

from client to firebase:
npm run build



from server to firebase:
npm install firebase-admin --save
 firebase serve


from client from firestore to local:

deploy:
<https://create-react-app.dev/docs/deployment/>
IMPORTANT: you need to set proper HTTP caching headers for service-worker.js file in firebase.json file or you will not be able to see changes after first deployment (issue #2440). It should be added inside "hosting" key like next:

{
  "hosting": {
    ...
    "headers": [
      {"source": "/service-worker.js", "headers": [{"key": "Cache-Control", "value": "no-cache"}]}
    ]
    ...

firebase deploy