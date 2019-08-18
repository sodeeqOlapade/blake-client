import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import styles from './businessSignup.module.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import useForm from '../../helpers/useForm';
import { customerValidation } from '../../helpers/validations';

function BusinessSignup(props) {
  const [business, setBusiness] = useState(true);
  const { values, errors, handleChange, handleSubmit } = useForm(
    signup,
    customerValidation
  );

  const handleClick = event => {
    setBusiness(!business);
  };

  function signup() {
    console.log('No errors, submit callback called!');
  }

  return (
    <>
      <Header />
      <section className={styles.mainSection}>
        <img alt="login-svg" src="assets/images/email-illustration1.svg" />
        <div className={styles.formcontainer}>
          <h2>Need an account?</h2>
          <h3>Please Signup.</h3>
          <>
            <form onSubmit={handleSubmit}>
              <Input
                placeholder="fullname"
                id="name"
                value={values.name}
                label="name"
                type="text"
                handleChange={handleChange}
              />
              {errors.name && (
                <p className={styles.inputError}>{errors.name}</p>
              )}
              <Input
                placeholder="email"
                id="email"
                value={values.email}
                label="email"
                type="email"
                handleChange={handleChange}
              />
              {errors.email && (
                <p className={styles.inputError}>{errors.email}</p>
              )}

              <Input
                placeholder="phone number"
                id="phonenumber"
                value={values.phonenumber}
                label="phonenumber"
                type="number"
                handleChange={handleChange}
              />
              {errors.phonenumber && (
                <p className={styles.inputError}>{errors.phonenumber}</p>
              )}

              <Input
                placeholder="address"
                id="address"
                value={values.address}
                label="address"
                type="text"
                handleChange={handleChange}
              />
              {errors.address && (
                <p className={styles.inputError}>{errors.address}</p>
              )}

              <Input
                placeholder="password"
                id="password"
                value={values.password}
                label="password"
                type="password"
                handleChange={handleChange}
              />
              {errors.password && (
                <p className={styles.inputError}>{errors.password}</p>
              )}

              <Input
                placeholder="confirm password"
                id="cpassword"
                value={values.cpassword}
                label="cpassword"
                type="password"
                handleChange={handleChange}
              />
              {errors.cpassword && (
                <p className={styles.inputError}>{errors.cpassword}</p>
              )}

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
              <Link to="/signup">
                <Button
                  primary={true}
                  textValue="SIGN UP AS A CUSTOMER"
                  className={styles.signupButton}
                  // click={handleClick}
                />
              </Link>
            </div>
          </>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BusinessSignup;
