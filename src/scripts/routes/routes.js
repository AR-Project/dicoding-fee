import Detail from '../views/pages/Details';
import Favorite from '../views/pages/Favorite';
import Home from '../views/pages/Home';
import RandomFood from '../views/pages/RandomFood';

const routes = {
  '/': Home,
  '/random-food': RandomFood,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
