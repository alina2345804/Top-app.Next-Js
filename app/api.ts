// export const API = {
//     topPage: {
//         find: process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
//         byAlias: process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias',
//     },
//     product: {
//         find: process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find'
//     },
//     review: {
//         createDemo: process.env.NEXT_PUBLIC_DOMAIN + '/api/review/create-demo',
//     }
// };

export const API = {
    topPage: {
        find: 'https://httpbin.org/post',      // временный тестовый endpoint
        byAlias: 'https://httpbin.org/post',   // тоже временный
    },
    product: {
        find: 'https://httpbin.org/post',      // если используешь — тоже подменён
    },
    review: {
        createDemo: 'https://httpbin.org/post' // временный, если используешь
    }
};
