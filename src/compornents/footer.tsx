import Nav from "./nav";

const Footer = () => {
  return (
    <>
      <footer>
        <span id="s1">総合システム工学科</span>
        <span id="s2">山端悠月</span>
        <div id="nav">
          <Nav></Nav>
        </div>
      </footer>
      <style jsx>{`
        #nav {
          position: relative;
          top: 20px;
          right: 900px;
        }
        footer {
          height: 80px;
          background-color: #eeeeee;
        }
        #s1 {
          position: relative;
          top: 25px;
          left: 800px;
          font-size: 20px;
        }
        #s2 {
          position: relative;
          top: 25px;
          left: 900px;
          font-size: 20px;
        }
      `}</style>
    </>
  );
};

export default Footer;
