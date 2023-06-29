import Fcomp from "./components/fcomp/Fcomp";
import Footer from "./components/footer/Footer";
import Msrn from "./components/msrn/Msrn";
import Scomp from "./components/scomp/Scomp";

export default function Home() {
    return (
      <main>
        
        <Msrn/>
        <Scomp/>
        <Fcomp/>
        <Footer/>
      </main>
    )
  }