import type { InDrawerProps } from "@/components/CrudComponents";
import UpdateComponent from "@/components/CrudComponents/UpdateComponent";
import type { IOpiekunowie, IOpiekunowieForm } from "@/types";
import OpiekunowieForm from "./OpiekunowieForm";

export default function OpiekunowieUpdate(props: InDrawerProps) {
  return (
    <UpdateComponent<IOpiekunowie, IOpiekunowieForm>
      {...props}
      renderChildren={OpiekunowieForm}
    />
  );
}
