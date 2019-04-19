# Style Guide

## Javascript
This project follows the [AirBnB styleguide](https://github.com/airbnb/javascript)

## File structure

The file structure is organized following Charles Stover's folder structure. Find the Medium post [here](https://medium.com/@Charles_Stover/optimal-file-structure-for-react-applications-f3e35ad0a145)

An example can be found here:

```

src

├── assets
│ └──images
│ └── logo.svg
├── components
│ └── app
│ ├── app.css
│ ├── app.js
│ └── app.test.js
├── index.css
├── index.js
└── service-worker.js

```

 
## Git
This project uses the udacity git styleguide found [here](https://udacity.github.io/git-styleguide/)
### Message Structure
A commit messages consists of three distinct parts separated by a blank line: the title, an optional body and an optional footer. The layout looks like this:
```
type: subject

body

footer
```
The title consists of the type of the message and subject.

### Types
The type is contained within the title and can be one of these types:
-   **feat:**  a new feature
-   **fix:**  a bug fix
-   **docs:**  changes to documentation
-   **style:**  formatting, missing semi colons, etc; no code change
-   **refactor:**  refactoring production code
-   **test:**  adding tests, refactoring test; no production code change
-   **chore:**  updating build tasks, package manager configs, etc; no production code change

### The Subject

Subjects should be no greater than 50 characters, should begin with a capital letter and do not end with a period.

Use an imperative tone to describe what a commit does, rather than what it did. For example, use  **change**; not changed or changes.

### The Body

Not all commits are complex enough to warrant a body, therefore it is optional and only used when a commit requires a bit of explanation and context. Use the body to explain the  **what**  and  **why**of a commit, not the how.

When writing a body, the blank line between the title and the body is required and you should limit the length of each line to no more than 72 characters.

### The Footer

The footer is optional and is used to reference issue tracker IDs.

### Examples
---
`Imperative tone usage`

**Good:**
`feat: Change home screen after login to my account`

**Bad:**
`feat: Changed home screen after login to my account`

Use **change**, not changed or changes. The goal is to always use an imperative tone to describe what a commit does.

---
`Wrong type`

**Good:**
`docs: Create new commit examples`

**Bad:**
`documentation: Create new commit examples`

Use one of the predefined types instead of creating your own types.

---
`Wrong formatting`

**Good:**
`docs: Create new commit examples`

**Bad:**
`docs: create new commit examples.`

All subjects should begin with a capital letter and not end with a period.

# Available Scripts

In the project directory, you can run:

  

### `npm start`

  

Runs the app in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  

The page will reload if you make edits.<br>

You will also see any lint errors in the console.

  

### `npm test`

  

Launches the test runner in the interactive watch mode.<br>

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  

### `npm run build`

  

Builds the app for production to the `build` folder.<br>

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed!

  

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  

### `npm run eject`

  

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

  

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

  

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

  

## Learn More

  

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

  

To learn React, check out the [React documentation](https://reactjs.org/).