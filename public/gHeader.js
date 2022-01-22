function gHeader(){
    return `
    <div class="fixed-top" id="gHeader">
    <!--  bg-light navbar  -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-black nB gNavBar">
      <div class="gNavLeftElement">
        <div
          class="d-flex collapse navbar-collapse container-fluid leftElement"
          id="navbarScroll"
        >
          <a class="navbar-brand" href="Home.html"
            ><img
              class="navImg"
              src="https://www.sec.gov/Archives/edgar/data/1725579/000162828019002420/pluralsightlogob01.jpg"
              alt="logo"
          /></a>

          <div class="nav-item">
            <a
              class="nav-link text-white"
              aria-current="page"
              href="#"
              onclick="gplatform()"
              >Platform
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                /></svg
            ></a>
          </div>

          <div class="nav-item">
            <a onclick="gProducts()" class="nav-link text-white" href="#"
              >Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </a>
          </div>

          <div class="nav-item">
            <a onclick="gResource()" class="nav-link text-white" href="#">
              Resources
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </a>
          </div>

          <div class="nav-item">
            <a
              onclick="gForIndividuals()"
              class="nav-link text-white"
              href="#"
              >For Individuals
            </a>
          </div>
          <!-- </ul> -->
        </div>
      </div>
      <div class="d-flex gNavRightElement">
        <a href="#">
          <i class="col-1 fa fa-search text-white bg-black p-4 mt-2"></i>
        </a>
        <div class="col-5 nav-item mt-3">
          <a onclick="gSignIn()" class="nav-link text-white mb-3" href="#">
            Sign In
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="25"
              fill="currentColor"
              class="bi bi-chevron-down"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </a>
        </div>
        <button
          onclick="gTFF()"
          class="
            col-6
            btn btn-outline-light
            text-white
            btn-black
            btn2
            h-1
            mt-3
            nav-item
          "
          type="submit"
        >
          TRY FOR FREE
        </button>
      </div>
    </nav>
    <!-- Show -->
    <div id="dropMenu">
      <div id="gPlatformshow" style="display: none; width: max-content">
        <div class="gPlatform" style="width: fit-content; padding: 10px">
          <div
            class="d-flex card text-white bg-black mb-3"
            style="
              max-width: 50rem;
              flex-direction: row;
              justify-content: space-around;
              padding: 10px;
              margin: 2px;
            "
          >
            <div class="partA">
              <div class="card-header text-secondary px-5">
                WAYS TO UPSKILL
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  <img
                    src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/dashboard.png"
                    alt=""
                  />
                  Courses
                </h5>
                <h5 class="card-title">
                  <img
                    src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/iq.png"
                    alt=""
                  />
                  Skill Assessments
                </h5>
                <h5 class="card-title">
                  <img
                    src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/cloud.png"
                    alt=""
                  />
                  Labs
                  <a href="#" class="badge badge-Danger bg-danger b1">NEW</a>
                </h5>
                <h5 class="card-title">
                  <img
                    src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/hand.png"
                    alt=""
                  />
                  Hands-on learning
                </h5>
                <h5 class="card-title">
                  <img
                    src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/certifications.png"
                    alt=""
                  />
                  Certification prep
                </h5>

                <h5 class="card-title">
                  <img
                    src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/live-classes-icon.svg"
                    alt=""
                  />
                  Live Classes
                  <a href="#" class="badge badge-Danger bg-danger b1">NEW</a>
                </h5>

                <h5 class="card-title">
                  <img
                    src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/analytics.png"
                    alt=""
                  />
                  Team efficiency
                </h5>
              </div>
            </div>
            <div
              class="d-flex bg-white partB"
              style="height: 280px; margin: 15px"
            >
              <div class="vr"></div>
            </div>
            <div class="partC">
              <div class="card-header text-secondary px-5">SKILLS FOR</div>
              <div class="card-body">
                <h6 class="card-title"><small>Courses</small></h6>
                <h6 class="card-title">
                  <small>Software development</small>
                </h6>
                <h6 class="card-title"><small>IT ops</small></h6>
                <h6 class="card-title">
                  <small>Info & cyber security</small>
                </h6>
                <h6 class="card-title">
                  <small>Cloud computing</small>
                </h6>
                <h6 class="card-title">
                  <small>Machine learning / AI</small>
                </h6>
                <h6 class="card-title">
                  <small>Data professional</small>
                </h6>
                <hr />
                <small class="card-title"
                  ><a
                    href="#"
                    style="text-decoration: none; color: white; margin: 10px"
                  >
                    See our entire course library
                  </a>
                </small>

                <div
                  class="vr"
                  style="
                    background-color: white;
                    width: 2px;
                    height: 35px;
                    margin-bottom: -15px;
                  "
                ></div>
                <small class="card-title"
                  ><a
                    href=""
                    style="text-decoration: none; color: white; margin: 10px"
                  >
                    Check out the Technology Index</a
                  ></small
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="gProducts" class="gCont gProduct">
        <div class="gBox">
          <div class="card">
            <img
              src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/Skill_logo_white.png"
              alt="Skill"
              class="skillImg"
            />
            <h6>Build tech skills to drive results</h6>
          </div>
          <hr />
          <h6>What is Skills?</h6>
          <h6>View plans</h6>
        </div>
        <div
          class="d-flex bg-white partB"
          style="height: 150px; margin: 15px"
        >
          <div class="vr"></div>
        </div>
        <div class="gBox">
          <div class="card">
            <img
              src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/Flow_Logo_white.png"
              alt="Flow"
              class="skillImg"
            />
            <h6>Get insights into your workflow</h6>
          </div>
          <hr />
          <h6>What is Flow?</h6>
          <h6>View plans</h6>
        </div>
      </div>
      <div id="gResource" class="gResource">
        <div
          class="d-flex card text-white bg-black mb-3"
          style="
            max-width: 50rem;
            flex-direction: row;
            justify-content: space-around;
            padding: 10px;
            margin: 2px;
          "
        >
          <div class="partA">
            <div class="card-header text-secondary px-5">LEARN</div>
            <div class="card-body">
              <h6 class="card-title"><small> Blog </small></h6>
              <h6 class="card-title"><small>Customer stories </small></h6>
              <h6 class="card-title"><small>Resource center </small></h6>
              <h6 class="card-title"><small> Guides Support</small></h6>
              <h6 class="card-title"><small> App download</small></h6>
            </div>
          </div>
          <div
            class="d-flex bg-white partB"
            style="height: 150px; margin: 45px"
          >
            <div class="vr"></div>
          </div>
          <div class="partC">
            <div class="card-header text-secondary px-5">CONNECT</div>
            <div class="card-body">
              <h6 class="card-title"><small>Events</small></h6>
              <h6 class="card-title"><small>Webinars</small></h6>
              <h6 class="card-title"><small>Podcast</small></h6>
            </div>
          </div>
        </div>
      </div>
      <div id="gSignIn" class="sBox gSignIn">
        <div >
          <p>SIGN IN WITH</p>
          <a href="signin.html">
          <img
            src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/Skill_logo_white.png"
            alt="skill"
            class="snImg"                     
          />
          </a>
        </div>
       
        <div class="d-flex bg-white partB" style="height: 100px; margin: 15px; margin-left:20px">
          <div class="vr"></div>
        </div>
        <div>
          <p>SIGN IN WITH</p>
         
          <img
            src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/Flow_Logo_white.png"
            alt="flow"
            class="snImg"
          />
          
        </div>
      </div>
    </div>
  </div>
    ` 
}
export default gHeader