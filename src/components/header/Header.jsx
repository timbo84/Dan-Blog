import "./header.css";

export default function Header() {
  return (
    <>
    <div className="header">
    <div className="container">
      <h1><p>Evince</p></h1>
          <p>(Reveal the presence of)</p>
          <h1> <p>the Supernatural</p></h1>
      </div>
    
      <img  className="headerImg"  src={ '/Images/dog.jpg'}  alt="" />
    </div>
    </>
  );
}