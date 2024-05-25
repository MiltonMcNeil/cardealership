import { Dashboard } from '../pages/Dashboard.tsx'
import  HomePage from '../pages/HomePage.tsx'
import Login from '../pages/Login.tsx'


interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
      path: "",
      component: HomePage,
      name: "HomePage",
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
    },
    {
      path: "/login",
      component: Login,
      name: "Login",
    },
    
];

export default routes