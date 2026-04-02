import { useLoginMutation } from "../../api/queries";
import { useFormLogin } from "../../model/hooks/use-form-login";
import { LoginFormField } from "./LoginFormField";
import { LoginFormWrapper } from "./LoginFormWrapper";
import styles from "./LoginForm.module.css";

export const LoginForm = () => {
  const { register, handleSubmit, errors } = useFormLogin();
  const [mutate, { isLoading, isSuccess }] = useLoginMutation();

  return (
    <LoginFormWrapper>
      <form onSubmit={handleSubmit(mutate)}>
        <LoginFormField
          register={register}
          label="Username"
          name="username"
          placeholder="Username"
          error={errors.username?.message}
        />
        <LoginFormField
          register={register}
          label="Password"
          name="password"
          placeholder="Password"
          error={errors.password?.message}
        />
        <button
          className={styles.loginFormButton}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </LoginFormWrapper>
  );
};
