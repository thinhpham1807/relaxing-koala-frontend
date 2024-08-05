import { Header } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import Reservation from "./reservation";
import {Chart} from "../../components/chart/chart";

const Page = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Header />
      <Reservation />
      <Footer />
    </div>
  );
};

export default Page;
