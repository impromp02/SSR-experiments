import HomePage from './pages/HomePage';
import UsersListPage, { loadData as usersLoadData } from './pages/UsersListPage';
import App, { loadData as appLoadData } from './App';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage, { loadData as adminsLoadData } from './pages/AdminsListPage';

export default [
  {
    component: App,
    loadData: appLoadData,
    routes: [
      {
        path: '/',
        component: HomePage,
        exact: true
      },
      {
        path: '/users',
        component: UsersListPage,
        loadData: usersLoadData
      },
      {
        path: '/admins',
        component: AdminsListPage,
        loadData: adminsLoadData
      },
      {
        component: NotFoundPage
      }
    ]
  }  
];