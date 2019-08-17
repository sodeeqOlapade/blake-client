import React, { useContext } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import styles from './home.module.css';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import { Link } from 'react-router-dom';
import Card from '../../components/card/card';
import LoginstatusContext from '../../context';

function Home(props) {
  const loogedIn = useContext(LoginstatusContext);
  console.log('from home: ', loogedIn);
  return (
    <>
      <Header />
      <div className={styles.mainDisplayText}>
        <p>Seamless communication</p>
        <p>between businesses and customers</p>
        <span>
          .Blake serves as a conduit for free flow of instant feedback
        </span>
        <span>from customers to businesses they patronise to</span>
        <span>enhance growth and productivity.</span>
        <form className={styles.search}>
            <Input
              placeholder="search for a business"
              id="search"
              value=""
              label="search"
              type="text"
              handleChange=""
            />
            <Button
              type="primary"
              textValue="Search"
              className={styles.signupButton}
            />
          </form>
        <Link to="/signup">
          <Button id={styles.getStarted} primary={false} textValue="Get Started" />
        </Link>
      </div>

      <h2 className={styles.pros}>Why does your business needs Blake?</h2>

      <div className={styles.cards}>
        <Card
          title="24/7 Support"
          imagename="clock-icon.png"
          description="img elements must have an alt prop, either with meaningful text, or an empty string for decorative images "
        />
        <Card
          title="Convenience"
          imagename="convenience.svg"
          description="img elements must have an alt prop, either with meaningful text, or an empty string for decorative images "
        />{' '}
        <Card
          title="No Paper work"
          imagename="paperwork.png"
          description="img elements must have an alt prop, either with meaningful text, or an empty string for decorative images "
        />
        <Card
          title="Remote Access"
          imagename="remote.png"
          description="img elements must have an alt prop, either with meaningful text, or an empty string for decorative images "
        />
        <Card
          title="Reduced Cost"
          imagename="reducedcost.png"
          description="img elements must have an alt prop, either with meaningful text, or an empty string for decorative images "
        />
        <Card
          title="Coordinated Feedback"
          imagename="feedback.png"
          description="img elements must have an alt prop, either with meaningful text, or an empty string for decorative images "
        />
      </div>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerText}>
          <div className={styles.texts}>
            <span>
              Businesses <span className={styles.business}>build</span>
            </span>
            <span>
              Users <span className={styles.use}>use</span>
            </span>
            <span className={styles.connect}>
              .Blake <span>connects</span>
            </span>
          </div>
        </div>

        <div className={styles.testimonials}>
          <h1>
            Testimonials
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
