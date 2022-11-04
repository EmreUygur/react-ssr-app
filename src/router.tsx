import MainPage from './views/main';
import AboutPage from './views/about';
export interface AppRoute {
  component: any;
  path: string;
}

const routes: Array<AppRoute> = [
  { component: MainPage, path: '/' },
  { component: AboutPage, path: '/about' },
];

export default routes;
