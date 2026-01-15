import { Refine, type I18nProvider } from "@refinedev/core";
import routerProvider from "@refinedev/react-router";
import { BrowserRouter, Route, Routes } from "react-router";

import { dataProvider } from "@/rest-data-provider";
import "./index.css";

import Budynki from "@/models/budynki";
import Pokoje from "@/models/pokoje";
import Uczelnie from "@/models/uczelnie";
import Czlonkowie from "@/models/czlonkowie";
import Projekty from "@/models/projekty";
import Wydarzenia from "@/models/wydarzenia";
import Opiekunowie from "@/models/opiekunowie";
import Role from "@/models/role";
import Wydzialy from "@/models/wydzialy";
import Organizacje from "@/models/organizacje";
import Sekcje from "@/models/sekcje";
import Index from "./pages/index";
import { useTranslation } from "react-i18next";

import "@/i18n";

export default function App() {
  const { t, i18n } = useTranslation();

  const i18nProvider: I18nProvider = {
    translate: (key: string, params?: any) => String(t(key, params)),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <BrowserRouter>
      <Refine
        dataProvider={dataProvider("http://localhost:8000/api")}
        routerProvider={routerProvider}
        i18nProvider={i18nProvider}
        resources={[
          Organizacje.resourceOrganizacje,
          Sekcje.resourceSekcje,
          Opiekunowie.resourceOpiekunowie,
          Wydzialy.resourceWydzialy,
          Uczelnie.resourceUczelnie,
          Budynki.resourceBudynki,
          Pokoje.resourcePokoje,
          Czlonkowie.resourceCzlonkowie,
          Projekty.resourceProjekty,
          Wydarzenia.resourceWydarzenia,
          Role.resourceRole,
        ]}
      >
        <Routes>
          <Route path="/">
            <Route index element={<Index />} />

            <Route path="organizacje">
              <Route index element={<Organizacje.OrganizacjeList />} />
              <Route
                path="create"
                element={<Organizacje.OrganizacjeCreate />}
              />
              <Route path=":id" element={<Organizacje.OrganizacjeShow />} />
              <Route
                path=":id/edit"
                element={<Organizacje.OrganizacjeUpdate />}
              />
            </Route>

            <Route path="opiekunowie">
              <Route index element={<Opiekunowie.OpiekunowieList />} />
              <Route
                path="create"
                element={<Opiekunowie.OpiekunowieCreate />}
              />
              <Route path=":id" element={<Opiekunowie.OpiekunowieShow />} />
              <Route
                path=":id/edit"
                element={<Opiekunowie.OpiekunowieUpdate />}
              />
            </Route>

            <Route path="wydzialy">
              <Route index element={<Wydzialy.WydzialyList />} />
              <Route path="create" element={<Wydzialy.WydzialyCreate />} />
              <Route path=":id" element={<Wydzialy.WydzialyShow />} />
              <Route path=":id/edit" element={<Wydzialy.WydzialyUpdate />} />
            </Route>

            <Route path="uczelnie">
              <Route index element={<Uczelnie.UczelnieList />} />
              <Route path="create" element={<Uczelnie.UczelnieCreate />} />
              <Route path=":id" element={<Uczelnie.UczelnieShow />} />
              <Route path=":id/edit" element={<Uczelnie.UczelnieUpdate />} />
            </Route>

            <Route path="budynki">
              <Route index element={<Budynki.BudynkiList />} />
              <Route path="create" element={<Budynki.BudynkiCreate />} />
              <Route path=":id" element={<Budynki.BudynkiShow />} />
              <Route path=":id/edit" element={<Budynki.BudynkiUpdate />} />
            </Route>

            <Route path="pokoje">
              <Route index element={<Pokoje.PokojeList />} />
              <Route path="create" element={<Pokoje.PokojeCreate />} />
              <Route path=":id" element={<Pokoje.PokojeShow />} />
              <Route path=":id/edit" element={<Pokoje.PokojeUpdate />} />
            </Route>

            <Route path="czlonkowie">
              <Route index element={<Czlonkowie.CzlonkowieList />} />
              <Route path="create" element={<Czlonkowie.CzlonkowieCreate />} />
              <Route path=":id" element={<Czlonkowie.CzlonkowieShow />} />
              <Route
                path=":id/edit"
                element={<Czlonkowie.CzlonkowieUpdate />}
              />
            </Route>

            <Route path="projekty">
              <Route index element={<Projekty.ProjektyList />} />
              <Route path="create" element={<Projekty.ProjektyCreate />} />
              <Route path=":id" element={<Projekty.ProjektyShow />} />
              <Route path=":id/edit" element={<Projekty.ProjektyUpdate />} />
            </Route>

            <Route path="wydarzenia">
              <Route index element={<Wydarzenia.WydarzeniaList />} />
              <Route path="create" element={<Wydarzenia.WydarzeniaCreate />} />
              <Route path=":id" element={<Wydarzenia.WydarzeniaShow />} />
              <Route
                path=":id/edit"
                element={<Wydarzenia.WydarzeniaUpdate />}
              />
            </Route>

            <Route path="role">
              <Route index element={<Role.RoleList />} />
              <Route path="create" element={<Role.RoleCreate />} />
              <Route path=":id" element={<Role.RoleShow />} />
              <Route path=":id/edit" element={<Role.RoleUpdate />} />
            </Route>

            <Route path="sekcje">
              <Route index element={<Sekcje.SekcjeList />} />
              <Route path="create" element={<Sekcje.SekcjeCreate />} />
              <Route path=":id" element={<Sekcje.SekcjeShow />} />
              <Route path=":id/edit" element={<Sekcje.SekcjeUpdate />} />
            </Route>
          </Route>
        </Routes>
      </Refine>
    </BrowserRouter>
  );
}
