import { Refine } from "@refinedev/core";
import routerProvider from "@refinedev/react-router";
import dataProvider from "@refinedev/simple-rest";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";

import Index from "./pages/index/index.tsx";
import { OrganizacjeList, OrganizacjeCreate } from "./pages/organizacje";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Refine
        dataProvider={dataProvider("http://localhost:8000/api")}
        routerProvider={routerProvider}
        resources={[
          {
            name: "organizacje",
            list: "/organizacje",
            create: "/organizacje/create",
          },
        ]}
      >
        <Routes>
          <Route path="/">
            <Route index element={<Index />} />
            <Route path="organizacje">
              <Route index element={<OrganizacjeList />} />
              <Route path="create" element={<OrganizacjeCreate />} />
            </Route>

            {/* <Route path="wydarzenia" element={<WydarzeniaPage />} /> */}
            {/* <Route path="projekty" element={<ProjektyPage />} /> */}
          </Route>
        </Routes>
      </Refine>
    </BrowserRouter>
  </StrictMode>,
);
