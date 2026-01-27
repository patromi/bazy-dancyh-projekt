import CreateComponent from "@/components/CrudComponents/CreateComponent";
import type { ISekcja, ISekcjaForm } from "@/types";
import SekcjeForm from "./SekcjeForm";

export default function SekcjeCreate() {
  return (
    <CreateComponent<ISekcja, ISekcjaForm>
      resource="sekcje"
      renderChildren={SekcjeForm}
    />
  );
}
