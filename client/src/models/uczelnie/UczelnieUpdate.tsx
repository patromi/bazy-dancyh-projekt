import type { InDrawerProps } from "@/components/CrudComponents";
import UpdateComponent from "@/components/CrudComponents/UpdateComponent";
import type { IUczelnie, IUczelnieForm } from "@/types";
import UczelnieForm from "./UczelnieForm";

export default function UczelnieUpdate(props: InDrawerProps) {
  return (
    <UpdateComponent<IUczelnie, IUczelnieForm>
      {...props}
      renderChildren={UczelnieForm}
    />
  );
}
