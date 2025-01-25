import React, { ReactNode } from "react";
import Navbar from "../components/dashboard/Navbar";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="m-9">{children}</main>
    </>
  );
};

export default DashboardLayout;
