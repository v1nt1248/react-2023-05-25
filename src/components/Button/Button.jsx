import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";

const ViewVariantStyle = {
  circle: styles['button-circle']
};

export const Button = ({
  children,
  onClick,
  selected,
  disabled,
  className,
  shape,
  size,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        styles.root,
        className,
        {
          [ViewVariantStyle[shape]]: ViewVariantStyle[shape],
          [styles.root-selected]: selected,
          [styles.root-disabled]: disabled,
        },
      )}
    >
      <span>{children}</span>
    </button>
  );
};
