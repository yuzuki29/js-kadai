import Nav from "./nav";

const Header = () => {
  return (
    <>
    <header>
       <span id="top">Portfolio</span>
      <Nav></Nav>
    </header>

    <style jsx>{`
      #top {
          font-size: 30px;
          position: relative;
          top: 10px;
          left: 40px;      
          }  
      `}</style>
    </>
  );
};

export default Header;
