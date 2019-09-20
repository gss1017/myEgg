const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const a = [{a: 1}, {a:2}, {a: 3}];
        const b = [{v: 1}, {v2: 2}, {v3: 3}];
        console.log(this.ctx.ip);
        this.ctx.body = 'Hello world';
        this.ctx.logger.warn(['1243', 41234]);
    }
}

module.exports = HomeController;
