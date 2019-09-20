const Controller = require('egg').Controller;

class HomeListController extends Controller {
    async list() {
        const {ctx} = this;
        ctx.res.writeHead(200, {
            'Access-Control-Allow-Origin': '*'
        });
        const list = await ctx.service.homeList.list();
        this.ctx.logger.info(['home list', JSON.stringify(list)].join(' | '));
        ctx.body = list;
    }
}

module.exports = HomeListController;
