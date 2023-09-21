export function Card() {
  return (
    <div className="flex">
      <Basic />
      <Professional />
      <Master />
    </div>
  );
}

function Basic() {
  return (
    <>
      <div>
        <h2>Basic</h2>
        <h1>&dollar;19.99</h1>
        <hr />
        <p>500 GB Storage</p>
        <hr />
        <p>2 Users Allowed</p>
        <hr />
        <p>Send up to 3 GB</p>
        <hr />
        <button className="button">Learn More</button>
      </div>
    </>
  );
}

function Professional() {
  return (
    <>
      <div>
        <h2>Professional</h2>
        <h1>&dollar;24.99</h1>
        <hr />
        <p>1 TB Storage</p>
        <hr />
        <p>5 Users Allowed</p>
        <hr />
        <p>Send up to 10 GB</p>
        <hr />
        <button className="button">Learn More</button>
      </div>
    </>
  );
}

function Master() {
  return (
    <>
      <div>
        <h2>Master</h2>
        <h1>&dollar;39.99</h1>
        <hr />
        <p>2 TB Storage</p>
        <hr />
        <p>10 Users Allowed</p>
        <hr />
        <p>Send up to 20 GB</p>
        <button className="button">Learn More</button>
      </div>
    </>
  );
}
