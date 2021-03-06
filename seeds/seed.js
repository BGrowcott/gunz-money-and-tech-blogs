const sequelize = require('../config/connection');
const { User, Post, Comments } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentsData = require('./commentsData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  
    for (const post of postData) {
      await Post.create({
        ...post
      });
    }

    for (const comment of commentsData) {
      await Comments.create({
        ...comment
      });
    }
  
    process.exit(0);
  };
  
  seedDatabase();