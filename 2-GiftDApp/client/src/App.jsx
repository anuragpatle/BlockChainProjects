import {
  Navbar,
  Welcome,
  Footer,
  Services,
  Transactions,
  ConfirmDelivery,
  DispatchForm,
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
        <Route path="" element={[ <Services/>, <Transactions />]} />
        {/* <Route path="/ConfirmDelivery" element={<ConfirmDelivery />} /> */}
      </Routes>
      <Footer />
    </div>
  </>
);

export default App;
