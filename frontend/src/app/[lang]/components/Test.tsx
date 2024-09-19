import Link from "next/link";
import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { Button } from "@/components/ui/button";




interface TestProps {
  data: {
    id: string;
    title: string;
  };
}

export default function Test({ data }: TestProps) {

  return (
    <section className="dark:bg-black dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-lg lg:max-w-md xl:max-w-lg lg:text-left">
          <HighlightedText
            text={data.title}
            tag="h1"
            className="text-5xl font-bold leading-none sm:text-6xl mb-8"
            color="dark:text-violet-400"  
          />
           
        </div>
        <Button variant="outline">Button</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
    </section>
  );
}
