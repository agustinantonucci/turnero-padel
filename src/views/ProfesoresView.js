import { MainLayout } from "../components/ui/MainLayout/MainLayout";
import { Profesores } from "../components/ui/profesores/Profesores";

export const ProfesoresView = () => {
  return (
    <MainLayout seccion="profesores">
      <Profesores />
    </MainLayout>
  );
};
