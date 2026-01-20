import { type ResourceProps } from "@refinedev/core";
import ProjektyCreate from "./ProjektyCreate";
import ProjektyList from "./ProjektyList";
import ProjektyShow from "./ProjektyShow";
import ProjektyUpdate from "./ProjektyUpdate";

const resourceProjekty: ResourceProps = {
  name: "projekty",
  list: "/projekty",
  create: "/projekty/create",
  show: "/projekty/:id",
  edit: "/projekty/:id",
  meta: {
    parent: "organizacje",
  },
};

export default {
  components: {
    create: ProjektyCreate,
    list: ProjektyList,
    show: ProjektyShow,
    update: ProjektyUpdate,
  },
  resource: resourceProjekty,
};
