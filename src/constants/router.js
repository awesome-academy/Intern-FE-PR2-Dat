import Home from 'features/Home';
import React from 'react';

const Products = React.lazy(() => import('features/Products/Products'));
const BLogs = React.lazy(() => import('features/Blogs/Blogs'));
const Contact = React.lazy(() => import('features/Contact/Contact'));

const ROUTER = [
    {
        path: '/',
        component: <Home />,
        title: 'Trang chủ',
        isExact: true,
    },
    {
        path: '/products',
        component: <Products />,
        title: 'Sản phẩm',
        isExact: false,
    },
    {
        path: '/blogs',
        component: <BLogs />,
        title: 'Chia sẻ',
        isExact: false,
    },
    {
        path: '/contact',
        component: <Contact />,
        title: 'Liên hệ',
        isExact: false,
    },
];

export default ROUTER;
