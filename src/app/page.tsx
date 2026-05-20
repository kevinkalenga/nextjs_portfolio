import Blog from "./components/Blog";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Projects from "./components/Projects";


export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Blog />
      <Newsletter />
    </>
  );
}
