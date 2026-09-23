import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="z-20 flex min-h-screen flex-col items-center justify-start py-2 pt-10">
      <div className="flex flex-col items-center justify-center my-5">
        <Image src="/hero.svg" alt="Hero section" height={500} width={500} />

        <h1 className="z-20 mt-5 text-6xl font-extrabold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-red-500 to-pink-500 dark:from-rose-400 dark:via-red-400 dark:to-pink-400 leading-[1.3]">
          Vibe Code With Intelligence
        </h1>
      </div>

      <p className="mt-2 max-w-2xl px-5 py-10 text-center text-lg text-gray-600 dark:text-gray-400">
        VibeCode Editor is a powerful and intelligent code editor that enhances
        your coding experience with advanced features and seamless integration.
        It is designed to help you write, debug, and optimize your code
        efficiently.
      </p>

      <Link href="/dashboard">
        <Button variant="default" className="mb-4" size="lg">
          Get Started
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Button>
      </Link>
    </div>
  );
}
