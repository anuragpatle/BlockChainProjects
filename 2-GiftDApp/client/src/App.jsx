import {
  Navbar,
  Welcome,
  Footer,
  Services,
  Transactions,
  ConfirmDelivery,
  DispatchForm,
  MessageModal
} from "./components";
import { Routes, Route, Link } from "react-router-dom";

const App = () => (
  <>
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Routes>
        <Route path="/" element={<Transactions />} />
      </Routes>
      <Footer />
      <MessageModal />
    </div>
  </>
);

export default App;
