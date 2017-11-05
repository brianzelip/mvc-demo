
- accepts user input via <input>s
- saves user input data to a database
- allows user to edit data
- ultimately, the thing is a list maker, a list of objects that have:
  - a title
  - an associated image, maybe a cover image, maybe a thumbnail, etc.
  - metadata

Places you want to keep track of
- restaurants
- museums
- places of interest
- theaters
- schools
- grafitti alleys
- neighborhoods
- stores
- libraries
- nooks and crannies
- train stations
- bars
- places with great crab cakes
- places with great beer
- breweries
- dog food for moose bug
- good gyros

the tag needs to be rethought
the tag can consist of:
  - a hard coded set of options to make one or more selections (drop down list of options to apply to an entry)
    - this list can always be bigger, ie: whatever the set of options looks like at the time of creating a new entry in the overall list, that is the list of record, and the user can select one more more of those options
      - if there is no option, then the user should have the ability, and requirement, to make a new option to select.
    - CAN BE A [<datalist>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist)!
  - an open ended input for 0 or more tags input strings

- could replicate wordpress, which is to say, create an interface for adding a new post, and an index for rendering the list of posts, and a post rendering for any given post.

app could be:
  - wordpress port for blog posts
  - breweries
  - restaurants
  - coffee shops for remote working


If going with Bmore Goods:
vendor types:
- wood
- jewelry
- bags
- art
- pottery
- music
- photography
- 

** YIKES! - this quickly gets too out of hand. I wonder if there's a taxonomy for vendor types, craft/artisan/product maker types? Elsewise, other ways to approach categorizing:

- allow the user to input up to three tags
  - this set would then be filterable? reminds me of word tags though, the problem is there wouldn't be enough consistency.


** SCRATCH ALL OF THE ABOVE - I'M NOW PLANNING ON IMPLEMENTING A "STAFF DIRECTORY" INSTEAD OF "BMORE GOODS". THIS DIRECTORY APP WILL:

- display a **list of staff members** from the following routes:
  - '/'
  - '/staff'
- display a **staff member profile** at the following route:
  - '/member/:slug/edit' (this could be made to be more robust, ie to allow only uniqu slugs, see Learn Node ep #20)
- display an **add staff member form** at:
  - '/add'
- display an **edit staff member form** at:
  - '/edit/:slug

```js
// /routes/index.js
// vendors
router.get('/', catchErrors(vendorController.getVendors));
router.get('/vendors', catchErrors(vendorController.getVendors));
router.get('/add', vendorController.addVendor);
router.post('/add', catchErrors(vendorController.createVendor));
router.get('/vendors/:id/edit', catchErrors(vendorController.editVendor));
router.post('/add/:id', catchErrors(vendorController.updateVendor));
router.get('/vendors/:slug', catchErrors(vendorController.getVendor));

// staff
router.get('/', catchErrors(vendorController.getStaff));
router.get('/staff', catchErrors(vendorController.getStaff));
router.get('/staff/add', vendorController.addStaffGet);
router.post('/staff/add', catchErrors(vendorController.addStaffPost));
router.get('/staff/:slug/edit', catchErrors(vendorController.editStaffGet));
router.post('/staff/:slug/edit', catchErrors(vendorController.editStaffPost));
router.get('/staff/:slug', catchErrors(vendorController.getStaffMember));
```

What about the data model?
- `Staff.js`
- `Member.js`
- `StaffMember.js`

pass around `member` object when passing around a single entity's data, AND
pass around `staff` object when passing around all staff.

OR 

pass around `staff` object when passing around a single entity's data, AND
pass around `allStaff` object when passing around all staff.


TODO:
- add slug()
- ~~add photo upload~~
- add map?
- add skills tags array
- create profile cards for `/staff`
- create profile pages for `/staff/:slug`

re: skills array:
- can have a set of hard-coded options that a user can pick up to 5
- options:
  - node
  - python
  - ruby
  - go
  - javascript
  - php
  - css
  - react
  - security
  - visualization
  - data
  - sketch
  - animations
  - design
  - front end
  - back end
  - ui/ux
  - typography
  - ia
  - content
  - admin
  - people
  - relationships
  - instruction
  - teaching
