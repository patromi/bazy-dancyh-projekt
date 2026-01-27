import type { InDrawerProps } from "@/components/CrudComponents";
import UpdateComponent from "@/components/CrudComponents/UpdateComponent";
import type { IPokoje, IPokojeForm } from "@/types";
import PokojeForm from "./PokojeForm";

export default function PokojeUpdate(props: InDrawerProps) {
  return (
    <UpdateComponent<IPokoje, IPokojeForm>
      {...props}
      renderChildren={PokojeForm}
    />
  );
}
