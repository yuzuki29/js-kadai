import { FC } from "react";
import Image from "next/image";

const Profile: FC = () => {
  return (
    <>
      <div>
        <center>
          <p id="top-pro">profile</p>
        </center>
        <div id="profile">
          <p>
            氏名 : <span id="name">山端悠月</span>
          </p>
          <p>
            生年月日 : <span id="birth">2004年7月21日</span>
          </p>
          <p>
            血液型 : <span id="blood">B型</span>
          </p>
          <p>
            mail : <span id="mail">y.yamahata.sys23@morijyobi.ac.jp</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        #top-pro {
          font-size: 26px;
        }
        #profile {
          margin-top: 20px;
          padding-left: 450px;
        }
        #name {
          position: relative;
          left: 200px;
        }
        #birth {
          position: relative;
          left: 170px;
        }
        #blood {
          position: relative;
          left: 190px;
        }
        #mail {
          position: relative;
          left: 210px;
        }
      `}</style>
    </>
  );
};

export default Profile;
