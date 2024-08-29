import { FC } from "react";
import Image from "next/image";

const Work: FC = () => {
  return (
    <>
      <center>
        <p id="top-w">製作物</p>
        <div id="work">
          <div className="img">
            <p id="fo-si">Javaの期末課題</p>
            <img src="img/work1.png" alt="写真" />
          </div>
          <div className="img">
            <p id="fo-si">1・2年共同開発</p>
            <img src="img/work2.png" alt="写真" />
          </div>
          <div className="img">
            <p id="fo-si">システム設計の授業課題</p>
            <img src="img/work3.png" alt="写真" />
          </div>
        </div>
      </center>

      <style jsx>{`
        .img {
          width: 500px;
          margin-bottom: 40px;
        }
 
        #top-w {
          margin: 20px;
          font-size: 26px;
        }
          #fo-si{
          font-size: 20px;
          }
      `}</style>
    </>
  );
};

export default Work;
