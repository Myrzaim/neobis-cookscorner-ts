import React, { useState } from "react";
import styles from "./authForm.module.scss";
import { useForm } from "react-hook-form";
import gmailIcon from "../../assets/icons/email.svg";
import novisible from "../../assets/icons/visibility_off.svg";
import visible from "../../assets/icons/visibility.svg";

interface IFormInput {
  email: string;
  password: string;
}

const AuthForm = () => {
  const [visibleIcon, setVisibleIcon] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
    console.log(JSON.stringify(data));
  };
  const handleClickIcon = () => {
    setVisibleIcon(!visibleIcon);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label>Gmail</label>
        <input
          placeholder="Enter your Gmail"
          {...register("email", {
            required: "*Required field",
            pattern: /^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/i,
          })}
        />
        {errors?.email && (
          <span className={styles.form__errorsGmail}>
            {errors?.email?.message || "*Must contain @"}
          </span>
        )}
        <img className={styles.form__gmailIcon} src={gmailIcon} alt="gmail" />
        <label>Password</label>
        {visibleIcon ? (
          <>
            <input
              type="password"
              placeholder="Enter your Password"
              {...register("password", {
                required: true,
              })}
            />
            <img
              onClick={handleClickIcon}
              className={styles.form__novisibleIcon}
              src={novisible}
              alt="novisible"
            />
          </>
        ) : (
          <>
            <input
              placeholder="Enter your Password"
              {...register("password", {
                required: true,
              })}
            />
            <img
              onClick={handleClickIcon}
              className={styles.form__novisibleIcon}
              src={visible}
              alt="visible"
            />
          </>
        )}

        {errors?.password?.type === "required" && (
          <span className={styles.form__errorsPassword}>*Required field</span>
        )}

        <button type="submit">Sign In</button>
      </form>
    </>
  );
};

export default AuthForm;
