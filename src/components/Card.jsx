export function Card({isToggle}) {
  return (
    <div className="flex section-mobile">
      <div className="bg-top"></div>
      <Basic isToggle={isToggle} />
      <Professional isToggle={isToggle}/>
      <Master isToggle={isToggle}/>
      <div className="bg-bottom"></div>
    </div>
  );
}

function Basic({isToggle}) {
  return (
    <>
      <div className="basic card">
        <h2>Basic</h2>
        <div className="flex">
          <h1 className="fs-100">$</h1>
          <span>{isToggle ? 199.99 : 19.99}</span>
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

function Professional({isToggle}) {
  return (
    <>
      <div className="professional card">
        <h2>Professional</h2>
        <div className="flex">
          <h1 className="fs-100">$</h1>
          <span>{isToggle ? 249.99 : 49.99}</span>
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

function Master({isToggle}) {
  return (
    <>
      <div className="master card">
        <h2>Master</h2>
        <div className="flex">
          <h1 className="fs-100">$</h1>
          <span>{isToggle ? 399.99 : 99.99}</span>
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
