export const loginValidation = function(values) {
  let errors = {};
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be 8 or more characters';
  }
  return errors;
};

export const businessValidation = function(values) {
  let errors = {};
  if (!values.name) {
    errors.name = 'Fullname is required';
  } else if (!/[a-z A-Z \s]/.test(values.name)) {
    errors.name = 'Fullname is invalid';
  }
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.phonenumber) {
    errors.phonenumber = 'Phonenumber is required';
  } else if (!/^[0]\d{10}$/.test(values.phonenumber)) {
    errors.phonenumber = 'Enter a valid phonenumber(11 digits)';
  }
  if (!values.address) {
    errors.address = 'address is required';
  } else if (!/[A-Za-z0-9'\.\-\s\,]/.test(values.address)) {
    errors.address = 'Enter a valid address';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be 8 or more characters';
  }
  if (!values.cpassword) {
    errors.cpassword = 'Confirm Password is required';
  } else if (values.cpassword !== values.password) {
    errors.cpassword = 'Passwords must match';
  }
  return errors;
};

export const customerValidation = function(values) {
  let errors = {};
  if (!values.name) {
    errors.name = 'Fullname is required';
  } else if (values.name.length < 3) {
    errors.name = 'Name should be at least 3 characters long';
  } else if (!/[a-z A-Z \s]/.test(values.name)) {
    errors.name = 'Fullname is invalid';
  }
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be 8 or more characters';
  }
  if (!values.cpassword) {
    errors.cpassword = 'Confirm Password is required';
  } else if (values.cpassword !== values.password) {
    errors.cpassword = 'Passwords must match';
  }
  return errors;
};
