import CreateComponent from "@/components/CrudComponents/CreateComponent";
import UczelnieForm from "./UczelnieForm";

export default function UczelnieCreate() {
  return <CreateComponent resource="uczelnie" renderChildren={UczelnieForm} />;
}
