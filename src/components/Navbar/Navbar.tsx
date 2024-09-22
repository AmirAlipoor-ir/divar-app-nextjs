// "use client";    

import Link from "next/link";

import Cookies from "js-cookie";

const Navbar = () => {
const accessToken = Cookies.get("accessTokenCookie");

  return (
    <div className="flex justify-center gap-x-3 text-2xl">
      {accessToken ? (
        <button>profile</button>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default Navbar;
