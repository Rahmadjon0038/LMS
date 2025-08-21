"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const RoleContext = createContext();

export function RoleProvider({ children }) {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const r = Cookies.get("role");
    setRole(r || null);
  }, []);

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  return useContext(RoleContext);
}
