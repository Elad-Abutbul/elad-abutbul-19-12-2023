import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("../../pages/Home"));
const Favorites = lazy(() => import("../../pages/Favorites"));
const NotFound = lazy(() => import("../../pages/NotFound"));
import { Loading } from "../Loading";
import { ROUTES_URLS } from "../../constants";

export const AppRouter = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={ROUTES_URLS.HOME} element={<Home />} />
        <Route path={ROUTES_URLS.FAVORITES} element={<Favorites />} />
        <Route path={ROUTES_URLS.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
