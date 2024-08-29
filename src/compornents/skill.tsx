import { FC } from "react";
import Image from "next/image";

const Skill: FC = () => {
  return (
    <>
      <center>
        <p id="top-skill">資格一覧</p>
      </center>
      <div id="skill">
        <p>1.java検定3級</p>
        <p>2.基本情報技術者試験</p>
      </div>

      <style jsx>{`
        #top-skill {
          margin: 20px;
          font-size: 26px;
        }
          #skill{
padding-left: 570px;
margin-bottom: 20px
          }
      `}</style>
    </>
  );
};

export default Skill;
