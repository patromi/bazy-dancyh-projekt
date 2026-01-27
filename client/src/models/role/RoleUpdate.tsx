import type { InDrawerProps } from "@/components/CrudComponents";
import UpdateComponent from "@/components/CrudComponents/UpdateComponent";
import type { IRole, IRoleForm } from "@/types";
import RoleForm from "./RoleForm";

export default function RoleUpdate(props: InDrawerProps) {
  return (
    <UpdateComponent<IRole, IRoleForm> {...props} renderChildren={RoleForm} />
  );
}
