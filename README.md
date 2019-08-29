This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Project created to learn React, and how it works. It's simple restaurant page made without CSS frameworks. However I made my own, small framework that have grids, buttons, helpers etc. etc.

During this project I learned a lot about React and I gained sort-of fluency in using it. Also got better in TypeScript and CSS3 as well.
Also nice thing was to see PWA in action with my own website.

API project which this app uses: [click](https://github.com/KongoPL/hungry-fox-api)

# Screenshots
![screenshot-1.png](https://raw.githubusercontent.com/KongoPL/Hungry-Fox/master/documents/screenshot-1.png)
![screenshot-2.png](https://raw.githubusercontent.com/KongoPL/Hungry-Fox/master/documents/screenshot-2.png)

# Installation
Install `npm` first and then open command prompt in project's directory, type `npm install` and press enter.

## Building an app
Just run `build-prod.bat` in `bin` directory.

**Warning:** In order to work properly, app needs API (also in `src/Api.tsx` API url have to be changed to API's url)

## Pages
* Menu
* Coupons
* Staff
* Partners (static page)
* Job
* Contact
* Summary
* Summary confirmation

## Functionality worth mentioning
* Simple API ([see API project](https://github.com/KongoPL/hungry-fox-api))
* Order's cart using `sessionStorage` (managable - allows adding, modifing count and deleting)
* Language change (also using `sessionStorage`)

## Used libraries
* [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
* [react-i18next](https://github.com/i18next/react-i18next)
* I also used [Font Awesome](https://fontawesome.com/) for icons