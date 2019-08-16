import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import styles from './signup.module.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Input from '../../components/input/input';
import Button from '../../components/button/button';

function Signup(props) {
  const [business, setBusiness] = useState(true);

  const handleClick = event => {
    setBusiness(!business);
  };
  return (
    <>
      <Header />
      <section className={styles.mainSection}>
        <img alt="login-svg" src="assets/images/email-illustration1.svg" />
        <div className={styles.formcontainer}>
          <h2>Need an account?</h2>
          <h3>Please Signup.</h3>
          {business ? (
            <>
              <form>
                <Input
                  placeholder="fullname"
                  id="name"
                  value=""
                  label="name"
                  type="text"
                  handleChange=""
                />
                <Input
                  placeholder="email"
                  id="email"
                  value=""
                  label="email"
                  type="email"
                  handleChange=""
                />
                <Input
                  placeholder="phone number"
                  id="phonenumber"
                  value=""
                  label="phonenumber"
                  type="number"
                  handleChange=""
                />
                <Input
                  placeholder="address"
                  id="address"
                  value=""
                  label="address"
                  type="text"
                  handleChange=""
                />
                <Input
                  placeholder="password"
                  id="password"
                  value=""
                  label="password"
                  type="password"
                  handleChange=""
                />
                <Input
                  placeholder="confirm password"
                  id="cpassword"
                  value=""
                  label="cpassword"
                  type="password"
                  handleChange=""
                />

                <Button
                  primary={false}
                  textValue="Sign Up"
                  className={styles.signupButton}
                />
              </form>

              <p>
                Already have an account?
                <Link className={styles.link} to="/login">
                  Login
                </Link>
              </p>
              <div id={styles.business}>
                <Button
                  primary={true}
                  textValue="SIGN UP AS A CUSTOMER"
                  className={styles.signupButton}
                  click={handleClick}
                />
              </div>
            </>
          ) : (
            <>
              <form>
                <Input
                  placeholder="fullname"
                  id="name"
                  value=""
                  label="name"
                  type="text"
                  handleChange=""
                />
                <Input
                  placeholder="email"
                  id="email"
                  value=""
                  label="email"
                  type="email"
                  handleChange=""
                />
                <Input
                  placeholder="password"
                  id="password"
                  value=""
                  label="password"
                  type="password"
                  handleChange=""
                />
                <Input
                  placeholder="confirm password"
                  id="cpassword"
                  value=""
                  label="cpassword"
                  type="password"
                  handleChange=""
                />

                <Button
                  primary={false}
                  textValue="Sign Up"
                  className={styles.signupButton}
                />
              </form>

              <p>
                Already have an account?
                <Link className={styles.link} to="/login">
                  Login
                </Link>
                <br />
              </p>
              <div id={styles.business}>
                <Button
                  primary={true}
                  textValue="SIGN UP AS A BUSINESS"
                  className={styles.signupButton}
                  click={handleClick}
                />
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Signup;
