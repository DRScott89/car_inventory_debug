import Home from '../pages/Home'
import Inventory from '../pages/Inventory'
import Gallery from '../pages/Gallery'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
    protected: boolean
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
      protected: false
    },
    {
      path: "/inventory",
      component: Inventory,
      name: "Inventory",
      protected: true,
    },
    {
      path: "/gallery",
      component: Gallery,
      name: "Gallery",
      protected: false
    }
];

export default routes