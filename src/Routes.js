import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";


// PAGES
//import HomePage from "./pages/Home";
import YearsPage from "./pages/Years";
import App from "./App";

// COMPONENTS


export const Routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="years" element={<YearsPage />} />
        {/* <Route index element={<HomePage />} /> */}
        
      <Route path="/" element={<App />}></Route>     
    </>
  )
);
