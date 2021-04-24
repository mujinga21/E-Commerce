// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


Product.belongsTo (Category, {
  foreignKey: "category_id",
})
// Products belongsTo Category

// Categories have many Products
Category.hasMany (Product, {
  foreignKey: "product_id",
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany (Tag, {
  foreignKey: "tag_id",

through: {
    model: ProductTag,
    unique: false
  },
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany (Product, {
  foreignKey: "product_id",

through: {
    model: ProductTag,
    unique: false
  },
})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
