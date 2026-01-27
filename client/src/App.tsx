import { Refine, type I18nProvider, type CrudFilters } from "@refinedev/core";
import routerProvider from "@refinedev/react-router";
import { BrowserRouter, Route, Routes, useParams } from "react-router";
import {
  useNotificationProvider,
  RefineSnackbarProvider,
} from "@refinedev/mui";

import { dataProvider } from "@/rest-data-provider";
import "./index.css";

import { useTranslation } from "react-i18next";
import Index from "./pages/index";

import "@/i18n";
import React from "react";
import Sidebar from "./layout/Sidebar";
import { models, resources } from "./models";

const FilteredResource = ({
  resource,
  field,
  paramName,
}: {
  resource: string;
  field: string;
  paramName: string;
}) => {
  const params = useParams();
  const value = params[paramName];

  const filters: CrudFilters = [
    {
      field: field,
      operator: "eq",
      value: value,
    },
  ];

  const model = models.find((m) => m.resource.name === resource);
  if (!model) return null;

  const Component = model.components.list as React.FC<{
    initialFilters?: CrudFilters;
  }>;

  return <Component initialFilters={filters} />;
};

export default function App() {
  const { t, i18n } = useTranslation();

  const i18nProvider: I18nProvider = {
    translate: (key: string, params?: any) => String(t(key, params)),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <BrowserRouter>
      <RefineSnackbarProvider>
        <Refine
          dataProvider={dataProvider("http://localhost:8000/api")}
          routerProvider={routerProvider}
          i18nProvider={i18nProvider}
          resources={resources}
          notificationProvider={useNotificationProvider}
        >
          <Sidebar>
            <Routes>
              <Route path="/">
                <Route index element={<Index />} />

                {/* Logical Access Routes */}
                <Route
                  path="uczelnie/:uczelniaId/budynki"
                  element={
                    <FilteredResource
                      resource="budynki"
                      field="uczelnia"
                      paramName="uczelniaId"
                    />
                  }
                />
                <Route
                  path="uczelnie/:uczelniaId/wydzialy"
                  element={
                    <FilteredResource
                      resource="wydzialy"
                      field="uczelnia"
                      paramName="uczelniaId"
                    />
                  }
                />
                <Route
                  path="budynki/:budynekId/pokoje"
                  element={
                    <FilteredResource
                      resource="pokoje"
                      field="budynek"
                      paramName="budynekId"
                    />
                  }
                />
                <Route
                  path="wydzialy/:wydzialId/organizacje"
                  element={
                    <FilteredResource
                      resource="organizacje"
                      field="wydzial"
                      paramName="wydzialId"
                    />
                  }
                />
                <Route
                  path="organizacje/:organizacjaId/projekty"
                  element={
                    <FilteredResource
                      resource="projekty"
                      field="organizacja"
                      paramName="organizacjaId"
                    />
                  }
                />
                <Route
                  path="organizacje/:organizacjaId/wydarzenia"
                  element={
                    <FilteredResource
                      resource="wydarzenia"
                      field="organizacja"
                      paramName="organizacjaId"
                    />
                  }
                />
                <Route
                  path="organizacje/:organizacjaId/sekcje"
                  element={
                    <FilteredResource
                      resource="sekcje"
                      field="organizacja"
                      paramName="organizacjaId"
                    />
                  }
                />
                <Route
                  path="sekcje/:sekcjaId/role"
                  element={
                    <FilteredResource
                      resource="role"
                      field="sekcja"
                      paramName="sekcjaId"
                    />
                  }
                />

                {models.map(({ resource, components }) => (
                  <Route key={resource.name} path={resource.name}>
                    <Route
                      index
                      element={React.createElement(components.list)}
                    />
                    <Route
                      path="create"
                      element={React.createElement(components.create)}
                    />
                    <Route
                      path=":id"
                      element={React.createElement(components.show)}
                    />
                    <Route
                      path=":id/edit"
                      element={React.createElement(components.update)}
                    />
                  </Route>
                ))}
              </Route>
            </Routes>
          </Sidebar>
        </Refine>
      </RefineSnackbarProvider>
    </BrowserRouter>
  );
}
