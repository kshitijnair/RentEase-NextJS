import { HTMLProps } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

type IconProps = {
  src: string;
  size?: HTMLProps<HTMLElement>["className"];
};

const Icon = (props: IconProps) => {
  if (props.src === undefined) return <></>;

  let size = props.size ?? styles.medium;
  if (props.size) {
    switch (props.size) {
      case "small":
        size = styles.small;
        break;
      case "medium":
        size = styles.medium;
        break;
      case "large":
        size = styles.large;
        break;
    }
  } else size = styles.medium;

  return (
    <img
      className={classNames(styles.icon, size)}
      src={props.src}
      alt="Joanna's Profile Image"
    />
  );
};

export default Icon;
