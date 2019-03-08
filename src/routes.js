import React from 'react';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import HomePage from './pages/HomePage/HomePage';
import ListUser from './components/listUser/ListUser';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <HomePage />
    },
    {
        path : '/list-user',
        exact: false,
        main : () => <ListUser />
    },
    {
        path : '',
        exact : false,
        main : () => <NotFoundPage />
    }

]
export default routes;