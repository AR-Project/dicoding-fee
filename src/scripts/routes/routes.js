import Detail from "../views/pages/Details";
import Home from "../views/pages/Home";
import RandomFood from "../views/pages/RandomFood";

const routes = {
  '/': Home,
  '/random-food': RandomFood,
  '/detail/:id': Detail,
}

export default routes;
