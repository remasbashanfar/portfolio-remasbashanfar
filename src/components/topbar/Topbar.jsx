import "./topbar.scss";
import {Instagram,GitHub,Mail,LinkedIn} from "@material-ui/icons";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            
          </a>
          <a href="https://github.com/remasbashanfar" style={{ textDecoration: 'none', color: 'black'}} >
          <div className="itemContainer">
            <GitHub className="icon" />
            <span>remasbashanfar</span>
          </div>
          </a>

          <a href="https://mailto:remasbashanfar@ucla.edu" style={{ textDecoration: 'none', color: 'black'}} >
          <div className="itemContainer">
            <Mail className="icon" />
            <span>remasbashanfar@ucla.edu</span>
          </div>
          </a>

            <a href="https://www.linkedin.com/in/remas-salah/" style={{ textDecoration: 'none', color: 'black'}} >
          <div className="itemContainer">
            <LinkedIn className="icon" />
            <span>remas-salah</span>
          </div>
          </a>
            <a href="https://instagram.com/remas.sb" style={{ textDecoration: 'none', color: 'black'}} >
            <div className="itemContainer">
            <Instagram className="icon" />
             {/* <PhotoCamera className="icon" /> */}
            <span>Photography @remas.sb</span>
          </div>
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
