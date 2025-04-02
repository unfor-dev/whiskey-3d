
export default function Header() {
  return (
    <>
      <div className="element">
        {/* Header Section */}
        <div className="Header">
          <div className="headerLogo">
            <h1>Logo</h1>
          </div>
          <div className="headerButton">
            <button type="button">Something</button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="Hero">
          <div className="heroMember">
            <h2>Member</h2>
          </div>
          <div className="heroName">
            <h2>
              The Magic <p>Bottle</p>
            </h2>
          </div>
          <div className="heroText">
            <hr /> {/* Xatolik tuzatildi */}
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </>
  );
}
