import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import Footer from "@components/Footer";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "@components/Projects";
import Experience from "@components/Experience";
import Contact from "@components/Contact";
import userData from "@constants/data";

export default function Home() {
  return (
    <><ContainerBlock
      title="Ananya  - Web-Developer"
      description="This is my Portfolio."
    >
      <Hero />
    </ContainerBlock>
    <AboutMe />
    <Projects/>
    <Experience/>
    <Contact/>
    <Footer/>
    </>
  );
}

export const getServerSideProps = async () => {
  

  return {
    props: {
      
    },
  };
};
