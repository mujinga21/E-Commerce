const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    product_id: {

      type: DataTypes.INTEGER,
      references: {
        // This references the `driver` model, which we set in `Driver.js` as its `modelName` property
        model: 'product',
        key: 'id',
      }
    },
    tag_id: {

      type: DataTypes.INTEGER,
      references: {
        // This references the `driver` model, which we set in `Driver.js` as its `modelName` property
        model: 'tag',
        key: 'id',
      }
    },
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
