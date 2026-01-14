import { type ResourceProps } from "@refinedev/core";
import UczelnieCreate from "./UczelnieCreate";
import UczelnieList from "./UczelnieList";
import UczelnieShow from "./UczelnieShow";
import UczelnieUpdate from "./UczelnieUpdate";

export const resourceUczelnie: ResourceProps = {
  name: "uczelnie",
  list: "/uczelnie",
  create: "/uczelnie/create",
  show: "/uczelnie/:id",
  edit: "/uczelnie/:id",
};

export default {
  UczelnieCreate,
  UczelnieList,
  UczelnieShow,
  UczelnieUpdate,
  resourceUczelnie,
};
