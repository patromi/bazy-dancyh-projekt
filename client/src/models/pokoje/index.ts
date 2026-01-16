import { type ResourceProps } from "@refinedev/core";
import PokojeCreate from "./PokojeCreate";
import PokojeList from "./PokojeList";
import PokojeShow from "./PokojeShow";
import PokojeUpdate from "./PokojeUpdate";

const resourcePokoje: ResourceProps = {
  name: "pokoje",
  list: "/pokoje",
  create: "/pokoje/create",
  show: "/pokoje/:id",
  edit: "/pokoje/:id",
};

export default {
  components: {
    create: PokojeCreate,
    list: PokojeList,
    show: PokojeShow,
    update: PokojeUpdate,
  },
  resource: resourcePokoje,
};
