import { Inter } from "next/font/google";
import Header from "@/compornents/header";
import Footer from "@/compornents/footer";
import Work from "@/compornents/work";
import Profile from "@/compornents/profile";
import Skill from "@/compornents/skill";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Profile></Profile>
      <Work></Work>
      <Skill></Skill>
      <Footer />
      <style jsx>{``}</style>
    </>
  );
}
