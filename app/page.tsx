import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { prisma } from "@/lib/prisma";

export default async function Home() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Click me</Button>
    </div>
  );
}
