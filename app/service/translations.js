const Service = require('egg').Service;
const {translation_list} = require('../mockDB');

class TranslationsListService extends Service {
    async list() {
        return translation_list;
    }
}

module.exports = TranslationsListService;
