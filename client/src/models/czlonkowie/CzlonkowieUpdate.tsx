import type { InDrawerProps } from "@/components/CrudComponents";
import UpdateComponent from "@/components/CrudComponents/UpdateComponent";
import type { ICzlonkowie, ICzlonkowieForm } from "@/types";
import CzlonkowieForm from "./CzlonkowieForm";

export default function CzlonkowieUpdate(props: InDrawerProps) {
  return (
    <UpdateComponent<ICzlonkowie, ICzlonkowieForm>
      {...props}
      renderChildren={CzlonkowieForm}
    />
  );
}
