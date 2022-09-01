import {
  LogoutOutlined,
  ScheduleOutlined,
  SettingOutlined,
  UserOutlined,
  UserSwitchOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import "./mainLayout.css";


export const MainLayout = ({ children, seccion = "" }) => {
  const history = useHistory();

  const handleClick = (ambito) => {
    switch (ambito) {
      case "agenda":
        history.push("/agenda");
        break;
      case "clientes":
        history.push("/clientes");
        break;
      case "profesores":
        history.push("/profesores");
        break;
      case "canchas":
        history.push("/canchas");
        break;
      case "configuracion":
        history.push("/configuracion");
        break;
      case "logout":
        history.push("/");
      default:
        break;
    }
  };

  return (
    <div className="contenedor-principal">
      <div className="header-principal">
        <p className="titulo-principal">Matcher</p>
        <div className="botones-header">
          <p className="usuario-nombre">Agustin</p>
          <LogoutOutlined className="logo-header" onClick={() => handleClick("logout")}/>
        </div>
      </div>
      <div className="contenedor-menu-contenido">
        <div className="menu-lateral">
          <div className="caja-menu">
            <div
              className={
                seccion === "agenda" ? "item-menu activo" : "item-menu"
              }
              onClick={() => handleClick("agenda")}
            >
              <ScheduleOutlined style={{ marginLeft:"10px", marginRight: "8px" }} />
              <p>Agenda</p>
            </div>
            <div
              className={
                seccion === "clientes" ? "item-menu activo" : "item-menu"
              }
              onClick={() => handleClick("clientes")}
            >
              <UserOutlined style={{ marginLeft:"10px", marginRight: "8px" }} />
              <p>Clientes</p>
            </div>
            <div
              className={
                seccion === "profesores" ? "item-menu activo" : "item-menu"
              }
              onClick={() => handleClick("profesores")}
            >
              <UserSwitchOutlined style={{ marginLeft:"10px", marginRight: "8px" }} />
              <p>Profesores</p>
            </div>
            <div
              className={
                seccion === "canchas" ? "item-menu activo" : "item-menu"
              }
              onClick={() => handleClick("canchas")}
            >
              <WalletOutlined style={{ marginLeft:"10px", marginRight: "8px" }} />
              <p>Canchas</p>
            </div>
            <div
              className={
                seccion === "configuracion" ? "item-menu activo" : "item-menu"
              }
              onClick={() => handleClick("configuracion")}
            >
              <SettingOutlined style={{ marginLeft:"10px", marginRight: "8px" }} />
              <p>Configuración</p>
            </div>
          </div>
        </div>
        <div className="main-contenido">{children}</div>
      </div>
    </div>
  );
};
