import { type ResourceProps } from "@refinedev/core";
import WydarzeniaCreate from "./WydarzeniaCreate";
import WydarzeniaList from "./WydarzeniaList";
import WydarzeniaShow from "./WydarzeniaShow";
import WydarzeniaUpdate from "./WydarzeniaUpdate";

const resourceWydarzenia: ResourceProps = {
  name: "wydarzenia",
  list: "/wydarzenia",
  create: "/wydarzenia/create",
  show: "/wydarzenia/:id",
  edit: "/wydarzenia/:id",
  meta: {
    parent: "organizacje",
  },
};

export default {
  components: {
    create: WydarzeniaCreate,
    list: WydarzeniaList,
    show: WydarzeniaShow,
    update: WydarzeniaUpdate,
  },
  resource: resourceWydarzenia,
};
