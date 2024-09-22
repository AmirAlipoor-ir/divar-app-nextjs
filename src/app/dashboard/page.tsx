"use client";

import Cookies from "js-cookie";
const DashboardPage = () => {
  const token = Cookies.get("accessTokenCookie");

  return (
    <div>
      {token?"user": "login"}
      <h1>dashbord</h1>
    </div>
  );
};

export default DashboardPage;
