const productsController = require('../controller/productsController')
const usersController = require('../controller/usersController')
const cartController = require('../controller/cartController')

module.exports = app => {
    app.get('/', productsController.home)


    //api products
    app.get('/products', productsController.listProduct)
    app.get('/products/:id', productsController.detailProduct)
    app.post('/products/', productsController.tambahProduct)
    app.put('/products/:id', productsController.ubahProduct)
    app.delete('/products/:id', productsController.hapusProduct)

    //api users
    app.get('/users', usersController.listUser)
    app.get('/users/:id', usersController.detailUser)
    app.post('/users/', usersController.tambahUser)
    app.put('/users/:id', usersController.ubahUser)
    app.delete('/users/:id', usersController.hapusUser)

    //api cart
    app.post('/cart/:id', cartController.addToCart)
    app.get('/cart/:id', cartController.showCart)
    app.put('/cart/:id', cartController.editCart)
    app.delete('/cart/:id', cartController.deleteCart)
    app.get('/cart/remove/:id', cartController.removeCart)

    //api CheckOut
    app.get('/cart/checkout/:id', cartController.checkOut)
}