# library
App to keep track of Books in the library.<br>
Built by using Spring Boot and Ember.js<br>
Check here:<br>
https://prajun7.github.io/library/

### To Start
- Clone the project
- For Frontend (VS code)
```sh
npm install
ember s
```
- For backend (IntelliJ)
```sh
Build the project using Maven
```

### Backend
 - Spring Boot
 - JPA
 - H2
 
 ### Frontend
  - Ember.js

### Deployment
#### Frontend - Using github pages
 In config/environment.js file, the rootURL should be the repository-name in our case library.
 ```sh
module.exports = function(environment) {
  var ENV = {
    // ... other configurations ...

    // Update rootURL and locationType for GitHub Pages deployment
    rootURL: '/<repository-name>/', // Replace <repository-name> with your GitHub repository name
    locationType: 'hash'
  };

  // ... other configurations ...

  return ENV;
};

 ```
 
 And need to add these options into `ember-cli-build.js` file:
 ```sh
     // Configure outputPaths
  app.options.outputPaths = {
    app: {
      html: 'index.html',
      css: '/assets/app.css',
      js: '/assets/app.js'
    },
    vendor: {
      css: '/assets/vendor.css',
      js: '/assets/vendor.js'
    }
  };
 ```
 
 Check the config/environment.js file and ember-cli-build.js file in the main branch.

> Ember is deployed using the guthub pages. Check the branch `gh-pages-frontend`.<br>
> To deploy a new project follow these steps: <br>
> Run `ember build --environment=production` in the main branch <br>
> This will generate the dist folder in the main branch.<br>
> Copy the contents of the dist folder like, assets folder, index.html to the `gh-pages-frontend` branch.<br>
> The assest, index.html and robots.txt should be the root file of that branch, that is they should not be inside any folder.<br>

### Backend - Using Heroku
We need to add system.properties file in the backend and need to specifiy the java version we are using.
That is,
```
java.runtime.version=17
```
Check pom.xml file to see which Java versin you are using.

> Check the heroku-backend branch<br>
> Only this branch is deployed for backend.

---

### Ember 101
- index.js in routes folder
- index.js in controller folder
- index.hbs in template folder

All of these files are connected.
The name of the files should be same.

In index.js in route folder: It acts like useEffect with empty array. 
In this file we put the API call to the backend inside the model.
And we return the data from the model.
The route file is the singleton, that is, it only have one instance and only runs once when we go to that URL.

After this in, index.hbs file we can get that data by doing,
this.model

If we want to have more methods in index.hbs method we will define with action or method into the index.js in controller folder.

When we call a component and pass the function or variable inside the component we can get that in the component by using, this.args.

