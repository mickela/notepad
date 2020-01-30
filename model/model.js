const Sequelize = require('sequelize');
const db = require('./db');


const Note = db.define('note', {
    // attributes
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    body: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
    }
  }, {
    // options
  });



// const Model = Sequelize.Model;
// class Note extends Model {}
// Note.init({
//   // attributes
//   title: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   body: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   createdAt: {
//     type: Sequelize.DATE,
//     allowNull: false
//   }
// }, {
//   db,
//   modelName: 'note'
//   // options
// });

module.exports = Note;