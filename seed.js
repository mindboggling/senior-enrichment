const db = require('./db/index.js');
const User = require('./db/models/user.js');
const Campus = require('./db/models/campus.js');
const Promise = require('bluebird');

const users = [];
const campuses = [];


// function doTimes (n, fn) {
//   var results = [];
//   while (n--) {
//     results.push(fn());
//   }
//   return results;
// }

function generateUsers () {
  // const users = doTimes(numUsers, randUser);

  users.push(User.build({
    name: 'Jon Kent',
    email: 'jon.kent@superheroes.com'
  }));
  users.push(User.build({
    name: 'Damian Wayne',
    email: 'damian.wayne@superheroes.com'
  }));
  users.push(User.build({
    name: 'Howard Stark',
    email: 'howard.stark@superheroes.com'
  }));
  users.push(User.build({
    name: 'Magni Thorson',
    email: 'magni.thorson@superheroes.com'
  }));
  users.push(User.build({
    name: 'Donna Troy',
    email: 'donna.troy@superheroes.com'
  }));
  return users;
}

function generateCampuses() {
  // const campuses = doTimes(numCampuses, randCampus);
  campuses.push(Campus.build({
    name: 'Fortress of Solitude',
    image: 'http://i65.tinypic.com/2dbqq6c.jpg'
  }));
  campuses.push(Campus.build({
    name: 'Batcave',
    image: 'http://i65.tinypic.com/oghsad.jpg'
  }));
  campuses.push(Campus.build({
    name: 'Stark Tower',
    image: 'http://i68.tinypic.com/28r30p2.jpg'
  }));
  campuses.push(Campus.build({
    name: 'Asgard',
    image: 'http://i68.tinypic.com/spj6er.jpg'
  }));
  campuses.push(Campus.build({
    name: 'Themyscira',
    image: 'http://i66.tinypic.com/ibdog9.jpg'
  }));

  return campuses;
}

function createUsers () {
  return Promise.map(generateUsers(), function (user) {
    return user.save();
  });
}

function createCampuses () {
  return Promise.map(generateCampuses(), function (campus) {
    return campus.save();
  });
}

function seed () {
  return createCampuses()
  .then(function (createdCampuses) {
    return createUsers(createdCampuses);
  });
}

console.log('Syncing database');

db.sync({force: true})
.then(function () {
  console.log('Seeding database');
  return seed();
})
.then(function () {
  console.log('Seeding successful');
}, function (err) {
  console.error('Error while seeding');
  console.error(err.stack);
})
.finally(function () {
  db.close();
  return null;
});
