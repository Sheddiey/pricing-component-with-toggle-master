import { Card } from "./Card";

export default function PricingComponent() {
  return (
    <>
    <NavBar />
    <Card />
    </>
  );
}

function NavBar() {

    function handleToggle() {

    }
    return (
        <>
            <h1>Our Pricing</h1>
            <div className="flex">
                <p>Annually</p>
                <button className="toggle-btn" onClick={handleToggle}>
                    <div className="circle"></div>
                </button>
                <p>Monthly</p>
            </div>
        </>
    );
}
