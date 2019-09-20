
module.exports = app => {
    const { router, controller } = app;
    router.redirect('/', '/home/index', 302);

    router.get('/home/index', controller.home.index);

    router.post('/api/posts', controller.post.create);

    router.get('/news', controller.news.list);

    router.get('/home_list', controller.homeList.list)
};
