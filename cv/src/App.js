import './App.css';
import avatar from './user-documentation.png';

function App() {
  return (
    <main>
      <div className="container">
        <div id="header-line">
        </div>

        <div id="bio">
          <div className="border">
            <img src={avatar} alt="Avatar" />

            <div className="text">
              <h2>Ali Talibov</h2>
              <h3>FullStack Developer</h3>
            </div>
          </div>
        </div>

        <div className="content">
          <div id="left">
            <div className="objective">
              <h2>Objective</h2>
              <p>
                I have a bachelor's degree (Faculty of IT) and now I am pursuing a master's degree (Faculty of Information Systems Management). I also took the Code Academy course, where I solidified my knowledge of HTML and CSS, as well as mastered the basics of Bootstrap, JavaScript, C#, and SQL.
              </p>
            </div>

            <div className="contact">
              <h2>Contact</h2>

              <ul>
                <li>talibov.ali2001@mail.ru <i class="fa-regular fa-envelope"></i></li>
                <li>+994506145036 <i class="fa-solid fa-phone"></i></li>
                <li>Xetai, Izzet Orucova 16, Baku, Azerbaijan <i class="fa-solid fa-location-dot"></i></li>
                <li><a href="https://github.com/Ali200119">GitHub</a></li>
              </ul>
            </div>

            <div className="skills">
              <h2>Skills</h2>

              <ul>
                <li>ASP.Net Core</li>
                <li>API</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>BootStrap</li>
                <li>SQL</li>
                <li>C#</li>
                <li>Microsoft Office</li>
                <li>SCSS</li>
                <li>jQuery</li>
              </ul>
            </div>

            <div className="languages">
              <h2>Languages</h2>
              <ul>
                <li>Azerbaijan</li>
                <li>English</li>
                <li>Azerbaijan</li>
              </ul>
            </div>
          </div>

          <div id="right">
            <div className="education">
              <h2>Education</h2>

              <div className="bachelor">
                <div className="title">
                  <h3>Bachelor</h3>
                  <h4>09/2018-06/2022</h4>
                </div>

                <div className="university">
                  <h4>Azerbaijan Architecture and Construction University</h4>
                </div>
              </div>

              <div className="magistr">
                <div className="title">
                  <h3>Magistr</h3>
                  <h4>09/2022-Present</h4>
                </div>

                <div className="university">
                  <h4>Azerbaijan Architecture and Construction University</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;