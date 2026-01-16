import { Refine, type I18nProvider } from "@refinedev/core";
import routerProvider from "@refinedev/react-router";
import { BrowserRouter, Route, Routes } from "react-router";

import { dataProvider } from "@/rest-data-provider";
import "./index.css";

import { useTranslation } from "react-i18next";
import Index from "./pages/index";

import "@/i18n";
import React from "react";
import Sidebar from "./layout/Sidebar";
import { models, resources } from "./models";

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
        resources={resources}
      >
        <Sidebar>
          <Routes>
            <Route path="/">
              <Route index element={<Index />} />

              {models.map(({ resource, components }) => (
                <Route key={resource.name} path={resource.name}>
                  <Route index element={React.createElement(components.list)} />
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
    </BrowserRouter>
  );
}
