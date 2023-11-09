import React, { useContext } from "react";
import Nav from "./components/nav";
import Main from "./components/main";
import { UserContext } from "./Context/userContext";
import { Toaster } from "react-hot-toast";
import Profile from "./pages/profile";
import RegisterForm from "./pages/register";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const { user, getUser } = useContext(UserContext);
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Main>
        {!!user ? <Profile user={user} /> : <RegisterForm refresh={getUser} />}
      </Main>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
    </BrowserRouter>
  );
};

export default App;
