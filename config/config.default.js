module.exports = {
    middleware: [
        'robot'
    ],
    keys: '.',
    proxy: false,
    view: {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks'
        }
    },
    news: {
        pageSize: 5,
        serverUrl: 'https://hacker-news.firebaseio.com/v0'
    },
    robot: {
        ua: [
            /Baiduspider/i
        ]
    }
};
