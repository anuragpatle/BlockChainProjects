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

        {/* <Routes>
          <Route path="/ConfirmDelivery" element={<ConfirmDelivery />} />
        </Routes> */}
      </div>
      <Services />
      <Routes>
        <Route path="/" element={<Transactions />} />
      </Routes>
      <Footer />
    </div>
  </>
);

export default App;
