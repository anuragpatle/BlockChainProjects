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
import { RoleDataContextProvider } from "./context/RoleDataContext";
import Manufacture from "./components/Manufacturer/Manufacture";
import ManufacturerMenu from "./components/Manufacturer/ManufacturerMenu";
import AllManufacturedProducts from "./components/Manufacturer/AllManufacturedProducts";

const App = () => {
  let state = {
    web3: null,
    accounts: null,
    contract: null,
    mRole: null,
    tpRole: null,
    dhRole: null,
    cRole: null,
  };

  return (
    <>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <RoleDataContextProvider
            mRole={state.mRole}
            tpRole={state.tpRole}
            dhRole={state.dhRole}
            cRole={state.cRole}
          >
            <Routes>
              <Route path="/" element={<SelectRole />} />
              <Route path="/roleAdmin" element={<RoleAdmin />} />
              <Route path="/manufacturer" element={<ManufacturerMenu />} />
              <Route path="/manufacturer/allManufacturedProducts" element={<AllManufacturedProducts />} />
              <Route path="/manufacturer/manufacture" element={<Manufacture />} />
            </Routes>
          </RoleDataContextProvider>
        </div>
        {/* <Welcome /> */}
        <Services />
        <Footer />
        <MessageModal />
      </div>
    </>
  );
};

export default App;
