import { FC } from "react";

const Nav: FC = () => {
  return (
    <>
     
      <nav>
        <ul>
          <li>
            <a href={"/#top-pro"}>profile</a>
          </li>
          <li>
            <a href={"/#top-w"}>製作物</a>
          </li>
          <li>
            <a href={"/#top-skill"}>資格一覧</a>
          </li>
        </ul>
      </nav>

      <style jsx>{`
      span{
      width: 200px;
      }
      #top {
          font-size: 30px;
          position: relative;
          top: 10px
            
          }
        nav {
          text-align: center;
          position: relative;
          left: 900px;
          bottom: 25px;
          font-size: 20px;
          width: 300px

        }
        nav ul {
          margin: 0;
          padding: 0;
        }
        nav li {
          list-style: none;
          display: inline-block;
          width: 10%;
          min-width: 90px;
        }
          li:last-child{
          padding-left: 10px;
          }
        nav li:not(:last-child) {
          border-right: 2px solid #ddd;
        }
        nav a {
          text-decoration: none;
          color: #333;
        }
        nav a.current {
          color: #00b0f0;
          border-bottom: 2px solid #00b0f0;
        }
        nav a:hover {
          color: #f7cb4d;
          border-bottom: 2px solid #f7cb4d;
        }
      `}</style>
    </>
  );
};

export default Nav;
