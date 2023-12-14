import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loading } from "../Loading";
const Home = lazy(() => import("../../pages/Home"));
const Favorites = lazy(() => import("../../pages/Favorites"));
const NotFound = lazy(() => import("../../pages/NotFound"));

export const AppRouter = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/favorites'} element={<Favorites />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </Suspense>
</BrowserRouter>
);
