import { Card } from "./Card";

export default function PricingComponent() {
  return (
    <>
      <main className="main-cont">
        <NavBar />
        <Card />
      </main>
    </>
  );
}

function NavBar() {
  function handleToggle() {}
  return (
    <>
      <nav className="nav-bar">
        <h1 className="title">Our Pricing</h1>
        <div className="flex nav-toggle">
          <p>Annually</p>
          <button className="toggle-btn" onClick={handleToggle}>
            <div className="circle"></div>
          </button>
          <p>Monthly</p>
        </div>
      </nav>
    </>
  );
}
