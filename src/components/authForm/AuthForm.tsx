import React from "react";
import styles from "./authForm.module.scss";
import { useForm } from "react-hook-form";
import gmailIcon from "../../assets/icons/email.svg";
import novisible from "../../assets/icons/visibility_off.svg";

interface IFormInput {
  email: string;
  password: string;
}

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
    console.log(JSON.stringify(data));
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label>Gmail</label>
        <input
          placeholder="gmail"
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
        <input
          placeholder="password"
          {...register("password", {
            required: true,
          })}
        />
        {errors?.password?.type === "required" && (
          <span className={styles.form__errorsPassword}>*Required field</span>
        )}
        <img
          className={styles.form__novisibleIcon}
          src={novisible}
          alt="novisible"
        />
        <button type="submit">Sign In</button>
      </form>
    </>
  );
};

export default AuthForm;
