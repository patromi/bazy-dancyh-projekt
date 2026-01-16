import { type ResourceProps } from "@refinedev/core";
import RoleCreate from "./RoleCreate";
import RoleList from "./RoleList";
import RoleShow from "./RoleShow";
import RoleUpdate from "./RoleUpdate";

const resourceRole: ResourceProps = {
  name: "role",
  list: "/role",
  create: "/role/create",
  show: "/role/:id",
  edit: "/role/:id",
};

export default {
  components: {
    create: RoleCreate,
    list: RoleList,
    show: RoleShow,
    update: RoleUpdate,
  },
  resource: resourceRole,
};
