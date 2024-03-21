import { LandingInterface } from "../types";
import styles from "./Landing.module.css";
import Button from "../components/Button";

const Landing = ({ btn }: LandingInterface) => {
  return (
    <section className={`stack-lg ${styles.card}`}>
      <Button
        type={btn.type}
        text={btn.text}
        href={btn.href}
        icon={btn.icon}
        filled={btn.filled}
      />
    </section>
  );
};
export default Landing;
