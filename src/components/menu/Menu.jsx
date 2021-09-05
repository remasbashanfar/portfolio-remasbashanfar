import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Technologies</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Projects</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">Work Experience</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
