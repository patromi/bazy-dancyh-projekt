import CreateComponent from "@/components/CrudComponents/CreateComponent";
import type { IRole, IRoleForm } from "@/types";
import RoleForm from "./RoleForm";

export default function RoleCreate() {
  return (
    <CreateComponent<IRole, IRoleForm>
      resource="role"
      renderChildren={RoleForm}
    />
  );
}
