import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <h1>Dashboard</h1>
      <div className="flex flex-col gap-y-4">
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
}
