# library
App to keep track of Books in the library.<br>
Built by using Spring Boot and Ember.js

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

### Backend - 
