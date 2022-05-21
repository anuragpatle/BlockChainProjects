import {
  Navbar,
  Welcome,
  Footer,
  Services,
  Transactions,
  ConfirmDelivery,
  DispatchForm
} from "./components";
import { Routes, Route, Link } from "react-router-dom";

const App = () => (
  <>
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>




      <Routes>
        {/* <Route index element={<ConfirmDelivery />} /> */}
        <Route path="" element={<Services />} />
        <Route path="" element={<Transactions />} />


        <Route path="ConfirmDelivery" element={<ConfirmDelivery />} />
      </Routes>

      <Footer />
    </div>

    {/* Nested routing example */}
    {/* Index=? : we have a so called Index Route loaded with the Home component and a so called No Match Route loaded with the NoMatch component. Both act as fallback routes.  */}
    {/* <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="user" element={<User />}>
        <Route path="profile" element={<Profile />} />
        <Route path="account" element={<Account />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes> */}
  </>
);

export default App;
