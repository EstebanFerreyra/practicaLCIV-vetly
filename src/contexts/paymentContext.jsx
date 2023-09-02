import React, { createContext, useState } from "react";
export const PaymentContext = createContext();

export const PaymentContextProvider = ({ children }) => {
  const [clickClient, setClickClient] = useState(true);

  const setClickClientHandler = (bool) => {
    setClickClient(bool);
  };

  return (
    <PaymentContext.Provider value={{ clickClient, setClickClientHandler }}>
      {children}
    </PaymentContext.Provider>
  );
};
