import { Controller, Control, FieldValues, FieldError, useFormContext } from "react-hook-form";
import styles from "./CheckBoxInput.module.scss";

interface PropsInputCheckBox {
    name: string;
    control: Control<FieldValues>;
    error?: FieldError | string;
}

function CheckBoxInput({ name, control, error }: PropsInputCheckBox) {
  const errorMessage = error
    ? typeof error === "string"
      ? error
      : error.message
    : "";
  const { clearErrors } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={styles.checkboxContainer}>
          <div className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              id={name}
              checked={!!field.value}
              onChange={(e) => field.onChange(e.target.checked)}
              onBlur={() => field.onBlur()}
              onFocus={() => clearErrors(name)}
              className={styles.checkbox}
            />
            <label htmlFor={name} className={styles.label}>
              Li e concordo com os{" "}
              <button type="button" className={styles.linkButton}>
                <a href="#" className={styles.link}>termos</a>.
              </button>
            </label>
          </div>
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        </div>
      )}
    />
  );
};

export default CheckBoxInput;
