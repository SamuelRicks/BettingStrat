import { CardInterface } from "../types";
import Badge from "./Badge";
import Button from "./Button";
import styles from "./Card.module.css";
import { getImageUrl } from "../utils/image-utils";

const Card = ({
  body,
  btn,
  name,
  badge,
  image,
  indicator,
  subtitle,
  id,
}: CardInterface) => {
  return (
    <article className={`stack-lg ${styles.card}`}>
      {indicator && (
        <small className={`${styles.indicator}`}>{indicator}</small>
      )}
      <div className={styles.badge}>
        {badge && <Badge text={badge.text} filled={badge.filled} />}
      </div>
      {image && (
        <img
          key={id}
          src={getImageUrl(name, id)}
          alt={`${image}/${id}`}
          className={styles.image}
        />
      )}
      <div className="stack-sm">
        <h3 className={styles.name}>{name}</h3>
        {subtitle && <small className={styles.subtitle}>{subtitle}</small>}
      </div>
      <p className={styles.body}>{body}</p>
      <div className={styles.btnContainer}>
        <Button
          filled={btn.filled}
          text={btn.text}
          href={btn.href}
          icon={btn.icon}
          type={btn.type}
        />
      </div>
    </article>
  );
};
export default Card;
