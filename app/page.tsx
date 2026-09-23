import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center p-24">
      <Button className="cursor-pointer">Click me</Button>
    </div>
  );
}
