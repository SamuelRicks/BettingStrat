import { ButtonInterface } from "../types";
import styles from "./Button.module.css";

const Button = ({ href, text, type, filled, icon }: ButtonInterface) => {
  const filledClass = filled ? styles.filled : "";
  return (
    <a href={href} className={`${styles.btn} ${styles[type]} ${filledClass}`}>
      <span>{text}</span>
      {icon}
    </a>
  );
};
export default Button;
