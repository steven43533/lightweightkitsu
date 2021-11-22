# Project 2 Pitch Guidelines
Project Description and Pitch Guidelines for SEIR SEA P2

---

1. LightweightKitsu
2. PEN
3. Simple wireframes: 
* https://www.figma.com/file/ZC2JRM7QVEJUrINN741ORL/Project-2-Wireframe?node-id=0%3A1
5. API BEING USED: 
* https://kitsu.docs.apiary.io/#
6. ERD LINK: 
https://lucid.app/lucidchart/3b93a7bb-d85b-4a08-936f-b44f588fe357/edit?viewport_loc=472%2C-113%2C1175%2C1374%2C0_0&invitationId=inv_8f92a812-8c5d-4583-a9eb-827e426667d5
7. Example of how to call/invoke your API, and a description of what data comes back:
Call API with: https://kitsu.io/api/edge/

GET: https://kitsu.io/api/edge/anime?filter[text]=samurai%20champloo  
returns the anime with the title of samurai champloo(Tested with Postman)

8. MVP GOALS:
* Be able to add an anime to your favorites list.
* On your favorites page show certain details about each anime.
* Be able to delete favorites from your list.
* Wishlist(want to watch) page that stores animes you'd like to watch later
9. STRECH GOALS:
* Dark mode?
* Make links to certain characters wikipedia.
10. Any potential roadblocks?
* I think reading through the API docs and understanding how it works will be my first hurdle.



# How to use:
1. On home page/landing page:
      ### Users of site can only add/favorite if they are signed in.
      * You can create an account or login to an existing account:  
      * Use search bar and type in anime title(can be complete title or incomplete)
      * Upon search results you can click on the anime titles for further details.
      
2. On details page of clicked anime title:
      * You can view a few more details of the anime 
      * Add to favorites or wishlist button 

3. On profile page: 
      * You can update your biography and see it update as soon as you click.
      * Bio is saved to DB and each account created can have their own unique bio.

4. On favorites page: 
      * Delete anime from your favorites page
      * Favorites page is unique to signed in account

5. On want to wishlist page:
      * Same as favorites page

* HTTP METHODS/ROUTES CHART: 

| VERB   | URL                 | CRUD ACTION | DESCRIPTION                                        |  |
| ------ | ------------------- | ----------- | -------------------------------------------------- |  |
| GET    | /results            | INDEX(READ) | Gets the search results of query                   |  |
| GET    | /:anime\_id         | INDEX(READ) | Gets the specific anime ID                         |  |
| GET    | /favoritedAnime     | READ        | Gets all the current users favorite anime          |  |
| POST   | /addAsFavorite      | CREATE      | Adds an anime to your favorites page               |  |
| DELETE | /favoritedAnime/:id | DESTROY     | Deletes specific anime by the associated unique ID |  |
| GET    | /profile            | READ        | Leads to users profile page                        |  |
| PATCH  | /profile/:id        | UPDATE      | Allows user to update their bio                    |  |
| GET    | /watchlist          | READ        | Gets users watchlist                               |  |
| POST   | /addToWatchList     | CREATE      | Allows user to add anime to their watchlist        |  |
| DELETE | /watchlist/:id      | DESTROY     | Remove an anime from a users watchlist             |