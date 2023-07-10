import Fcomp from "./components/fcomp/Fcomp";
import Footer from "./components/footer/Footer";
import Msrn from "./components/msrn/Msrn";
import Scomp from "./components/scomp/Scomp";
import Tcomp from "./components/tcomp/Tcomp";
import Slider from "./components/slider/Slider";
export default function Home() {
  return (
    <main>

      <Msrn />
      <Scomp />
      <Tcomp />
      <Fcomp />
      <Slider />
      <Footer />
    </main>
  )
}