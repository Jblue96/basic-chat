# basic-chat
Basic Node.js chat app using Socket.IO.

## Setup

* Visit [EY Cloud][1].
* Create v5 environment with a PostgreSQL or MySQL server.
* Use sequelizejs recipe to generate /data/appname/shared/config/config.json:
  * https://github.com/engineyard/ey-cookbooks-stable-v5/tree/master/cookbooks/sequelizejs
  * Edit attributes/default.rb to specify adapter: postgres|mysql
* Deploy.
* Check deployment log to make sure `sequelize db:migrate` deploy hook was successful.

## Features

* Basic Chat - /
  * no users/nicknames
  * simply sends messages to all connected users
* User Management - /users
  * list of users
  * not (yet) linked to chat feature
  * create/delete users

## License

Released under the [MIT License][2].

[1]: https://cloud.engineyard.com
[2]: https://opensource.org/licenses/MIT
