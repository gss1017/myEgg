
module.exports = app => {
    const { router, controller } = app;
    router.redirect('/', '/home/index', 302);

    router.get('/home/index', controller.home.index);

    router.post('/api/posts', controller.post.create);

    router.get('/news', controller.news.list);

    router.get('/login', controller.user.login);
    router.get('/sign_out', controller.user.signOut);
    router.get('/get_login_status', controller.user.getIsLogin);

    router.get('/home_list', controller.homeList.list);

    router.get('/translations', controller.translations.list);
};
