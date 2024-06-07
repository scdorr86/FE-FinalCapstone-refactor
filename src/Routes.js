import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";


// PAGES
//import HomePage from "./pages/Home";
import YearsPage from "./pages/Years";
import App from "./App";
import GiftsPage from "./pages/Gifts";

// COMPONENTS


export const Routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="years" element={<YearsPage />} />
        {/* <Route index element={<HomePage />} /> */}
      <Route path="gifts" element={<GiftsPage/>}> 
        <Route path=":id" element={<h1>details</h1>}></Route>
      </Route>
        
      <Route path="/" element={<App />}></Route>     
    </>
  )
);
