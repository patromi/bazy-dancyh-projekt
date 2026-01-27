import CreateComponent from "@/components/CrudComponents/CreateComponent";
import CzlonkowieForm from "./CzlonkowieForm";

export default function CzlonkowieCreate() {
  return (
    <CreateComponent resource="czlonkowie" renderChildren={CzlonkowieForm} />
  );
}
