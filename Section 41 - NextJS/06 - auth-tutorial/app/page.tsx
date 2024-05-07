import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})

export default async function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md", font.className)}>🔐Auth</h1>
        <p className="text-white text-lg">A simple authentication service</p>
      </div>
      <div>
        <Button variant="default" size="lg" className="bg-white rounded">Sign in</Button>
      </div>
      
    </main>
  );
}
