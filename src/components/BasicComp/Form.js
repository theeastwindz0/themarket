import styles from "../CSS/Form.module.css";
import React, { useEffect, useState } from "react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, SetPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let error = [];

    const isFirstNameValid = firstname !== "";
    const isLastNameValid = lastname !== "";
    const isPhoneValid = phone !== "";
    const isEmailValid = email.includes("@");
    const isMessageValid = message !== "";

    if (!isFirstNameValid) {
      setFirstnameError(true);
      error.push("error");
    } else {
      setFirstnameError(false);
    }
    if (!isLastNameValid) {
      setLastnameError(true);
      error.push("error");
    } else {
      setLastnameError(false);
    }
    if (!isPhoneValid) {
      SetPhoneError(true);
      error.push("error");
    } else {
      SetPhoneError(false);
    }
    if (!isEmailValid) {
      setEmailError(true);
      error.push("error");
    } else {
      setEmailError(false);
    }
    if (!isMessageValid) {
      setMessageError(true);
      error.push("error");
    } else {
      setMessageError(false);
    }

    if (error.length > 0) {
    } else {
      const currentDate = new Date();
      const formDataToSend = {
        FirstName: firstname,
        LastName: lastname,
        PhoneNo: phone,
        EmailAddress: email,
        Message: message,
        Date: currentDate,
      };

      setFirstname("");
      setLastname("");
      setPhone("");
      setEmail("");
      setMessage("");

      props.formDataSubmit(formDataToSend);
      onModalShowHandler();
    }
  };

  const onModalShowHandler = () => {
    setHasSubmitted(true);
  };

  const onModalHideHandler = () => {
    setHasSubmitted(false);
  };

  return (
    <React.Fragment>
      {hasSubmitted && (
        <div onClick={onModalHideHandler} className={styles.modal}>
          <p>
            <span className={styles.icons}>
              <FontAwesomeIcon icon={faCheckCircle} />
            </span>
            Your response was submitted.
          </p>
          <button onClick={onModalHideHandler}>Close</button>
        </div>
      )}
      <div className={styles.form_main}>
        <form className={styles.form}>
          <div className={styles.form_box_1}>
            <label htmlFor="firstname">FIRST NAME</label>
            <input
              value={firstname}
              onChange={(event) => setFirstname(event.target.value)}
              name="firstname"
              type="text"
            />
          </div>
          {firstnameError && (
            <p className={styles.error}>First Name is Required</p>
          )}
          <div className={styles.form_box_1}>
            <label htmlFor="lastname">LAST NAME</label>
            <input
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
              name="lastname"
              type="text"
            />
          </div>
          {lastnameError && (
            <p className={styles.error}>Last Name is Required</p>
          )}

          <div className={styles.form_box_1}>
            <label htmlFor="email">EMAIL</label>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              name="email"
              type="email"
            />
          </div>
          {emailError && <p className={styles.error}>Email is not Valid.</p>}

          <div className={styles.form_box_1}>
            <label htmlFor="phone">PHONE</label>
            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              name="phone"
              type="number"
              maxLength={10}
            />
          </div>
          {phoneError && <p className={styles.error}>Phone is Required</p>}

          <div className={styles.form_box_1}>
            <label htmlFor="message">MESSSAGE</label>
            <textarea
              value={message}
              name="message"
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
          {messageError && <p className={styles.error}>Message is Required</p>}

          <button onClick={onSubmitHandler}>SUBMIT</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Form;
