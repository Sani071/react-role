import React from "react";
import LandNav from "../common/LandNav";
import BannerImage from "../../assets/images/landing/landing.png";
import AuthFooter from "../common/AuthFooter";
import LinkBtn from "../common/LinkBtn";
const Landing = () => {
  return (
    <React.Fragment>
      <LandNav />
      <main>
        <section className="landing-banner-section">
          <div className="roy-container">
            <div className="row">
              <div className="col-md-7">
                <div className="l-banner-left">
                  <img src={BannerImage} alt="BannerImage" />
                </div>
              </div>
              <div className="col-md-5">
                <div className="l-banner-right">
                  <div className="l-banner-content">
                    <h2>
                      Explore with the best social media platform in the world!
                    </h2>
                    <p>
                      Break down the barriers. Be authentic, think positive.
                      Millions of head together can solve all problems. Let's be
                      united. Extend your hand, All are waiting...{" "}
                    </p>
                    <div className="text-center">
                      <LinkBtn
                        url="create_an_account"
                        text="Create New Account"
                        classNames={["deep-green-bg"]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <AuthFooter />
    </React.Fragment>
  );
};

export default Landing;
