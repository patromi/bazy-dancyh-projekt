import CreateComponent from "@/components/CrudComponents/CreateComponent";
import OpiekunowieForm from "./OpiekunowieForm";

export default function OpiekunowieCreate() {
  return (
    <CreateComponent resource="opiekunowie" renderChildren={OpiekunowieForm} />
  );
}
