import Call from "./components/call";
import Features from "./components/features";
import Header from "./components/header";
import Hero from "./components/hero";
import Section from "./components/section-1";
import Section2 from "./components/section-2";
import Testimonials from "./components/testimonials";


export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <Features/>
    <Section/>
    <Section2/>
    <Testimonials/>
    <Call/>
    </>
  );
}
