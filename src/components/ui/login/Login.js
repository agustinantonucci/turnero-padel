import { Button, Form, Input } from "antd";
import { useHistory } from "react-router-dom";
import "./login.css";

export const Login = () => {

  const history = useHistory();
  return (
    <div className="fondo-login">
      <div className="contenedor-login">
        <Form size="large">
            <Form.Item name="usuario">
                <input placeholder="Usuario" />
            </Form.Item>
            <Form.Item name="password">
                <input placeholder="Contraseña" />
            </Form.Item>
            <Form.Item name="boton">
                <Button style={{width:"100%", backgroundColor:"white", color: "rgba(8,91,208,1)", borderRadius: "4px"}} type="primary" onClick={() => history.push("/agenda")}>Ingresar</Button>
            </Form.Item>
        </Form>
      </div>
    </div>
  );
};
