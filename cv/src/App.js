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
                <li>talibov.ali2001@mail.ru <i className="fa-regular fa-envelope"></i></li>
                <li>+994506145036 <i className="fa-solid fa-phone"></i></li>
                <li>Xetai, Izzet Orucova 16, Baku, Azerbaijan <i className="fa-solid fa-location-dot"></i></li>
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

            <div className="experience">
              <h2>Experience</h2>

              <div className="shop-assistant">
                <div className="title">
                  <h3>Shop Assistant</h3>
                  <h4>03/2021-03/2021</h4>
                </div>

                <div className="company">
                  <h4>Geek.az</h4>
                  <h4>Help the seller with buyers</h4>
                </div>
              </div>

              <div className="busboy">
                <div className="title">
                  <h3>Busboy</h3>
                  <h4>02/2021-05/2021</h4>
                </div>

                <div className="company">
                  <h4>Shakespeare Coffee & Bistro</h4>
                  
                  <ul>
                    <li>Cleaning and preparing tables</li>
                    <li>Cutlery cleaning</li>
                    <li>Bring food to the table</li>
                  </ul>
                </div>
              </div>

              <div className="cashier-assistant">
                <div className="title">
                  <h3>Cashier Assistant</h3>
                  <h4>07/2021-09/2021</h4>
                </div>

                <div className="company">
                  <h4>Neptun Supermarket</h4>
                  
                  <ul>
                    <li>Packaging products in bags</li>
                    <li>Assist customers in carrying heavy packages of groceries</li>
                    <li>Delivery of products to the house</li>
                  </ul>
                </div>
              </div>
            </div>

            <hr/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;