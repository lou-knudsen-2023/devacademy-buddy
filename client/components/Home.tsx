// import function from actions
import { useAppDispatch, useAppSelector } from '../hooks'


//placeholder classNames to be updated when we start SCSS
function Home() {
  return (
    <>
      <div>
        <section className="headerContainer">
          <div className="mainImage">
          {/* <img></img> */}
          </div>
          <div>
            WELCOME TO BUDDY
          </div>
        </section>

        <section className="missionContainer">
          <div>
            INSERT MISSION STATEMENT HERE
          </div>
        </section>

        <section className="mainContainer">
          <div className="cardContainer">
            <link>
              {/* <img></img> */}
              <div>Sign up</div>
            </link>
          </div>

          <div className="cardContainer">
            <link>
              {/* <img></img> */}
              <div>Create a profile</div>
            </link>
          </div>

          <div className="cardContainer">
            <link>
              {/* <img></img> */}
              <div>View all buddies</div>
            </link>
          </div>

        </section>
      </div>
    </>
  )
}

export default Home
