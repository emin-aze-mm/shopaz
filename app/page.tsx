import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MobNavbar from "./components/MobNavbar";
import NewProducts from "./components/NewProducts";
import News from "./components/News";

export default function Home() {
  return (
    <main>
      <Hero/>
      <NewProducts/>
      <News/>
      <MobNavbar/>
      <Footer/>
    </main>
  )
}
