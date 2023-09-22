import { useState } from "react";
import { Card } from "./Card";
import { ToggleSwitch } from "./ToggleButton";

export default function PricingComponent() {
    const [isToggle, setIsToggle] = useState(true);

    function handleToggle() {
      setIsToggle(!isToggle);   
    }
  return (
    <>
      <main className="main-cont">
        <NavBar onClick={handleToggle}/>
        <Card isToggle={isToggle}/>
      </main>
    </>
  );
}

function NavBar({onClick}) {
  return (
    <>
      <nav className="nav-bar">
        <h1 className="title">Our Pricing</h1>
        <div className="flex nav-toggle">
          <p>Annually</p>
          <ToggleSwitch onClick={onClick}/>
          <p>Monthly</p>
        </div>
      </nav>
    </>
  );
}
