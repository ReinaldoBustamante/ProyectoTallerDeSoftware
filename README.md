# Proyecto Taller De Software

Before create React application we need install nodejs to run localhost server.

<strong> In Linux: </strong> 

  In Debian and derivates: 

Start by updating the packages list by typing:

<code>$ sudo apt update </code> 

Install nodejs and npm using the apt package manager:

<code> $ sudo apt install nodejs</code> 

<code> $ sudo apt install npm</code>

In Arch Linux and derivates:

<code>$ sudo pacman -S nodejs npm</code>

To verify the installation execute the following command:

<code>$ nodejs --version</code> 




<strong>In Windows:</strong> 

<code>https://nodejs.org/es/download/</code>

and click in Windows installer.


<strong> Installation React project </strong> 


The complete installation is in your documentation:

<code>https://facebook.github.io/create-react-app/docs/getting-started</code>

<strong> Quick start </strong> 

We need to verify if <code>create-react-app</code> is installed

<code>$ npm create-react-app --version </code>

If <code> create-react-app</code> not installed 


<code>$ npm install -g create-react-app </code> 

Later we create the project 


<code>$ npm create-react-app app-name</code>


<code>$ cd app-name</code>


<code>$ npm start</code>


<strong> Basic commands npm </strong> 

Starts the development server

<code>$ npm start</code>


Bundles the app into static files for production.


<code>$ npm run build </code> 


Starts the test runner.
 

<code>$ npm test</code>


Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!


<code>$ npm run eject </code> 


