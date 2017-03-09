var category = require('../../YB-API/controllers/category.server.controllers');

module.exports =  function(app) {
  app.route('/category')
    .get(category.allCategories)
    .post(category.create);
  
  app.route('/category/:id')
    .get(category.singleCategory)
    .put(category.update)
    .delete(category.delete);
}