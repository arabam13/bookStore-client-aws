import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useUser } from "./lib/customHooks";
import AddBook from "./pages/AddBook/AddBook";
import Book from "./pages/Book/Book";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import UpdateBook from "./pages/updateBook/UpdateBook";
import { APP_ROUTES } from "./utils/constants";

function App() {
  const [user, setUser] = useState(null);
  const { connectedUser } = useUser();

  useEffect(() => {
    setUser(connectedUser);
  }, [connectedUser]);
  return (
    <BrowserRouter>
      <div>
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route index element={<Home />} />
          <Route
            path={APP_ROUTES.SIGN_IN}
            element={<SignIn setUser={setUser} />}
          />
          <Route path={APP_ROUTES.BOOK} element={<Book />} />
          <Route path={APP_ROUTES.UPDATE_BOOK} element={<UpdateBook />} />
          <Route path={APP_ROUTES.ADD_BOOK} element={<AddBook />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
