import { type ResourceProps } from "@refinedev/core";
import OpiekunowieCreate from "./OpiekunowieCreate";
import OpiekunowieList from "./OpiekunowieList";
import OpiekunowieShow from "./OpiekunowieShow";
import OpiekunowieUpdate from "./OpiekunowieUpdate";

const resourceOpiekunowie: ResourceProps = {
  name: "opiekunowie",
  list: "/opiekunowie",
  create: "/opiekunowie/create",
  show: "/opiekunowie/:id",
  edit: "/opiekunowie/:id/edit",
};

export default {
  components: {
    create: OpiekunowieCreate,
    list: OpiekunowieList,
    show: OpiekunowieShow,
    update: OpiekunowieUpdate,
  },

  resource: resourceOpiekunowie,
};
