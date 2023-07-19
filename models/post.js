"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init(
    {
      postId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pserId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      summary: DataTypes.STRING,
      createdAt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastModified: DataTypes.STRING,
      categoryId: DataTypes.STRING,
      categoryName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
