#Todo App

Tutorial from : [https://dev.to/abiodunjames/](https://dev.to/abiodunjames/build-a-todo-app-with-nodejs-expressjs-mongodb-and-vuejs--part-1--29n7
)

`sudo service mongod start`
`service mongod status`
`sudo service mongod stop`

`npm run build`

Create Single todo item

`curl -H "Content-Type: application/json" -X POST -d "{\"name\":\"Going Shopping\"}" http://localhost:4000/api/add`

Get all Items 
`curl  http://localhost:4000/api/all`