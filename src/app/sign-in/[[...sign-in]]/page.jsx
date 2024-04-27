import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex w-auto justify-center h-[80vh] align-middle items-center">
      <SignIn path="/sign-in" />
    </div>
  );
}
