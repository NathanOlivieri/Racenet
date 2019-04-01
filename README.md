# Racenet

To start project

navigate to C:\Users\Nathan Olivieri\Desktop\capstone-custom> project folder in command prompt and run command: 

mongod --dbpath data/db

*You should see *waiting for connections on port 2707* or something of the sort in the comand prompt once this is running.

then open second command prompt in same location and run command:

nodemon index.js 
*this will start the server on port8080

then open third command prompt window , navigate to client/racenet and run command:

npm start

*this will open your default browser on localhost:300 displaying the APP.
