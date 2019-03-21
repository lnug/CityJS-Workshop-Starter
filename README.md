# CityJS-Workshop
Build your own Serverless tic tac toe AI using Node.js and (a little bit of) TensorFlow.js

The demo can be found: https://hungry-nobel-797820.netlify.com/

To trigger the lamda function make a request to: https://hungry-nobel-797820.netlify.com/.netlify/functions/test

Explore how Node.JS and serverless applications is going to power the next generation of websites with Hew and Thomas. In this workshop you will be introduced to backend development and some basic machine learning through building your own Tic Tac Toe service utilising serverless technology and TensorFlow.js.
 

The workshop is 2 hours 30 minutes long and you will learn to:

* Learn about what serverless means and why it’s 🎉awesome 🎉

* Create and deploy a serverless function

* Build a simple neural network using tensorflow.js

* Integrate this with a Vue.JS Tic Tac Toe App


# Getting started

Fork this project on github and deploy by logging in through github at https://app.netlify.com/

The netlify.toml file describes how the site should be deployed

```toml
[Settings]
ID = "Your_Site_ID"
[build]
  base = ""
  publish = "dist"
  functions = "functions/"
  command = "npm run build"
```

The base directory is the starting point where netlify looks for a file that shows how your project is configured. i.e. a package.json. It will also install any dependencies for you.

All files in the publish directory get deployed to netlifys cdn

All js files in the funcion directory get deployed as an aws lamda accessable on <your site>/.netlify/<name_of_folder>/<name_of_file>
 
