import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './signup.module.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import useForm from '../../helpers/useForm';
import { customerValidation } from '../../helpers/validations';
import FormAlert from '../../components/Alerts/Form Alerts';

function Signup(props) {
  const { values, errors, handleChange, handleSubmit } = useForm(
    signup,
    customerValidation
  );
  const [alert, setAlert] = useState({ show: false, type: '', msg: '' });

  async function signup(values) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const { name, email, password } = values;

    const body = {
      name,
      email,
      password
    };
    try {
      const res = await axios({
        method: 'post',
        url: 'http://localhost:8000/api/users',
        data: body,
        config
      });

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
        msg: 'Sign Up Failed! Please Try again.'
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
          <h2>Need an account?</h2>
          <h3>Please Signup.</h3>
          <form onSubmit={handleSubmit}>
            {alert.show ? (
              <FormAlert type={alert.type}>{alert.msg}</FormAlert>
            ) : (
              ''
            )}
            <Input
              placeholder="fullname"
              id="name"
              value={values.name || ''}
              label="name"
              type="text"
              handleChange={handleChange}
            />
            {errors.name && <p className={styles.inputError}>{errors.name}</p>}
            <Input
              placeholder="email"
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
              placeholder="password"
              id="password"
              value={values.password || ''}
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
              value={values.cpassword || ''}
              label="cpassword"
              type="password"
              handleChange={handleChange}
            />
            {errors.cpassword && (
              <p className={styles.inputError}>{errors.cpassword}</p>
            )}
            <Button
              type={false}
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
            <Link to="/business_signup">
              <Button
                primary={true}
                textValue="SIGN UP AS A BUSINESS"
                className={styles.signupButton}
              />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Signup;
