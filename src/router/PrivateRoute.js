import { Route, useLocation } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  const location = useLocation();

  return (
    <>
      <Route {...rest}>
        <Component />
      </Route>
    </>
  );
}
