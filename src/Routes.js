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
import GifteesPage from "./pages/Giftees";
import ListsPage from "./pages/Lists";

// COMPONENTS


export const Routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="years" element={<YearsPage />}>
        <Route path=":id" element={<h1>year details</h1>}></Route>
      </Route>

        {/* <Route index element={<HomePage />} /> */}

      <Route path="gifts" element={<GiftsPage/>}> 
        <Route path=":id" element={<h1>gift details</h1>}></Route>
      </Route>

      <Route path="giftees" element={<GifteesPage/>}> 
        <Route path=":id" element={<h1>giftee details</h1>}></Route>
      </Route>

      <Route path="lists" element={<ListsPage/>}> 
        <Route path=":id" element={<h1>list details</h1>}></Route>
      </Route>
        
      <Route path="/" element={<App />}></Route>     
    </>
  )
);
