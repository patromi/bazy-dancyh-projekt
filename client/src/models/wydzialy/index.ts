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
  WydzialyCreate,
  WydzialyList,
  WydzialyShow,
  WydzialyUpdate,
  resourceWydzialy,
};
