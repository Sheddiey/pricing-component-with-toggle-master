export function Card() {
  return (
    <div className="flex">
      <div className="bg-top"></div>
      <Basic />
      <Professional />
      <Master />
      <div className="bg-bottom"></div>
    </div>
  );
}

function Basic() {
  return (
    <>
      <div className="basic card">
        <h2>Basic</h2>
        <div className="flex">
          <h1>$</h1>
          <span>199.99</span>
        </div>
        <div className="section">
          <hr />
          <p>500 GB Storage</p>
          <hr />
          <p>2 Users Allowed</p>
          <hr />
          <p>Send up to 3 GB</p>
          <hr />
        </div>
        <button className="button">Learn More</button>
      </div>
    </>
  );
}

function Professional() {
  return (
    <>
      <div className="professional card">
        <h2>Professional</h2>
        <div className="flex">
          <h1>$</h1>
          <span>249.99</span>
        </div>
        <div className="section">
          <hr />
          <p>1 TB Storage</p>
          <hr />
          <p>5 Users Allowed</p>
          <hr />
          <p>Send up to 10 GB</p>
          <hr />
        </div>
        <button className="button">Learn More</button>
      </div>
    </>
  );
}

function Master() {
  return (
    <>
      <div className="master card">
        <h2>Master</h2>
        <div className="flex">
          <h1>$</h1>
          <span>399.99</span>
        </div>
        <div className="section">
          <hr />
          <p>2 TB Storage</p>
          <hr />
          <p>10 Users Allowed</p>
          <hr />
          <p>Send up to 20 GB</p>
          <hr />
        </div>
        <button className="button">Learn More</button>
      </div>
    </>
  );
}
