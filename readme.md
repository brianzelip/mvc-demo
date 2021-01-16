# JavaScript Model-View-Controller App Demo

MVC demonstration in Node.js using [Express](http://expressjs.com), [Pug](https://pugjs.org), and [MongoDB](https://www.mongodb.com/).

The app is a "staff directory" app that lets a user:
- create a new staff member profile
- edit a staff member profile
- view all staff
- view an individual staff member profile

Created for the [Jr Web Dev meetup](https://www.meetup.com/jrWebDev/). See the accompanying [presentation slides](http://zelip.me/talks/node-mvc/).

Shout out to Wes Bos's [Learn Node](https://learnnode.com) course and [Grabient](https://www.grabient.com/) (a cool CSS gradient generator)!

## To run this app
*Requires node v7.6+ for use of `async/await`.*
1. Clone this repo, then `cd` into it.
2. Rename the `variables.env.start` file to `variables.env`.
3. Run `npm install` to install the dependencies listed in package.json.
4. Run `npm start` to serve up the app.
5. Point your browser to `localhost:2600` and go nuts!

## Some obvious shortcomings of this app
- there are no security checks in place to eliminate any funny business with javascript form field insertions
- the model function that creates member url slugs isn't robust enough to ensure all slugs are unique (in case two or more members share the same name)
- there isn't any user login functionality, so the ability to edit any member's profile is available to all users
- the photo resizing has the hardcoded assumption that all uploaded images will be larger than 800px
