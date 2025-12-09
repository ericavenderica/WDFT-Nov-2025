// src/App.jsx
import "./App.css";
import discordLogo from "./assets/discord-logo-white.png";
import hamImg from "./assets/menu-icon.png";
import backgroundImg from "./assets/discord-background.png";
function App() {
  return (
    <div className="App">
      <nav>
        <img src={discordLogo} alt="discord" />
        <img src={hamImg} alt="hamburger" />
      </nav>
      <main>
        <h1>Imagine a place...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <section id="btn-container">
          <button>Download for Mac</button>
          <button className="discord-button">
            Open Discord in your Browser
          </button>
        </section>
        <img id="background-image" alt="backImage" src={backgroundImg} />
      </main>
    </div>
  );
}

export default App;
