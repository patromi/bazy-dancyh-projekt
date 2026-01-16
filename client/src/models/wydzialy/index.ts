import { type ResourceProps } from "@refinedev/core";
import WydzialyCreate from "./WydzialyCreate";
import WydzialyList from "./WydzialyList";
import WydzialyShow from "./WydzialyShow";
import WydzialyUpdate from "./WydzialyUpdate";

const resourceWydzialy: ResourceProps = {
  name: "wydzialy",
  list: "/wydzialy",
  create: "/wydzialy/create",
  show: "/wydzialy/:id",
  edit: "/wydzialy/:id",
};

export default {
  components: {
    create: WydzialyCreate,
    list: WydzialyList,
    show: WydzialyShow,
    update: WydzialyUpdate,
  },
  resource: resourceWydzialy,
};
