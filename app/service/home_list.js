const Service = require('egg').Service;
const {home_list} = require('../mockDB');

class HomeListService extends Service {
    async list() {
        return home_list;
    }
}

module.exports = HomeListService;
