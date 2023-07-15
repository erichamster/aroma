'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [{
      "id": "1",
      "username": "isoar0",
      "password": "Tk5uOK",
      "email": "isoar0@squidoo.com",
      "phone": "424-488-9433",
      "fullname": "Idelle Soar",
      "avatarPath": "http://dummyimage.com/30x30.jpg/5fa2dd/ffffff",
      "isAdmin": false
    }, {
      "id": "2",
      "username": "otansey1",
      "password": "XfdsOdkzugs9",
      "email": "otansey1@freewebs.com",
      "phone": "938-173-6222",
      "fullname": "Odette Tansey",
      "avatarPath": "http://dummyimage.com/30x30.png/ff4444/ffffff",
      "isAdmin": true
    }, {
      "id": "3",
      "username": "yhache2",
      "password": "lgVzGZIN",
      "email": "yhache2@mail.ru",
      "phone": "311-911-5901",
      "fullname": "Yetta Hache",
      "avatarPath": "http://dummyimage.com/30x30.png/cc0000/ffffff",
      "isAdmin": false
    }, {
      "id": "4",
      "username": "kpallis3",
      "password": "RyXKbAm6QM",
      "email": "kpallis3@ocn.ne.jp",
      "phone": "777-771-8115",
      "fullname": "Kath Pallis",
      "avatarPath": "http://dummyimage.com/30x30.jpg/5fa2dd/ffffff",
      "isAdmin": false
    }, {
      "id": "5",
      "username": "jcostell4",
      "password": "NXeM06DkJ",
      "email": "jcostell4@ca.gov",
      "phone": "538-855-6244",
      "fullname": "Janina Costell",
      "avatarPath": "http://dummyimage.com/30x30.bmp/dddddd/000000",
      "isAdmin": true
    }, {
      "id": "6",
      "username": "svynoll5",
      "password": "gmmwlk1GLUBW",
      "email": "svynoll5@soundcloud.com",
      "phone": "257-993-2783",
      "fullname": "Sasha Vynoll",
      "avatarPath": "http://dummyimage.com/30x30.bmp/cc0000/ffffff",
      "isAdmin": false
    }, {
      "id": "7",
      "username": "cpippard6",
      "password": "mqg2NX7FqVO",
      "email": "cpippard6@list-manage.com",
      "phone": "373-944-5224",
      "fullname": "Celka Pippard",
      "avatarPath": "http://dummyimage.com/30x30.bmp/cc0000/ffffff",
      "isAdmin": true
    }];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    })
    await queryInterface.bulkInsert('Users', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
