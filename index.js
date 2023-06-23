const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    layout: 'default',
    title: 'Home page',
    text: 'Click me',
  })
})

router.get('/users', function (req, res) {
  res.render('user-list', {
    layout: 'header',
    title: 'user list page',

    data: {
      userlist: [{ id: 5123, name: 'Ivan'isAdmin:true },
                { id: 85677, name: 'Lena'isAdmin:false },
    ],
    },
  })
})

module.exports = router
