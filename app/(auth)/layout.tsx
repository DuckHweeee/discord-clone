import React from "react";
import bg from "@/components/img/bg.png";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-opacity-50  w-screen h-screen"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="h-100 flex items-center justify-center">{children}</div>
    </div>
  );
};

export default AuthLayout;
