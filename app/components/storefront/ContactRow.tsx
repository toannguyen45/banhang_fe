import Link from "next/link";
import React from "react";

const ContactRow = () => {
  return (
    <div className="bg-red-700">
      <div className="container flex justify-between items-center py-5">
        <h2 className="text-white text-3xl font-bold
        ">CÁC DỊCH VỤ CỦA CHÚNG TÔI</h2>
        <Link
          href={"/services"}
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3"
        >
          XEM DỊCH VỤ
        </Link>
      </div>
    </div>
  );
};

export default ContactRow;
