import type { InDrawerProps } from "@/components/CrudComponents";
import UpdateComponent from "@/components/CrudComponents/UpdateComponent";
import type { IBudynki, IBudynkiForm } from "@/types";
import BudynkiForm from "./BudynkiForm";

export default function BudynkiUpdate(props: InDrawerProps) {
  return (
    <UpdateComponent<IBudynki, IBudynkiForm>
      {...props}
      resource="budynki"
      renderChildren={BudynkiForm}
    />
  );
}
