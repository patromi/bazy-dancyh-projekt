import type { InDrawerProps } from "@/components/CrudComponents";
import UpdateComponent from "@/components/CrudComponents/UpdateComponent";
import type { ISekcja, ISekcjaForm } from "@/types";
import SekcjeForm from "./SekcjeForm";

export default function SekcjeUpdate(props: InDrawerProps) {
  return (
    <UpdateComponent<ISekcja, ISekcjaForm>
      {...props}
      renderChildren={SekcjeForm}
    />
  );
}
