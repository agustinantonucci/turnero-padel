import { Clientes } from "../components/ui/clientes/Clientes";
import { MainLayout } from "../components/ui/MainLayout/MainLayout";

export const ClientesView = () => {
  return (
    <MainLayout seccion="clientes">
      <Clientes />
    </MainLayout>
  );
};
