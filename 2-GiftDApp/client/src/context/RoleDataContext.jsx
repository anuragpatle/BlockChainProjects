import React, { useEffect, useState } from "react";
// export const RoleDataContextProvider = ({ mRole, tpRole, dhRole, cRole, children }) => {
//   const [roles, setRoles] = useState({
//     manufacturer : mRole,
//     thirdparty : tpRole,
//     deliveryhub : dhRole,
//     customer : cRole
// });
export const RoleDataContextProvider = ({ children }) => {
  const [roles, setRoles] = useState({
    manufacturer: "",
    thirdparty: "",
    deliveryhub: "",
    customer: "",
  });



  return (
    <RoleDataContext.Provider value={{ roles, setRoles }}>
      {children}
    </RoleDataContext.Provider>
  );
};

// export const useRole = () => React.useContext(RoleDataContext);
export const RoleDataContext = React.createContext();
