import React, { useContext } from "react";
import { PaymentContext } from "../contexts/paymentContext";

const ClientPaymentPage = ({  }) => {
  const { clickClient } = useContext(PaymentContext); 

  const paymentArray = [
    { id: 1, clientName: "Cliente 1", amount: 100, isClient: true },
    { id: 2, clientName: "Empleado 1", amount: 200, isClient: false },
    { id: 3, clientName: "Cliente 3", amount: 150, isClient: true },
    { id: 4, clientName: "Cliente 4", amount: 300, isClient: true },
    { id: 5, clientName: "Empleado 5", amount: 50, isClient: false },
    { id: 6, clientName: "Cliente 6", amount: 250, isClient: true },
    { id: 7, clientName: "Empleado 7", amount: 180, isClient: false },
    { id: 8, clientName: "Cliente 8", amount: 120, isClient: true },
    { id: 9, clientName: "Empleado 9", amount: 80, isClient: false },
    { id: 10, clientName: "Cliente 10", amount: 400, isClient: true },
  ];
  

  return (
    <div>
      {clickClient &&
        paymentArray
          .filter((payment) => payment.isClient == true)
          .map((payment) => (
            <div key={payment.id}>
              <a
                href="#"
                class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Pago: {payment.id}
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  CLiente: {payment.clientName} Monto: ${payment.amount}
                </p>
              </a>
            </div>
          ))}
      {clickClient == false &&
        paymentArray
          .filter((payment) => payment.isClient == false)
          .map((payment) => (
            <div key={payment.id}>
              <a
                href="#"
                class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Pago: {payment.id}
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  CLiente: {payment.clientName} Monto: ${payment.amount}
                </p>
              </a>
            </div>
          ))}
    </div>
  );
};

export default ClientPaymentPage;
