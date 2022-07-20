import {
  Navbar,
  Welcome,
  Footer,
  Services,
  Transactions,
  ConfirmDelivery,
  DispatchForm,
  MessageModal,
} from "./components";
import { Routes, Route, Link } from "react-router-dom";
import RoleAdmin from "./components/RoleAdmin";
import SelectRole from "./components/SelectRole";

// state = { web3: null, accounts: null, contract: null, mRole: null, tpRole: null, dhRole: null, cRole: null };

const App = () => (
  <>
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Routes>
          <Route path="/" element={<SelectRole />} />
          <Route path="/roleAdmin" element={<RoleAdmin />} />
        </Routes>
      </div>
      {/* <Welcome /> */}
      <Services />
      <Footer />
      <MessageModal />
    </div>
  </>
);

export default App;
