const Controller = require('egg').Controller;

class UserController extends Controller {

    async login() {
        const {ctx} = this;
        const login = await ctx.service.user.login();
        ctx.cookies.set('login', login);
        ctx.body = {
            success: true,
            data: login
        };
    }

    async signOut() {
        const {ctx} = this;
        const login = await ctx.service.user.signOut();
        ctx.cookies.set('login', login);
        ctx.body = {
            success: true,
            data: login
        };
    }

    async getIsLogin() {
        const {ctx} = this;
        const isLogin = await ctx.service.user.isLogin;
        ctx.body = {
            success: true,
            data: isLogin
        };
    }
}

module.exports = UserController;
