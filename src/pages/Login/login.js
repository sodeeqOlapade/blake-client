import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import styles from './login.module.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Input from '../../components/input/input';
import Button from '../../components/button/button';

function Login(props) {
  return (
    <>
      <Header />
      <section className={styles.mainSection}>
        <img alt="login-svg" src="assets/images/email-illustration1.svg" />
        <div className={styles.formcontainer}>
          <h2>Welcome Back,</h2>
          <h3>Please Login.</h3>
          <form>
            <Input
              placeholder="E.g abx@example.com"
              id="email"
              value=""
              label="email"
              type="email"
              handleChange=""
            />
            <Input
              placeholder="E.g $abc123$"
              id="password"
              value=""
              label="password"
              type="password"
              handleChange=""
            />
            <Button
              type="primary"
              textValue="Login"
              className={styles.signupButton}
            />
          </form>

          <p>
            Don't have an account?{' '}
            <Link className={styles.link} to="/signup">
              Singup
            </Link>{' '}
            <br />
            <Link className={styles.link} to="/forgot-password">
              {' '}
              Forgot Password?
            </Link>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;
