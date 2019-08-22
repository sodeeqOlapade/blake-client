import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './login.module.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import useForm from '../../helpers/useForm';
import { loginValidation } from '../../helpers/validations';
import FormAlert from '../../components/Alerts/Form Alerts';

function Login(props) {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    loginValidation
  );

  const [alert, setAlert] = useState({ show: false, type: '', msg: '' });

  async function login(values) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const { email, password } = values;

    const body = JSON.stringify({
      email,
      password
    });

    try {
      const res = await axios.post(
        'http://localhost:8000/api/auth',
        body,
        config
      );

      if (res.data.statusCode !== 200) {
        setAlert({
          show: true,
          type: 'form-alert-danger',
          msg: res.data.message
        });
        setTimeout(() => {
          setAlert({
            ...alert,
            show: false
          });
        }, 3000);
        return;
      }
      localStorage.setItem('token', res.data.token);

      setAlert({
        show: true,
        type: 'form-alert-success',
        msg: res.data.message
      });
      setTimeout(() => {
        setAlert({
          ...alert,
          show: false
        });
      }, 3000);
    } catch (error) {
      setAlert({
        show: true,
        type: 'form-alert-danger',
        msg: 'Login Failed! Please Try again.'
      });
      setTimeout(() => {
        setAlert({
          ...alert,
          show: false
        });
      }, 5000);
    }
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
            {alert.show ? (
              <FormAlert type={alert.type}>{alert.msg}</FormAlert>
            ) : (
              ''
            )}
            <Input
              placeholder="E.g abx@example.com"
              id="email"
              value={values.email || ''}
              label="email"
              type="email"
              handleChange={handleChange}
            />
            {errors.email && (
              <p className={styles.inputError}>{errors.email}</p>
            )}
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
