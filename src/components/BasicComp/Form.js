import styles from "../CSS/Form.module.css";
import React, { useEffect, useState } from "react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = (props) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [phoneError, SetPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  //   const [formIsValid, setFormIsValid] = useState(true);

  //   useEffect(() => {
  //     const identifier = setTimeout(() => {
  //       setFormIsValid(
  //         firstnameError === false,
  //         lastnameError === false,
  //         phoneError === false,
  //         messageError === false,
  //         emailError !== ""
  //       );
  //     }, 200);

  //     return () => {
  //       clearTimeout(identifier);
  //     };
  //   }, [firstnameError, lastnameError, phoneError, messageError, emailError]);

  const onEnteringData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (formData.firstname !== "") setFirstnameError(false);
    if (formData.lastname !== "") setLastnameError(false);
    if ((formData.email !== "") & formData.email.includes("@"))
      setEmailError("");
    if (formData.phone !== "") SetPhoneError(false);
    if (formData.message !== "") setMessageError(false);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setTimeout(() => {
        if (formData.firstname === "") setFirstnameError(true);

    if (formData.lastname === "") setLastnameError(true);

    if (formData.phone === "") SetPhoneError(true);

    if (formData.email === "") setEmailError("Email is required");

    if (!formData.email.includes("@"))
      setEmailError("Enter a valid Email Address");

    }, 2000);

 
      if (
        (firstnameError === false,
        lastnameError === false,
        phoneError === false,
        messageError === false,
        emailError === "")
      ) {
        const currentDate = new Date();
        const formDataToSend = {
          FirstName: formData.firstname,
          LastName: formData.lastname,
          PhoneNo: formData.phone,
          EmailAddress: formData.email,
          Message: formData.message,
          Date: currentDate,
        };
        console.log(currentDate);

        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          message: "",
        });

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
              value={formData.firstname}
              onChange={onEnteringData}
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
              value={formData.lastname}
              onChange={onEnteringData}
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
              value={formData.email}
              onChange={onEnteringData}
              name="email"
              type="email"
            />
          </div>
          {emailError && <p className={styles.error}>{emailError}</p>}

          <div className={styles.form_box_1}>
            <label htmlFor="phone">PHONE</label>
            <input
              value={formData.phone}
              onChange={onEnteringData}
              name="phone"
              type="number"
              maxLength={10}
            />
          </div>
          {phoneError && <p className={styles.error}>Phone is Required</p>}

          <div className={styles.form_box_1}>
            <label htmlFor="message">MESSSAGE</label>
            <textarea
              value={formData.message}
              name="message"
              onChange={onEnteringData}
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
