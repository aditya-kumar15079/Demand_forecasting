import { Children } from "react";
import styles from "./Card.module.css";

const Card = ({ title, children }) => {
  return (
    <div className={styles["card-container"]}>
      <h4 className={styles["title"]}>{title}</h4>
      {Children.map(children, (child) => (
        <div className="Row">{child}</div>
      ))}
    </div>
  );
};

export default Card;
