import { Agenda } from "../components/ui/agenda/Agenda";
import { MainLayout } from "../components/ui/MainLayout/MainLayout";

export const AgendaView = () => {
  return (
    <MainLayout seccion="agenda">
      <Agenda />
    </MainLayout>
  );
};
