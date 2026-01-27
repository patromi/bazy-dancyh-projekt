import CreateComponent from "@/components/CrudComponents/CreateComponent";
import type { IPokoje, IPokojeForm } from "@/types";
import PokojeForm from "./PokojeForm";

export default function PokojeCreate() {
  return (
    <CreateComponent<IPokoje, IPokojeForm>
      resource="pokoje"
      renderChildren={PokojeForm}
    />
  );
}
