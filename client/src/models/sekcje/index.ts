import { type ResourceProps } from "@refinedev/core";
import SekcjeCreate from "./SekcjeCreate";
import SekcjeList from "./SekcjeList";
import SekcjeShow from "./SekcjeShow";
import SekcjeUpdate from "./SekcjeUpdate";

const resourceSekcje: ResourceProps = {
  name: "sekcje",
  list: "/sekcje",
  create: "/sekcje/create",
  show: "/sekcje/:id",
  edit: "/sekcje/:id",
  meta: {
    parent: "organizacje",
  },
};

export default {
  components: {
    create: SekcjeCreate,
    list: SekcjeList,
    show: SekcjeShow,
    update: SekcjeUpdate,
  },
  resource: resourceSekcje,
};
