import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">pinkmart</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#discover">Discover</a>
          <a href="#saved">Saved</a>
        </div>

        <button className="profile-button">♡</button>
      </nav>

      {/* Hero */}
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">YOUR CAMPUS. YOUR COMMUNITY.</p>

            <h1>
              Find your next
              <span> favorite.</span>
            </h1>

            <p className="hero-text">
              Discover hair stylists, nail artists, clothing brands,
              beauty services, and more from businesses around your campus.
            </p>

            <div className="search-bar">
              <span>⌕</span>
              <input
                type="text"
                placeholder="Search for a service or business..."
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="categories" id="discover">
          <div className="section-heading">
            <div>
              <p className="small-title">EXPLORE</p>
              <h2>What are you looking for?</h2>
            </div>

            <button className="view-all">View all →</button>
          </div>

          <div className="category-grid">
            <div className="category-card hair">
              <div className="category-icon">💇🏽‍♀️</div>
              <h3>Hair</h3>
              <p>Braids, wigs, locs & more</p>
            </div>

            <div className="category-card nails">
              <div className="category-icon">💅🏽</div>
              <h3>Nails</h3>
              <p>Sets, gel, acrylic & art</p>
            </div>

            <div className="category-card clothing">
              <div className="category-icon">👗</div>
              <h3>Clothing</h3>
              <p>Boutiques & student brands</p>
            </div>

            <div className="category-card beauty">
              <div className="category-icon">💄</div>
              <h3>Beauty</h3>
              <p>Lashes, makeup & brows</p>
            </div>

            <div className="category-card food">
              <div className="category-icon">🧁</div>
              <h3>Food</h3>
              <p>Bakers, meals & treats</p>
            </div>

            <div className="category-card services">
              <div className="category-icon">✨</div>
              <h3>Services</h3>
              <p>Photography & more</p>
            </div>
          </div>
        </section>

        {/* Featured Businesses */}
        <section className="featured">
          <div className="section-heading">
            <div>
              <p className="small-title">TRENDING ON CAMPUS</p>
              <h2>Popular right now</h2>
            </div>
          </div>

          <div className="business-grid">
            <div className="business-card">
              <div className="business-image hair-image">
                <span>HAIR</span>
              </div>

              <div className="business-info">
                <div className="business-top">
                  <h3>Braids by Tolu</h3>
                  <span>♡</span>
                </div>

                <p>Protective styles & custom braids</p>

                <div className="business-details">
                  <span>★ 4.9</span>
                  <span>•</span>
                  <span>0.4 mi</span>
                </div>
              </div>
            </div>

            <div className="business-card">
              <div className="business-image nail-image">
                <span>NAILS</span>
              </div>

              <div className="business-info">
                <div className="business-top">
                  <h3>Nailed It ATL</h3>
                  <span>♡</span>
                </div>

                <p>Custom nail sets & nail art</p>

                <div className="business-details">
                  <span>★ 4.8</span>
                  <span>•</span>
                  <span>0.6 mi</span>
                </div>
              </div>
            </div>

            <div className="business-card">
              <div className="business-image clothing-image">
                <span>CLOTHING</span>
              </div>

              <div className="business-info">
                <div className="business-top">
                  <h3>Melanin Closet</h3>
                  <span>♡</span>
                </div>

                <p>Curated fashion & accessories</p>

                <div className="business-details">
                  <span>★ 4.7</span>
                  <span>•</span>
                  <span>0.8 mi</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;