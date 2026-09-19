import { useState } from "react";
import "./App.css";

function App() {
  // =========================
  // ACCOUNT / ONBOARDING
  // =========================

  const [isOnboarded, setIsOnboarded] = useState(false);
  const [userType, setUserType] = useState("student");
  const [email, setEmail] = useState("");
  const [campus, setCampus] = useState("");

  // =========================
  // STUDENT STATE
  // =========================

  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [profileTab, setProfileTab] = useState("profile");
  const [followed, setFollowed] = useState(false);
  const [showBusinessForm, setShowBusinessForm] = useState(false);

  // =========================
  // BUSINESS OWNER STATE
  // =========================

  const [businessTab, setBusinessTab] = useState("dashboard");
  const [swapRequests, setSwapRequests] = useState([]);
  const [swapMessage, setSwapMessage] = useState("");

  const [businessProfile, setBusinessProfile] = useState({
    name: "Braids by Tolu",
    category: "Hair & Beauty",
    description:
      "Knotless, boho, and feed-in cornrows made for busy college students.",
    followers: 312,
    profileViews: 1248,
    bookings: 18,
    rating: "4.9",
  });

  // =========================
  // BUSINESSES
  // =========================

  const [businesses, setBusinesses] = useState([
    {
      name: "Braids by Tolu",
      category: "Braider",
      distance: "0.4 mi from campus",
      rating: "4.9",
      reviews: 48,
      followers: 312,
      posts: 4,
      description:
        "Knotless, boho, and feed in cornrows. Bring your own hair or add hair for $10. Appointments are at my studio space five minutes from campus.",
      type: "HAIR",
      services: [
        {
          name: "Knotless Braids, Medium",
          time: "5 hr",
          price: "$180",
        },
        {
          name: "Boho Knotless",
          time: "6 hr",
          price: "$220",
        },
        {
          name: "Feed In Cornrows",
          time: "2.5 hr",
          price: "$100",
        },
      ],
      portfolio: [
        "Medium knotless",
        "Boho knotless",
        "Feed in cornrows",
        "Weekend braids",
      ],
    },
    {
      name: "Nailed It ATL",
      category: "Nail Artist",
      distance: "0.6 mi from campus",
      rating: "4.8",
      reviews: 36,
      followers: 245,
      posts: 6,
      description:
        "Custom nail sets, gel manicures, acrylics, and detailed nail art for students on campus.",
      type: "NAILS",
      services: [
        {
          name: "Gel Manicure",
          time: "1 hr",
          price: "$45",
        },
        {
          name: "Custom Acrylic Set",
          time: "2 hr",
          price: "$75",
        },
        {
          name: "Nail Art Add-On",
          time: "30 min",
          price: "$15",
        },
      ],
      portfolio: [
        "Pink chrome set",
        "French tip set",
        "Custom nail art",
        "Birthday set",
      ],
    },
    {
      name: "Melanin Closet",
      category: "Clothing Brand",
      distance: "0.8 mi from campus",
      rating: "4.7",
      reviews: 29,
      followers: 198,
      posts: 8,
      description:
        "Curated fashion, accessories, and student-friendly looks made for everyday campus life.",
      type: "CLOTHING",
      services: [
        {
          name: "Campus Collection",
          time: "Available now",
          price: "$40+",
        },
        {
          name: "Custom Styling",
          time: "45 min",
          price: "$30",
        },
        {
          name: "Accessory Bundle",
          time: "Available now",
          price: "$25",
        },
      ],
      portfolio: [
        "Campus collection",
        "Weekend fit",
        "Accessories",
        "New arrivals",
      ],
    },
  ]);

  // =========================
  // ONBOARDING
  // =========================

  const handleContinue = (event) => {
    event.preventDefault();

    if (!email || !campus) {
      alert("Please enter your email and select your campus.");
      return;
    }

    setIsOnboarded(true);
  };

  // =========================
  // STUDENT FUNCTIONS
  // =========================

  const openBusiness = (business) => {
    setSelectedBusiness(business);
    setProfileTab("profile");
    setFollowed(false);
  };

  const closeBusiness = () => {
    setSelectedBusiness(null);
  };

  const handleBusinessSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const newBusiness = {
      name: formData.get("businessName"),
      category: formData.get("category"),
      distance: "0.2 mi from campus",
      rating: "New",
      reviews: 0,
      followers: 0,
      posts: 0,
      description: formData.get("description"),
      type: formData.get("category").toUpperCase(),
      services: [
        {
          name: formData.get("service"),
          time: formData.get("duration"),
          price: formData.get("price"),
        },
      ],
      portfolio: [
        "New work",
        "Featured service",
        "Campus favorite",
      ],
    };

    setBusinesses((currentBusinesses) => [
      ...currentBusinesses,
      newBusiness,
    ]);

    event.target.reset();
    setShowBusinessForm(false);
  };

  // =========================
  // BUSINESS OWNER DASHBOARD
  // =========================

  if (isOnboarded && userType === "business") {
    return (
      <div className="business-dashboard">
        <aside className="business-sidebar">
          <div className="dashboard-logo">pinkmart</div>

          <div className="owner-mini-profile">
            <div className="owner-avatar">BT</div>

            <div>
              <strong>{businessProfile.name}</strong>
              <span>Business Owner</span>
            </div>
          </div>

          <div className="sidebar-campus">
            <span>YOUR CAMPUS</span>
            <strong>📍 {campus}</strong>
          </div>

          <div className="dashboard-navigation">
            <button
              className={
                businessTab === "dashboard" ? "active" : ""
              }
              onClick={() => setBusinessTab("dashboard")}
            >
              <span>⌂</span>
              Dashboard
            </button>

            <button
              className={
                businessTab === "calendar" ? "active" : ""
              }
              onClick={() => setBusinessTab("calendar")}
            >
              <span>▣</span>
              Calendar
            </button>

            <button
              className={
                businessTab === "services" ? "active" : ""
              }
              onClick={() => setBusinessTab("services")}
            >
              <span>✦</span>
              Services
            </button>

            <button
              className={
                businessTab === "portfolio" ? "active" : ""
              }
              onClick={() => setBusinessTab("portfolio")}
            >
              <span>▧</span>
              Portfolio
            </button>

            <button
              className={
                businessTab === "reviews" ? "active" : ""
              }
              onClick={() => setBusinessTab("reviews")}
            >
              <span>★</span>
              Reviews
            </button>

            <button
              className={
                businessTab === "profile" ? "active" : ""
              }
              onClick={() => setBusinessTab("profile")}
            >
              <span>○</span>
              Business Profile
            </button>
          </div>

          <div className="sidebar-bottom">
            <button
              onClick={() => setIsOnboarded(false)}
            >
              ⇥ Switch account
            </button>
          </div>
        </aside>

        <main className="dashboard-main">
          <header className="dashboard-header">
            <div>
              <p className="dashboard-eyebrow">
                BUSINESS DASHBOARD
              </p>

              <h1>
                {businessTab === "dashboard"
                  ? "Good evening, Tolu 👋"
                  : businessTab === "calendar"
                  ? "Your calendar"
                  : businessTab === "services"
                  ? "Your services"
                  : businessTab === "portfolio"
                  ? "Your portfolio"
                  : businessTab === "reviews"
                  ? "Customer reviews"
                  : "Business profile"}
              </h1>

              <p>
                {businessTab === "dashboard"
                  ? "Here's what's happening with your business."
                  : `Manage your ${businessTab} on Pinkmart.`}
              </p>
            </div>

            <div className="dashboard-header-actions">
              <button className="notification-button">
                ♡
                <span></span>
              </button>

              <div className="dashboard-user">
                <div className="dashboard-user-avatar">
                  TO
                </div>

                <div>
                  <strong>Tolu</strong>
                  <small>{email}</small>
                </div>
              </div>
            </div>
          </header>

          {businessTab === "dashboard" && (
            <>
              <section className="dashboard-welcome-card">
                <div>
                  <span className="live-pill">
                    ● LIVE ON PINKMART
                  </span>

                  <h2>
                    Your business is getting
                    <span> noticed.</span>
                  </h2>

                  <p>
                    Students around {campus} can now discover
                    your services, view your work, and book
                    appointments.
                  </p>
                </div>

                <div className="welcome-card-art">
                  <div className="art-circle">
                    ✦
                  </div>
                  <div className="art-card">
                    <strong>+24%</strong>
                    <span>Profile views</span>
                  </div>
                </div>
              </section>

              <section className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">◉</div>
                  <span>Profile views</span>
                  <strong>
                    {businessProfile.profileViews.toLocaleString()}
                  </strong>
                  <small>+24% this week</small>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">♡</div>
                  <span>Followers</span>
                  <strong>{businessProfile.followers}</strong>
                  <small>+18 this week</small>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">▣</div>
                  <span>Bookings</span>
                  <strong>{businessProfile.bookings}</strong>
                  <small>5 this week</small>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">★</div>
                  <span>Rating</span>
                  <strong>{businessProfile.rating}</strong>
                  <small>48 reviews</small>
                </div>
              </section>

              <section className="dashboard-columns">
                <div className="dashboard-panel schedule-panel">
                  <div className="panel-header">
                    <div>
                      <p className="panel-label">
                        TODAY
                      </p>
                      <h2>Upcoming bookings</h2>
                    </div>

                    <button
                      onClick={() =>
                        setBusinessTab("calendar")
                      }
                    >
                      View calendar →
                    </button>
                  </div>

                  <div className="booking-list">
                    <div className="booking-row">
                      <div className="booking-time">
                        <strong>10:00</strong>
                        <span>AM</span>
                      </div>

                      <div className="booking-avatar">
                        AJ
                      </div>

                      <div className="booking-info">
                        <strong>
                          Knotless Braids, Medium
                        </strong>
                        <span>
                          Alex Johnson • 5 hours
                        </span>
                      </div>

                      <div className="booking-price">
                        $180
                      </div>
                    </div>

                    <div className="booking-row">
                      <div className="booking-time">
                        <strong>1:30</strong>
                        <span>PM</span>
                      </div>

                      <div className="booking-avatar">
                        MS
                      </div>

                      <div className="booking-info">
                        <strong>
                          Boho Knotless
                        </strong>
                        <span>
                          Maya Smith • 6 hours
                        </span>
                      </div>

                      <div className="booking-price">
                        $220
                      </div>
                    </div>

                    <div className="booking-row">
                      <div className="booking-time">
                        <strong>4:00</strong>
                        <span>PM</span>
                      </div>

                      <div className="booking-avatar">
                        JD
                      </div>

                      <div className="booking-info">
                        <strong>
                          Feed In Cornrows
                        </strong>
                        <span>
                          Jordan Davis • 2.5 hours
                        </span>
                      </div>

                      <div className="booking-price">
                        $100
                      </div>
                    </div>
                  </div>
                </div>

                <div className="dashboard-panel growth-panel">
                  <div className="panel-header">
                    <div>
                      <p className="panel-label">
                        THIS WEEK
                      </p>
                      <h2>Business growth</h2>
                    </div>
                  </div>

                  <div className="growth-number">
                    +24%
                  </div>

                  <p className="growth-description">
                    Your profile is being discovered more
                    often by students.
                  </p>

                  <div className="fake-chart">
                    <div style={{ height: "35%" }}></div>
                    <div style={{ height: "45%" }}></div>
                    <div style={{ height: "42%" }}></div>
                    <div style={{ height: "60%" }}></div>
                    <div style={{ height: "55%" }}></div>
                    <div style={{ height: "78%" }}></div>
                    <div style={{ height: "92%" }}></div>
                  </div>

                  <div className="chart-labels">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>
              </section>

              <section className="dashboard-columns">
                <div className="dashboard-panel">
                  <div className="panel-header">
                    <div>
                      <p className="panel-label">
                        CUSTOMER FEEDBACK
                      </p>
                      <h2>Recent review</h2>
                    </div>

                    <button
                      onClick={() =>
                        setBusinessTab("reviews")
                      }
                    >
                      See all →
                    </button>
                  </div>

                  <div className="dashboard-review">
                    <div className="review-user">
                      <div>AJ</div>

                      <div>
                        <strong>Alex Johnson</strong>
                        <span>2 days ago</span>
                      </div>

                      <span className="review-stars">
                        ★★★★★
                      </span>
                    </div>

                    <p>
                      "I absolutely loved my braids! The
                      location was super convenient and the
                      whole experience was amazing."
                    </p>
                  </div>
                </div>

                <div className="dashboard-panel quick-actions">
                  <div className="panel-header">
                    <div>
                      <p className="panel-label">
                        QUICK ACTIONS
                      </p>
                      <h2>Manage your business</h2>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      setBusinessTab("services")
                    }
                  >
                    <span>✦</span>
                    <div>
                      <strong>Manage services</strong>
                      <small>
                        Update prices and availability
                      </small>
                    </div>
                    →
                  </button>

                  <button
                    onClick={() =>
                      setBusinessTab("portfolio")
                    }
                  >
                    <span>▧</span>
                    <div>
                      <strong>Update portfolio</strong>
                      <small>
                        Show students your latest work
                      </small>
                    </div>
                    →
                  </button>
                </div>
              </section>
            </>
          )}

          {businessTab === "calendar" && (
            <section className="full-dashboard-panel">
              <div className="calendar-top">
                <div>
                  <p className="panel-label">SEPTEMBER</p>
                  <h2>Monday, September 21</h2>
                </div>

                <button className="dark-dashboard-button">
                  + Add availability
                </button>
              </div>

              <div className="calendar-grid">
                {[
                  "9 AM",
                  "10 AM",
                  "11 AM",
                  "12 PM",
                  "1 PM",
                  "2 PM",
                  "3 PM",
                  "4 PM",
                  "5 PM",
                ].map((time, index) => (
                  <div className="calendar-row" key={time}>
                    <span>{time}</span>

                    <div>
                      {index === 1 && (
                        <div className="calendar-booking">
                          <strong>
                            Knotless Braids
                          </strong>
                          <small>
                            Alex Johnson • $180
                          </small>
                        </div>
                      )}

                      {index === 4 && (
                        <div className="calendar-booking second">
                          <strong>
                            Boho Knotless
                          </strong>
                          <small>
                            Maya Smith • $220
                          </small>
                        </div>
                      )}

                      {index === 7 && (
                        <div className="calendar-booking third">
                          <strong>
                            Feed In Cornrows
                          </strong>
                          <small>
                            Jordan Davis • $100
                          </small>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {businessTab === "services" && (
            <section className="full-dashboard-panel">
              <div className="panel-header">
                <div>
                  <p className="panel-label">
                    YOUR SERVICES
                  </p>
                  <h2>Services & pricing</h2>
                </div>

                <button className="dark-dashboard-button">
                  + Add service
                </button>
              </div>

              <div className="owner-service-list">
                <div className="owner-service">
                  <div className="service-owner-icon">
                    ✦
                  </div>

                  <div>
                    <strong>
                      Knotless Braids, Medium
                    </strong>
                    <span>5 hours</span>
                  </div>

                  <strong>$180</strong>

                  <span className="service-active">
                    Active
                  </span>

                  <button>Edit</button>
                </div>

                <div className="owner-service">
                  <div className="service-owner-icon">
                    ✦
                  </div>

                  <div>
                    <strong>Boho Knotless</strong>
                    <span>6 hours</span>
                  </div>

                  <strong>$220</strong>

                  <span className="service-active">
                    Active
                  </span>

                  <button>Edit</button>
                </div>

                <div className="owner-service">
                  <div className="service-owner-icon">
                    ✦
                  </div>

                  <div>
                    <strong>Feed In Cornrows</strong>
                    <span>2.5 hours</span>
                  </div>

                  <strong>$100</strong>

                  <span className="service-active">
                    Active
                  </span>

                  <button>Edit</button>
                </div>
              </div>
            </section>
          )}

          {businessTab === "portfolio" && (
            <section className="full-dashboard-panel">
              <div className="panel-header">
                <div>
                  <p className="panel-label">
                    SHOWCASE YOUR WORK
                  </p>
                  <h2>Portfolio</h2>
                </div>

                <button className="dark-dashboard-button">
                  + Add photo
                </button>
              </div>

              <div className="owner-portfolio-grid">
                <div>Medium knotless</div>
                <div>Boho knotless</div>
                <div>Feed in cornrows</div>
                <div>Weekend braids</div>
                <div>Birthday set</div>
                <div>New work</div>
              </div>
            </section>
          )}

          {businessTab === "reviews" && (
            <section className="full-dashboard-panel">
              <div className="panel-header">
                <div>
                  <p className="panel-label">
                    CUSTOMER FEEDBACK
                  </p>
                  <h2>Reviews</h2>
                </div>

                <div className="large-rating">
                  ★ 4.9
                </div>
              </div>

              <div className="owner-review-card">
                <div className="owner-review-header">
                  <div className="review-avatar">
                    AJ
                  </div>

                  <div>
                    <strong>Alex Johnson</strong>
                    <span>2 days ago</span>
                  </div>

                  <span>★★★★★</span>
                </div>

                <p>
                  "I absolutely loved my braids! The location
                  was convenient and the whole experience was
                  amazing."
                </p>
              </div>

              <div className="owner-review-card">
                <div className="owner-review-header">
                  <div className="review-avatar">
                    MS
                  </div>

                  <div>
                    <strong>Maya Smith</strong>
                    <span>5 days ago</span>
                  </div>

                  <span>★★★★★</span>
                </div>

                <p>
                  "Tolu did such an amazing job. I will
                  definitely be booking again."
                </p>
              </div>
            </section>
          )}

          {businessTab === "profile" && (
            <section className="full-dashboard-panel profile-editor">
              <div className="profile-editor-header">
                <div className="large-business-avatar">
                  BT
                </div>

                <div>
                  <p className="panel-label">
                    BUSINESS PROFILE
                  </p>

                  <h2>{businessProfile.name}</h2>

                  <span>
                    {businessProfile.category}
                  </span>
                </div>

                <button className="dark-dashboard-button">
                  Edit profile
                </button>
              </div>

              <div className="profile-editor-details">
                <div>
                  <label>Business email</label>
                  <p>{email}</p>
                </div>

                <div>
                  <label>Campus</label>
                  <p>📍 {campus}</p>
                </div>

                <div>
                  <label>Category</label>
                  <p>{businessProfile.category}</p>
                </div>
              </div>

              <div className="profile-about">
                <label>About your business</label>
                <p>{businessProfile.description}</p>
              </div>
            </section>
          )}
        </main>
      </div>
    );
  }

  // =========================
  // WELCOME PAGE
  // =========================

  if (!isOnboarded) {
    return (
      <div className="welcome-page">
        <div className="welcome-background-shape shape-one"></div>
        <div className="welcome-background-shape shape-two"></div>

        <nav className="welcome-navbar">
          <div className="logo">pinkmart</div>

          <div className="welcome-nav-text">
            Your campus. Your community.
          </div>
        </nav>

        <main className="welcome-main">
          <div className="welcome-left">
            <p className="eyebrow">
              YOUR CAMPUS. YOUR COMMUNITY.
            </p>

            <h1>
              Find your next
              <span> favorite.</span>
            </h1>

            <p className="welcome-description">
              Discover local businesses, services, creators,
              and campus favorites all in one place.
            </p>

            <div className="welcome-features">
              <div className="welcome-feature">
                <div className="feature-icon">✦</div>

                <div>
                  <strong>Discover locally</strong>
                  <p>
                    Find businesses around your campus.
                  </p>
                </div>
              </div>

              <div className="welcome-feature">
                <div className="feature-icon">♡</div>

                <div>
                  <strong>Support your community</strong>
                  <p>
                    Shop and book with people nearby.
                  </p>
                </div>
              </div>

              <div className="welcome-feature">
                <div className="feature-icon">＋</div>

                <div>
                  <strong>Grow your business</strong>
                  <p>
                    Put your business in front of students.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="welcome-card">
            <div className="welcome-card-top">
              <p className="small-label">WELCOME TO</p>

              <h2>pinkmart</h2>

              <p>
                Tell us a little about yourself to get
                started.
              </p>
            </div>

            <form onSubmit={handleContinue}>
              <label>I am a...</label>

              <div className="user-type-options">
                <button
                  type="button"
                  className={`user-type-button ${
                    userType === "student"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => setUserType("student")}
                >
                  <span className="user-type-icon">
                    🎓
                  </span>

                  <span>
                    <strong>Student</strong>
                    <small>
                      Discover campus businesses
                    </small>
                  </span>

                  {userType === "student" && (
                    <span className="checkmark">✓</span>
                  )}
                </button>

                <button
                  type="button"
                  className={`user-type-button ${
                    userType === "business"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => setUserType("business")}
                >
                  <span className="user-type-icon">
                    💼
                  </span>

                  <span>
                    <strong>Business Owner</strong>
                    <small>
                      Reach students on campus
                    </small>
                  </span>

                  {userType === "business" && (
                    <span className="checkmark">✓</span>
                  )}
                </button>
              </div>

              <label htmlFor="email">
                Email address
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                required
              />

              <label htmlFor="campus">
                {userType === "student"
                  ? "Campus you attend"
                  : "Campus you serve"}
              </label>

              <select
                id="campus"
                value={campus}
                onChange={(event) =>
                  setCampus(event.target.value)
                }
                required
              >
                <option value="">
                  Select your campus
                </option>

                <option value="Georgia State University">
                  Georgia State University
                </option>

                <option value="Georgia Tech">
                  Georgia Tech
                </option>

                <option value="Emory University">
                  Emory University
                </option>

                <option value="Clark Atlanta University">
                  Clark Atlanta University
                </option>

                <option value="Spelman College">
                  Spelman College
                </option>

                <option value="Morehouse College">
                  Morehouse College
                </option>

                <option value="Kennesaw State University">
                  Kennesaw State University
                </option>

                <option value="University of Georgia">
                  University of Georgia
                </option>

                <option value="Georgia Southern University">
                  Georgia Southern University
                </option>

                <option value="Other">Other</option>
              </select>

              <button
                className="continue-button"
                type="submit"
              >
                Continue
                <span>→</span>
              </button>
            </form>

            <p className="welcome-note">
              By continuing, you agree to use Pinkmart as a
              campus community platform.
            </p>
          </div>
        </main>

        <div className="welcome-bottom">
          <span>Discover</span>
          <span>Connect</span>
          <span>Shop</span>
          <span>Book</span>
        </div>
      </div>
    );
  }

  // =========================
  // STUDENT MARKETPLACE
  // =========================

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">pinkmart</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#discover">Discover</a>
          <a href="#saved">Saved</a>
          <a href="#bookings">Bookings</a>

          <button
            className="list-business-nav"
            onClick={() => setShowBusinessForm(true)}
          >
            List your business
          </button>
        </div>

        <button
          className="profile-button"
          onClick={() => setIsOnboarded(false)}
        >
          ♡
        </button>
      </nav>

      <div className="campus-bar">
        <span>📍 {campus}</span>

        <span className="campus-user-type">
          Student
        </span>
      </div>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              YOUR CAMPUS. YOUR COMMUNITY.
            </p>

            <h1>
              Find your next
              <span> favorite.</span>
            </h1>

            <p className="hero-text">
              Discover hair stylists, nail artists, clothing
              brands, beauty services, and more from
              businesses around your campus.
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

        <section className="categories" id="discover">
          <div className="section-heading">
            <div>
              <p className="section-label">EXPLORE</p>
              <h2>What are you looking for?</h2>
            </div>
          </div>

          <div className="category-grid">
            <button className="category-card">
              <span className="category-icon">✦</span>
              <span>Hair</span>
              <small>Stylists & braiders</small>
            </button>

            <button className="category-card">
              <span className="category-icon">♡</span>
              <span>Nails</span>
              <small>Nail artists & salons</small>
            </button>

            <button className="category-card">
              <span className="category-icon">◌</span>
              <span>Clothing</span>
              <small>Brands & boutiques</small>
            </button>

            <button className="category-card">
              <span className="category-icon">✧</span>
              <span>Beauty</span>
              <small>Beauty & skincare</small>
            </button>

            <button className="category-card">
              <span className="category-icon">⌁</span>
              <span>Food</span>
              <small>Food & treats</small>
            </button>

            <button className="category-card">
              <span className="category-icon">+</span>
              <span>Services</span>
              <small>More campus services</small>
            </button>
          </div>
        </section>

        <section className="featured">
          <div className="section-heading">
            <div>
              <p className="section-label">NEAR YOU</p>
              <h2>Popular on campus</h2>
            </div>

            <button className="view-all-button">
              View all →
            </button>
          </div>

          <div className="business-grid">
            {businesses.map((business, index) => (
              <button
                className="business-card"
                key={`${business.name}-${index}`}
                onClick={() => openBusiness(business)}
              >
                <div
                  className={`business-image image-${
                    index % 3
                  }`}
                >
                  <span>{business.type}</span>
                </div>

                <div className="business-card-content">
                  <div className="business-card-top">
                    <div>
                      <h3>{business.name}</h3>
                      <p>{business.category}</p>
                    </div>

                    <span className="heart">♡</span>
                  </div>

                  <div className="business-meta">
                    <span>★ {business.rating}</span>
                    <span>•</span>
                    <span>{business.distance}</span>
                  </div>

                  <div className="business-tags">
                    {business.services
                      .slice(0, 2)
                      .map((service) => (
                        <span key={service.name}>
                          {service.name}
                        </span>
                      ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="business-owner-section">
          <div>
            <p className="section-label">
              FOR BUSINESS OWNERS
            </p>

            <h2>
              Your campus is full of
              <span> customers.</span>
            </h2>

            <p>
              Put your business in front of students who are
              already looking for what you offer.
            </p>
          </div>

          <button
            className="owner-cta"
            onClick={() => setShowBusinessForm(true)}
          >
            List your business →
          </button>
        </section>

        <section className="bookings-section" id="bookings">
          <div className="section-heading">
            <div>
              <p className="section-label">
                YOUR SCHEDULE
              </p>
              <h2>Your bookings</h2>
            </div>
          </div>

          <div className="empty-bookings">
            <div className="empty-bookings-icon">
              ♡
            </div>

            <h3>No bookings yet</h3>

            <p>
              When you book a service, your appointments will
              appear here.
            </p>

            <a href="#discover">
              Explore businesses →
            </a>
          </div>
        </section>
      </main>

      {/* BUSINESS PROFILE MODAL */}

      {selectedBusiness && (
        <div
          className="modal-overlay"
          onClick={closeBusiness}
        >
          <div
            className="business-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              className="modal-close"
              onClick={closeBusiness}
            >
              ×
            </button>

            <div className="business-profile-header">
              <div className="profile-image">
                {selectedBusiness.type}
              </div>

              <div className="profile-main-info">
                <p className="profile-category">
                  {selectedBusiness.category}
                </p>

                <h2>{selectedBusiness.name}</h2>

                <p className="profile-location">
                  📍 {selectedBusiness.distance}
                </p>

                <div className="profile-rating">
                  ★ {selectedBusiness.rating}

                  <span>
                    ({selectedBusiness.reviews} reviews)
                  </span>
                </div>
              </div>

              <button
                className={`follow-button ${
                  followed ? "following" : ""
                }`}
                onClick={() =>
                  setFollowed(!followed)
                }
              >
                {followed ? "Following" : "Follow"}
              </button>
            </div>

            <div className="profile-stats">
              <div>
                <strong>
                  {selectedBusiness.followers}
                </strong>
                <span>Followers</span>
              </div>

              <div>
                <strong>{selectedBusiness.posts}</strong>
                <span>Posts</span>
              </div>

              <div>
                <strong>
                  {selectedBusiness.reviews}
                </strong>
                <span>Reviews</span>
              </div>
            </div>

            <div className="profile-tabs">
              <button
                className={
                  profileTab === "profile"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setProfileTab("profile")
                }
              >
                Profile
              </button>

              <button
                className={
                  profileTab === "portfolio"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setProfileTab("portfolio")
                }
              >
                Portfolio
              </button>

              <button
                className={
                  profileTab === "reviews"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setProfileTab("reviews")
                }
              >
                Reviews
              </button>
            </div>

            {profileTab === "profile" && (
              <div className="profile-content">
                <div className="profile-description">
                  <h3>About</h3>

                  <p>
                    {selectedBusiness.description}
                  </p>
                </div>

                <div className="social-buttons">
                  <button>Instagram</button>
                  <button>Message</button>
                  <button>Share</button>
                </div>

                <div className="services-section">
                  <div className="services-heading">
                    <h3>Services</h3>

                    <span>
                      {selectedBusiness.services.length}{" "}
                      available
                    </span>
                  </div>

                  <div className="services-list">
                    {selectedBusiness.services.map(
                      (service) => (
                        <div
                          className="service-item"
                          key={service.name}
                        >
                          <div>
                            <h4>{service.name}</h4>

                            <p>
                              {service.time} •{" "}
                              {service.price}
                            </p>
                          </div>

                          <button
                            onClick={() =>
                              alert(
                                "Booking calendar coming next!"
                              )
                            }
                          >
                            Book
                          </button>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}

            {profileTab === "portfolio" && (
              <div className="portfolio-grid">
                {selectedBusiness.portfolio.map(
                  (item, index) => (
                    <div
                      className={`portfolio-item portfolio-${index % 4}`}
                      key={item}
                    >
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
            )}

            {profileTab === "reviews" && (
              <div className="reviews-content">
                <div className="reviews-summary">
                  <strong>
                    {selectedBusiness.rating}
                  </strong>

                  <div>
                    <div className="stars">
                      ★★★★★
                    </div>

                    <p>
                      Based on{" "}
                      {selectedBusiness.reviews} reviews
                    </p>
                  </div>
                </div>

                <div className="review-item">
                  <div className="review-top">
                    <strong>Campus Student</strong>
                    <span>★★★★★</span>
                  </div>

                  <p>
                    Great service and really convenient
                    location near campus!
                  </p>
                </div>

                <div className="review-item">
                  <div className="review-top">
                    <strong>Happy Customer</strong>
                    <span>★★★★★</span>
                  </div>

                  <p>
                    Loved the experience. Would definitely
                    book again.
                  </p>
                </div>

                <button className="write-review">
                  Write a review
                </button>
              </div>
            )}

            <div className="modal-bottom-action">
              <button
                onClick={() =>
                  alert(
                    `Booking ${selectedBusiness.name} coming next!`
                  )
                }
              >
                Book appointment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LIST BUSINESS MODAL */}

      {showBusinessForm && (
        <div
          className="business-form-overlay"
          onClick={() =>
            setShowBusinessForm(false)
          }
        >
          <div
            className="business-form-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              className="modal-close"
              onClick={() =>
                setShowBusinessForm(false)
              }
            >
              ×
            </button>

            <div className="form-header">
              <p className="section-label">
                JOIN PINKMART
              </p>

              <h2>List your business</h2>

              <p>
                Reach students at{" "}
                <strong>{campus}</strong>.
              </p>
            </div>

            <form onSubmit={handleBusinessSubmit}>
              <label htmlFor="businessName">
                Business name
              </label>

              <input
                id="businessName"
                name="businessName"
                placeholder="e.g. Pink Beauty Studio"
                required
              />

              <label htmlFor="category">
                Category
              </label>

              <select
                id="category"
                name="category"
                required
              >
                <option value="">
                  Select a category
                </option>

                <option value="Hair">Hair</option>
                <option value="Nails">Nails</option>
                <option value="Clothing">
                  Clothing
                </option>
                <option value="Beauty">Beauty</option>
                <option value="Food">Food</option>
                <option value="Services">
                  Services
                </option>
              </select>

              <label htmlFor="description">
                Description
              </label>

              <textarea
                id="description"
                name="description"
                placeholder="Tell students about your business..."
                rows="4"
                required
              ></textarea>

              <label htmlFor="service">
                Main service
              </label>

              <input
                id="service"
                name="service"
                placeholder="e.g. Knotless Braids"
                required
              />

              <div className="form-row">
                <div>
                  <label htmlFor="price">Price</label>

                  <input
                    id="price"
                    name="price"
                    placeholder="$50"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="duration">
                    Duration
                  </label>

                  <input
                    id="duration"
                    name="duration"
                    placeholder="2 hours"
                    required
                  />
                </div>
              </div>

              <label htmlFor="instagram">
                Instagram
              </label>

              <input
                id="instagram"
                name="instagram"
                placeholder="@yourbusiness"
              />

              <button
                className="submit-business-button"
                type="submit"
              >
                Add my business →
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
