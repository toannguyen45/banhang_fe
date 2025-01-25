import React, { ReactNode } from "react";
import { redirect } from "next/navigation";
import Navbar from "../components/dashboard/Navbar";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  // const session = await auth();

  // if (!session) {
  //   redirect("/admin/signin");
  // }

  return (
    <>
      <Navbar />
      <main className="m-9">{children}</main>
    </>
  );
};

export default DashboardLayout;
