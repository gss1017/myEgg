const Controller = require('egg').Controller;

class TranslationsListController extends Controller {
    async list() {
        const {ctx} = this;
        const isLogin = await ctx.service.user.isLogin;
        let list = '未登录';
        if (isLogin) {
            list = await ctx.service.translations.list();
        }
        this.ctx.logger.info(['translations list', JSON.stringify(list)].join(' | '));

        ctx.body = {
            success: isLogin,
            data: list
        };
    }
}

module.exports = TranslationsListController;
