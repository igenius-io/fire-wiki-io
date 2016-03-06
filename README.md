# FireWiki.io
Fire wiki is a fully functional wiki with Search, Edit and Linking included (using the default [[ link ]] format).

To get the wiki up and running do the following:

* Install the wiki
```
npm install fire-wiki-io
```

* require the wiki in your server.js file
```
var firewiki = require('fire-wiki-io');
```

Next run **node server.js** from the command line.

Browse to <http://localhost:7000> and the wiki will create a default home page.

To start editing, click on the edit button in the top right, and add in the markdown you require.

To add in links add in the default link syntax [[link]] syntax.