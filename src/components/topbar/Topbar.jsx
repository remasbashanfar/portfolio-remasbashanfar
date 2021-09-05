import "./topbar.scss";
import { Instagram, PhotoCamera, GitHub, Mail } from "@material-ui/icons";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            
          </a>
          <a href="https://github.com/remasbashanfar" >
          <div className="itemContainer">
            <GitHub className="icon" />
            <span>remasbashanfar</span>
          </div>
          </a>

          {/* <a href="https://mailto:remasbashanfar@ucla.edu" > */}
          <div className="itemContainer">
            <Mail className="icon" />
            <span>remasbashanfar@ucla.edu</span>
          </div>
          {/* </a> */}
            {/* <a href="https://instagram.com/remas.sb" >
            <div className="itemContainer">
            <Instagram className="icon" />
             <PhotoCamera className="icon" />
            <span>remas.sb</span>
          </div>
          </a> */}
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
