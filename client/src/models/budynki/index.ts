import { type ResourceProps } from "@refinedev/core";
import BudynkiCreate from "./BudynkiCreate";
import BudynkiList from "./BudynkiList";
import BudynkiShow from "./BudynkiShow";
import BudynkiUpdate from "./BudynkiUpdate";

const resourceBudynki: ResourceProps = {
  name: "budynki",
  list: "/budynki",
  create: "/budynki/create",
  show: "/budynki/:id",
  edit: "/budynki/:id",
};

export default {
  BudynkiCreate,
  BudynkiList,
  BudynkiShow,
  BudynkiUpdate,
  resourceBudynki,
};
