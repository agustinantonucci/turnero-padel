import { DatePicker } from "antd";
import "./agenda.css";
import "moment/locale/es-mx";
import locale from "antd/es/date-picker/locale/es_ES";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import moment from "moment";

export const Agenda = () => {
  const canchas = ["Cancha 1", "Cancha 2", "Cancha 3", "Cancha 4", "Cancha 5"];

  const horarios = [
    {
      horaInicio: "08:00",
      horaFin: "09:00",
    },
    {
      horaInicio: "09:00",
      horaFin: "10:00",
    },
    {
      horaInicio: "10:00",
      horaFin: "11:00",
    },
    {
      horaInicio: "11:00",
      horaFin: "12:00",
    },
    {
      horaInicio: "12:00",
      horaFin: "13:00",
    },
    {
      horaInicio: "13:00",
      horaFin: "14:00",
    },
    {
      horaInicio: "14:00",
      horaFin: "15:00",
    },
    {
      horaInicio: "15:00",
      horaFin: "16:00",
    },
    {
      horaInicio: "16:00",
      horaFin: "17:00",
    },
    {
      horaInicio: "17:00",
      horaFin: "18:00",
    },
    {
      horaInicio: "18:00",
      horaFin: "19:00",
    },
    {
      horaInicio: "19:00",
      horaFin: "20:00",
    },
    {
      horaInicio: "20:00",
      horaFin: "21:00",
    },
    {
      horaInicio: "21:00",
      horaFin: "22:00",
    },
  ];

  const reservas = [
    {
      cancha: "Cancha 1",
      horaInicio: "14:00",
      cliente: "Agustín Antonucci",
      turno: "1 hora sin luz",
    },
    {
      cancha: "Cancha 3",
      horaInicio: "10:00",
      cliente: "Alexis Puello",
      turno: "1 hora sin luz",
    },
    {
      cancha: "Cancha 4",
      horaInicio: "15:00",
      cliente: "Fernando Neyra",
      turno: "1 hora con luz",
    },
    {
      cancha: "Cancha 3",
      horaInicio: "19:00",
      cliente: "Bruno Agonil",
      turno: "1 hora con luz",
    },
    {
      cancha: "Cancha 5",
      horaInicio: "19:00",
      cliente: "Luciano Corbo",
      turno: "1 hora con luz",
    },
  ];

  const [fecha, setFecha] = useState(moment().format("DD/MM/YYYY"));

  useEffect(() => {

  }, [fecha])
  
  const fechaHandler = (date) => {
    setFecha(moment(date).format("DD/MM/YYYY"))
  }

  return (
    <div className="contenedor-agenda">
      <div className="contenedor-fecha-titulo">
        <div className="date-picker-agenda">
          <div className="caja-boton-date-picker">
            <LeftOutlined style={{fontSize:"22px", margin:"8px 8px", color: "#001F73", cursor: "pointer"}}/>
          </div>
          <DatePicker
            format={"DD/MM/YYYY"}
            size="large"
            placement="bottomRight"
            locale={locale}
            onSelect={(v) => fechaHandler(v)}
            defaultValue={moment(fecha, "DD/MM/YYYY")}
          />
          <div className="caja-boton-date-picker">
            <RightOutlined style={{fontSize:"22px", margin:"8px 8px", color: "#001F73", cursor: "pointer"}}/>
          </div>
        </div>
      </div>
      <div className="tabla-agenda">
        <div className="tabla-agenda-horario">
          <p className="titulo-horario">Horario</p>
          {horarios.map((hora) => {
            return (
              <div
                className="caja-horas"
                style={{ height: `${92 / horarios.length}%` }}
              >
                <p>
                  {hora.horaInicio} - {hora.horaFin}
                </p>
              </div>
            );
          })}
        </div>
        {canchas.map((cancha) => {
          return (
            <div
              className="tabla-agenda-columna"
              style={{ width: `${92 / canchas.length}%` }}
            >
              <p className="titulo-horario">{cancha}</p>
              {horarios.map((hora) => {
                let placeholder = null;
                {
                  reservas.map((reserva) => {
                    if (
                      reserva.cancha === cancha &&
                      reserva.horaInicio === hora.horaInicio
                    ) {
                      return (placeholder = reserva);
                    }
                  });
                }
                if (placeholder) {
                  return (
                    <div
                      className="caja-horas color-celda"
                      style={{ height: `${92 / horarios.length}%` }}
                    >
                      <p>{placeholder.cliente}</p>
                    </div>
                  );
                } else {
                  return (
                    <div
                      className="caja-horas"
                      style={{ height: `${92 / horarios.length}%` }}
                    >
                      <p></p>
                    </div>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
