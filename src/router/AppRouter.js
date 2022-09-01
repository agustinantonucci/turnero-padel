import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Login } from "../components/ui/login/Login";
import { AgendaView } from "../views/AgendaView";
import { CanchasView } from "../views/CanchasView";
import { ClientesView } from "../views/ClientesView";
import { ConfiguracionView } from "../views/ConfiguracionView";
import { ProfesoresView } from "../views/ProfesoresView";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Login} />
        <PrivateRoute exact path="/agenda" component={AgendaView} />
        <PrivateRoute exact path="/clientes" component={ClientesView} />
        <PrivateRoute exact path="/profesores" component={ProfesoresView} />
        <PrivateRoute exact path="/canchas" component={CanchasView} />
        <PrivateRoute
          exact
          path="/configuracion"
          component={ConfiguracionView}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
