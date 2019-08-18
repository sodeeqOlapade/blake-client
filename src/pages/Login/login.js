import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import styles from './login.module.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import useForm from '../../helpers/useForm';
import { loginValidation } from '../../helpers/validations';

function Login(props) {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    loginValidation
  );

  function login() {
    console.log('No errors, submit callback called!');
  }

  return (
    <>
      <Header />
      <section className={styles.mainSection}>
        <img alt="login-svg" src="assets/images/email-illustration1.svg" />
        <div className={styles.formcontainer}>
          <h2>Welcome Back,</h2>
          <h3>Please Login.</h3>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="E.g abx@example.com"
              id="email"
              value={values.email || ''}
              label="email"
              type="email"
              handleChange={handleChange}
            />
            {errors.email && <p className={styles.inputError}>{errors.email}</p>}
            <Input
              placeholder="E.g $abc123$"
              id="password"
              value={values.password || ''}
              label="password"
              type="password"
              handleChange={handleChange}
            />
            {errors.password && (
              <p className={styles.inputError}>{errors.password}</p>
            )}
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
