## description ##

very simple node start project. 
includes local passport login, express, sequelize. 
views includes a homepage, header, navbar including bulma css

## instructions ##

1. git clone URL to get started
2. rename folder name to app name
3. rename package.json name
4. npm install (npm install -g sequelize-cli if not already)
3. update app.locals in index.js to your site settings.

**create db**

1. sequelize init. see (docs)[http://docs.sequelizejs.com/manual/migrations.html]
2. update config.json file for user/pw & database names
3. run sequelize db:create > this will create dbs from config file
4. create user model with with sequelize model:generate --name UUser --attributes username:string,password:string

build your app!
