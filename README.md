#### In first step you should run elasticsearch engine and u can use logstash for push your data into elasticsearch
#### Set your data into <ormconfig.json> config file
#### GET http://localhost:3000/init this link insert random data into <users> table default count is 500
#### GET http://localhost:3000/search?value={val} filtration by "firstName, lastName, email address"

#### Database config default
* Port: 6432
* Database: elastic
* Table: users

#### Elastic config default
* Port: 9200
* index: users
