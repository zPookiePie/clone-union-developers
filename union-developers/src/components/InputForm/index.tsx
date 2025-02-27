import React from "react";
import {
    Control,
    Controller,
    FieldError,
    FieldValues,
    useFormContext,
} from "react-hook-form";

import styles from "./InputForm.module.scss";

interface InputProps {
  label: string;
  placeholder?: string;
  name:
    | "nomeCompleto"
    | "idade"
    | "email"
    | "github"
    | "linkedin"
    | "developmentSide"
    | "timeLearning"
    | "linkRepoBestProject"
    | "aboutBestProject"
    | "youMotivation"
    | "timeManagement"
    | "aboutFeedback"
    | "howDidYouKnow"
    | "becauseParticipate"
    | "reasonForSelected";
  type?: "text" | "textarea" | "radio";
  required?: boolean;
  error?: FieldError | string;
  control: Control<FieldValues>;
  options?: string[];
}

function InputForm ({
  label,
  placeholder,
  name,
  required = true,
  type = "text",
  error,
  control,
  options = [],
}: InputProps) {
  const errorMessage = error
    ? typeof error === "string"
      ? error
      : error.message
    : "";
  const { clearErrors } = useFormContext();

  return (
    <div className={styles.inputContainer}>
      <div className={styles.labelContainer}>
        {required && <span className={styles.requiredMarker}>*</span>}
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      </div>
      <div className={styles.inputWrapper}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            if (type === "textarea") {
              return (
                <textarea
                  {...field}
                  id={name}
                  placeholder={placeholder}
                  className={`${styles.textarea} ${
                    error ? styles.error : styles.focus
                  }`}
                  onBlur={() => field.onBlur()}
                  onFocus={() => clearErrors(name)}
                />
              );
            }
            if (type === "radio" && options.length > 0) {
              return (
                <div className={styles.radioGroup}>
                  {options.map((option) => (
                    <label key={option} className={styles.radioLabel}>
                      <input
                        {...field}
                        type="radio"
                        value={option}
                        checked={field.value === option}
                        className={styles.radioInput}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              );
            }

            return (
              <input
                {...field}
                type={type}
                id={name}
                placeholder={placeholder}
                className={`${styles.input} ${
                  error ? styles.error : styles.focus
                }`}
                onBlur={() => field.onBlur()}
                onFocus={() => clearErrors(name)}
              />
            );
          }}
        />
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default InputForm;
