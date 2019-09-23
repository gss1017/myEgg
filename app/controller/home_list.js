const Controller = require('egg').Controller;

class HomeListController extends Controller {
    async list() {
        const {ctx} = this;
        const list = await ctx.service.homeList.list();
        this.ctx.logger.info(['home list', JSON.stringify(list)].join(' | '));
        ctx.body = {
            data: list
        };
    }
}

module.exports = HomeListController;
