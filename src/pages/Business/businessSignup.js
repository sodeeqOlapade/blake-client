import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './businessSignup.module.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import useForm from '../../helpers/useForm';
import { businessValidation } from '../../helpers/validations';
import FormAlert from '../../components/Alerts/Form Alerts';

function BusinessSignup(props) {
  const { values, errors, handleChange, handleSubmit } = useForm(
    signupBusiness,
    businessValidation
  );

  const [alert, setAlert] = useState({ show: false, type: '', msg: '' });

  async function signupBusiness(values) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const {
      name,
      email,
      password,
      phonenumber: phoneOne,
      address: officeAddress
    } = values;

    const body = {
      name,
      email,
      password,
      phoneOne,
      officeAddress
    };
    try {
      const res = await axios({
        method: 'post',
        url: 'http://localhost:8000/api/businesses',
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
          <>
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
              {errors.name && (
                <p className={styles.inputError}>{errors.name}</p>
              )}
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
                placeholder="phone number"
                id="phonenumber"
                value={values.phonenumber || ''}
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
                value={values.address || ''}
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
