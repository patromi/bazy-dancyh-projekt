import CreateComponent from "@/components/CrudComponents/CreateComponent";
import BudynkiForm from "./BudynkiForm";

export default function BudynkiCreate() {
  return <CreateComponent resource="budynki" renderChildren={BudynkiForm} />;
}
