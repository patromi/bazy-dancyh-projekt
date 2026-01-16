import { type ResourceProps } from "@refinedev/core";
import OrganizacjeCreate from "./OrganizacjeCreate";
import OrganizacjeList from "./OrganizacjeList";
import OrganizacjeShow from "./OrganizacjeShow";
import OrganizacjeUpdate from "./OrganizacjeUpdate";

const resourceOrganizacje: ResourceProps = {
  name: "organizacje",
  list: "/organizacje",
  create: "/organizacje/create",
  show: "/organizacje/:id",
  edit: "/organizacje/:id",
};

export default {
  components: {
    create: OrganizacjeCreate,
    list: OrganizacjeList,
    show: OrganizacjeShow,
    update: OrganizacjeUpdate,
  },
  resource: resourceOrganizacje,
};
