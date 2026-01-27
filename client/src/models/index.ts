import { type ResourceProps } from "@refinedev/core";
import Budynki from "./budynki";
import Czlonkowie from "./czlonkowie";
import Organizacje from "./organizacje";
import Opiekunowie from "./opiekunowie";
import Pokoje from "./pokoje";
import Projekty from "./projekty";
import Role from "./role";
import Sekcje from "./sekcje";
import Uczelnie from "./uczelnie";
import Wydarzenia from "./wydarzenia";
import Wydzialy from "./wydzialy";
import type { InDrawerProps } from "@/components/CrudComponents";

export type ResourcesComponents = {
  create: React.FC;
  list: React.FC;
  show: React.FC<InDrawerProps>;
  update: React.FC<InDrawerProps>;
};

export type Model = {
  resource: ResourceProps;
  components: ResourcesComponents;
};

export const models: Model[] = [
  Budynki,
  Czlonkowie,
  Organizacje,
  Opiekunowie,
  Pokoje,
  Projekty,
  Role,
  Sekcje,
  Uczelnie,
  Wydarzenia,
  Wydzialy,
] as const;

export const resources: ResourceProps[] = models.map((model) => model.resource);

// export const components: ResourcesComponents[] = [Budynki.components];
