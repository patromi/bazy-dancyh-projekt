import type { InDrawerProps } from "@/components/CrudComponents";
import UpdateComponent from "@/components/CrudComponents/UpdateComponent";
import type { IOrganizacja, IOrganizacjaForm } from "@/types";
import OrganizacjeForm from "./OrganizacjeForm";

export default function OrganizacjeUpdate(props: InDrawerProps) {
  return (
    <UpdateComponent<IOrganizacja, IOrganizacjaForm>
      {...props}
      renderChildren={OrganizacjeForm}
    />
  );
}
