import React from 'react';

import './FormAlert.css';

function FormAlert(props) {
  return (
    <div className={props.type}>
      <span>
        {props.type === 'form-alert-danger' ? (
          <i className="fa fa-ban" aria-hidden="true" />
        ) : (
          <i className="fa fa-check" aria-hidden="true" />
        )}
      </span>
      {props.children}
    </div>
  );
}

export default FormAlert;
