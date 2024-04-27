import React from "react";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

const Navbar = async () => {
  const { userId } = auth();

  return (
    <div className="flex flex-row justify-around py-3 items-center">
      <Link className="text-2xl font-bold cursor-pointer" href="/">
        JobReady.AI
      </Link>
      {userId ? (
        <ul className="flex flex-row justify-between gap-10">
          <li className="cursor-pointer hover:font-bold">
            <Link href="/resume-review">Resume Review</Link>
          </li>
          <li className="cursor-pointer hover:font-bold">
            <Link href="ai-interview">AI Interview</Link>
          </li>
        </ul>
      ) : null}
      {userId ? (
        <UserButton />
      ) : (
        <div className="flex flex-row gap-3">
          <Link href="/sign-in" className="hover:font-bold">
            Login
          </Link>
          <Link href="/sign-up" className="hover:font-bold">
            SignUp
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
