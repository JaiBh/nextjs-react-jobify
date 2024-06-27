import Image from "next/image";
import Landingimg from "../assets/main.svg";
import Logo from "../assets/logo.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
function page() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px- py-6">
        <Image src={Logo} alt="logo"></Image>
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            job <span className="text-primary">tracking</span> app
          </h1>
          <p className="leading-loose max-w-md mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            quas soluta at vero voluptatibus magni illum unde quam, quasi ad,
            ullam iure aut, porro saepe harum eaque praesentium est iste.
          </p>
          <Button asChild className="mt-4">
            <Link href="/add-job">Get Started</Link>
          </Button>
        </div>
        <Image
          src={Landingimg}
          alt="landing"
          className="hidden lg:block"
        ></Image>
      </section>
    </main>
  );
}
export default page;
