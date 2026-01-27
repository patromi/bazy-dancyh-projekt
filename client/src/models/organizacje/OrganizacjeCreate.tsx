import CreateComponent from "@/components/CrudComponents/CreateComponent";
import type { IOrganizacja, IOrganizacjaForm } from "@/types";
import OrganizacjeForm from "./OrganizacjeForm";

export default function OrganizacjeCreate() {
  return (
    <CreateComponent<IOrganizacja, IOrganizacjaForm>
      resource="organizacje"
      renderChildren={OrganizacjeForm}
    />
  );
}
