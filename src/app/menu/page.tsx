import { Header } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import Menu from "./menu";

const Page = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

export default Page;
