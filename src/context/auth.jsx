"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const RoleContext = createContext();

export function RoleProvider({ children }) {
  const [role, setRole] = useState(null);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegis, setOpenregis] = useState(false);

  useEffect(() => {
    const r = Cookies.get("role");
    setRole(r || null);
  }, []);

  return (
    <RoleContext.Provider value={{ role, setRole, openLogin, setOpenLogin, openRegis, setOpenregis }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  return useContext(RoleContext);
}
