import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-around py-3 items-center">
      <h1 className="text-2xl font-bold">JobReady.AI</h1>
      <ul className="flex flex-row justify-between gap-10">
        <li className="cursor-pointer">Resume Review</li>
        <li className="cursor-pointer">AI Interview</li>
      </ul>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
};

export default Navbar;
