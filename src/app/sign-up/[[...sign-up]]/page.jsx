import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex w-auto justify-center h-[80vh] align-middle items-center">
      <SignUp path="/sign-up" />
    </div>
  );
}
