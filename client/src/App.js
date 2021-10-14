import './App.css';
import { BrowserRouter as Router, Route, Redirect ,Switch} from "react-router-dom";
import { Foodie } from './Users/Pages/Foodie';
import { Restaurant } from './Users/Pages/Restaurant';
import { Admin } from './Users/Pages/Admin';
import { Driver } from './Users/Pages/Driver';
import { Registration } from './Users/Components/Registration';
import { AdminHome } from './Users/Pages/AdminHome';
import { RestaurantHome } from './Users/Pages/RestaurantHome';
import { DriverHome } from './Users/Pages/DriverHome';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact>
        <Foodie />
     
      </Route>
      <Route path="/restaurant" exact>
        <Restaurant />
      </Route>
      <Route path="/restaurant/:R_id/orders" exact>
        <RestaurantHome />
      </Route>
      <Route path="/driver" exact>
        <Driver />
      </Route>
      <Route path="/driver/u1/orders" exact>
        <DriverHome />
      </Route>
      <Route path="/admin" exact>
        <Admin />
      </Route>
      <Route path="/admin/home" exact>
        <AdminHome home= {true}/>
      </Route>
      <Route path="/foodieRegistration" exact>
        <Registration foodie={true} restaurant={false} driver={false} name="Foodie" loginPage="" />
      </Route>
      <Route path="/restaurantRegistration" exact>
        <Registration foodie={false}  restaurant={true} driver={false} name="Restaurant" loginPage="restaurant" />
      </Route>
      <Route path="/driverRegistration" exact>
        <Registration foodie={false}  restaurant={false} driver={true} name="Driver" loginPage="driver" />
      </Route>
      <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
