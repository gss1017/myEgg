const Service = require('egg').Service;
const IS_LOGIN = Symbol('USER/IS_LOGIN');

class UserService extends Service {
    constructor(ctx) {
        super(ctx);
        this[IS_LOGIN] = false;
    }

    async login() {
        this[IS_LOGIN] = true;
        return this[IS_LOGIN];
    }

    async signOut() {
        this[IS_LOGIN] = false;
        return this[IS_LOGIN];
    }

    get isLogin() {
        console.log(this.ctx.cookies.get('login'), '-------');
        return this.ctx.cookies.get('login') || this[IS_LOGIN];
    }
}

module.exports = UserService;
