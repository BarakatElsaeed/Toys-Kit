/* eslint-disable no-unused-vars */
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/cart";
import WishList from "./pages/WishList/WishList";
import About from "./pages/About/About";
import Faq from "./pages/Faq/Faq";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import Contact from "./pages/Contact/Contact";
import { $Current_Width } from "./store";
import { $Side_Menu_Index } from "./store";
import { useRecoilState } from "recoil";
import Services from "./pages/Services/Services";
import BackToTopButton from "./components/BackTop/BackTop";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Notlogedin from "./components/protectedRoutes/Notlogedin";
import Islogedin from "./components/protectedRoutes/Islogedin";
import Productview from "./components/Productview/Productview";
import CheckOut from "./pages/ChekOut/CheckOut";
import ScrollToTop from "./components/scrollnav/ScrollToTop";

function App() {
  const [CurrentWidth, setCurrentWidth] = useRecoilState($Current_Width);
  const [SideMenuIndex, setSideMenuIndex] = useRecoilState($Side_Menu_Index);
  window.addEventListener("resize", () => {
    setCurrentWidth(window.innerWidth);
  });

  return (
    <div
      className="App"
      onClick={() => {
        setSideMenuIndex(false);
      }}
    >
      <BrowserRouter>
      <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/">
            <Route index element={  <HomePage />   } />
            <Route path="/shop" element={  <Shop />  } />
            <Route path="/Faq" element={  <Faq />  } />
            <Route path="/about" element={   <About /> } />
            <Route path="/services" element={  <Services />  } />
            <Route path="/contact" element={  <Contact />  } />
            <Route path="/checkout" element={ <Islogedin> <CheckOut /> </Islogedin>    } />
            <Route path="/product-details/:id" element={  <Productview  />  } />
            <Route path="/cart" element={ <Islogedin> <Cart /> </Islogedin> } />
            <Route path="/wishlsit" element={ <Islogedin> <WishList /> </Islogedin> } />
            <Route path="/Login" element={ <Notlogedin> <Login/>  </Notlogedin>   } />
            <Route path="/Register" element={ <Notlogedin> <Register />  </Notlogedin>  } />
            <Route path="*" element={""} />
          </Route>
        </Routes>
        <Footer />
        <BackToTopButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
