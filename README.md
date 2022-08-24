<h1 align="center"><b>Shop Locator</b></h1>

<div align="center">

[![](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)](https://vuejs.org/)
[![](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)

</div>

Application available at: https://shoplocator.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/eaf76f95-7ac3-4892-90cb-92bd01837650/deploy-status)](https://app.netlify.com/sites/shoplocator/deploys)

<br />

## **:information_source: About :information_source:**

Made by [Rafael Krstačić](https://github.com/rkrstacic)
within the course [Programsko inženjerstvo](https://ntankovic.unipu.hr/pi)
on the [Faculty of Informatics in Pula](https://fipu.unipu.hr/).

Built web application was developed with the goal of helping users search their local area to find the types of stores they are in need. [The application prototype](https://www.figma.com/proto/LjWwSORg8MISYlqTDHetpx/Store-locator?node-id=18%3A11259&starting-point-node-id=18%3A11259) was made with the online tool [Figma](https://www.figma.com/). The project uses front-end framework [Vue.js](https://vuejs.org/) version 2 and [Firebase](https://firebase.google.com/) SDK for database support.

Mentor: doc. dr. sc. [Nikola Tanković](https://ntankovic.unipu.hr)

<br />

## **:scroll: Features :scroll:**

One of the main application features is displaying the list of nearby stores based on the location, the type of store, and the maximal distance from the location that user chooses.

Another main feature is the ability to read the reviews of other users for the specific store and to write the review (if the user is logged in) for a store.

Additional features include viewing the working times of the stores (if the information is available), viewing how many people have marked the store as favourite, marking the store as favourite and sorting the list of shops by the number of favourites or by the distance (from close by to far away)

<br />

## **:book: Full application description :book:**

Main promise is as follows: User gets on the home page, presses the one and only button, enters the location, shop types, and the distance, and is then met with the list of shops. From here the user can review a certain shop, change the sort settings or try to search with different parameters. Once reviewing the shop, user can mark the shop as favourite (needs to be logged in), read all the reviews for that specific shop and/or write its own review (needs to be logged in).

Interchangable terms:

-   Shop / store
-   Comment / review
-   Favourite / star

### &nbsp; 1. Defining the search parameters

User is promted to enter a location by text which is then geocoded to get the longitude and the latitude of the location using HERE's Developer API with `/geocode` endpoint ([documentation](https://developer.here.com/documentation/geocoding-search-api/dev_guide/topics/endpoint-geocode-brief.html))

Shop types is just a hardcoded list of possible types of shops that the user can search for. Nothing fancy going on here.

Distance is just a string that is parsed to integer based on the unit (meter/kilometer)

All of these paramters are stored to localStorage so that the preferences are saved between sessions.

### &nbsp; 2. The list of shops

Once the parameters are defined, the HERE's Developer is used again, but this time the `/discover` endpoint is used to get the actual list of shops using the parameters defined above ([documentation](https://developer.here.com/documentation/geocoding-search-api/dev_guide/topics-api/code-discover-category.html))

The list is automatically sorted by distance. Users can additionally sort the list by the number of stars (favourites) shop has. The list shows the number of favourites each shop has, its name, the location, distance from the entered distance and working time if it was present in the API response.

The user is automatically redirected to the list of shops if it filled in the data before (in previous sessions). If the user wants to search for new list, there is an option to reset preferences and fill out parameters again.

Clicking any of the shops on the list will redirect user to the review section for the shop.

### &nbsp; 3. Shop review

Name, distance, location (shorten), working hours (if available), and the number of stars are all shown on the shop specific page. This information is fetched from HERE's Developer endpoint `/lookup`. From here, clicking on the star will mark it as favourite, and if it already was marked as favourite then it will be unmarked. The star has two separate looks for when it is marked as favourite and when it is not (marked: solid, unmarked: hollow). _Note: only users who have logged in can mark as favourite._

On the same page all the reviews written for that specific shop will be displayed alongside with the information of the user who sent it (profile picture and username), when the review was written (relative time), and the review itself.

Lastly, the user can write its own review on the bottom of the page that will be attached to that specific shop and will be available for everyone to see. _Note: only users who have logged in can write a review._

### &nbsp; 4. Authentification

User authentification is done with [Firebase authentification]() SKD.

By clicking on the avatar picture in the top right corner of the navigation bar user is redirected to the log in page. If the user is already logged in, it is redirected to its account page, where it can change the username, change the profile picture and view its email address.

## :computer: How to run it on the local machine :computer:

Download [the code](https://github.com/rkrstacic/shop-locator) from github, example (command prompt):

> `git clone https://github.com/rkrstacic/shop-locator`

Open the folder in an editor ([WebStorm](https://www.jetbrains.com/webstorm/), [VS Code](https://code.visualstudio.com/)), add `.env` file, and write the following in the file:

```js
VUE_APP_API_KEY = "<HERE Developer API Key>";
```

Install dependecies and start the local server using npm or yarn.

Using [npm](https://www.npmjs.com/):

```
$ npm install
```

```
$ npm run serve
```

Using [yarn](https://yarnpkg.com/):

```
$ yarn install
```

```
$ yarn run serve
```
