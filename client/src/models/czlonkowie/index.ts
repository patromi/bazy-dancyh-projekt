import { type ResourceProps } from "@refinedev/core";
import CzlonkowieCreate from "./CzlonkowieCreate";
import CzlonkowieList from "./CzlonkowieList";
import CzlonkowieShow from "./CzlonkowieShow";
import CzlonkowieUpdate from "./CzlonkowieUpdate";

const resourceCzlonkowie: ResourceProps = {
  name: "czlonkowie",
  list: "/czlonkowie",
  create: "/czlonkowie/create",
  show: "/czlonkowie/:id",
  edit: "/czlonkowie/:id",
};

export default {
  CzlonkowieCreate,
  CzlonkowieList,
  CzlonkowieShow,
  CzlonkowieUpdate,
  resourceCzlonkowie,
};
