import React from "react";
import RecomentationSection from "./RecomentationSection";
import Skillstack from "./skillstack";
import ProjectSection from "./ProjectSection";
import BlogSection from "./BlogSection";
import About from "./About";
import Title from "./Title";

function HomePage() {
  return (
    <div>
      <Title name="Maheswari Pokuri" leadroll="I am a freelancer" />
      <RecomentationSection />
      <Skillstack />
      <ProjectSection />
      <BlogSection />
      <About />
    </div>
  );
}
export default HomePage;
