import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PATH_HOME } from "./paths";
const MainLayout = lazy(() => import("../layouts"))
const Homepage = lazy(() => import("../page/Home"))
export default function AppRouters() {
    return (
        <Suspense>
            <Routes>
                <Route>
                   <Route path={PATH_HOME} element={<MainLayout/>}>
                        <Route path={PATH_HOME} element ={<Homepage/>}/>  
                   </Route>
                </Route>
            </Routes>
        </Suspense>
    )
}