import CreateComponent from "@/components/CrudComponents/CreateComponent";
import WydzialyForm from "./WydzialyForm";

export default function WydzialyCreate() {
  return <CreateComponent resource="wydzialy" renderChildren={WydzialyForm} />;
}
