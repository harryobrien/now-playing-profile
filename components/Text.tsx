import React from "react";

const sizes = {
  default: 14,
  small: 12,
};

const weights = {
  default: 400,
  bold: 600,
};

const Text: React.FC<any> = ({
  children = "",
  weight = "default",
  family = "default",
  color = "default",
  size = "default",
  ...props
}) => {
  return (
    <p
      style={{
        whiteSpace: "pre",
        fontSize: `${sizes[size]}px`,
        lineHeight: 1.5,
        fontWeight: weights[weight],
      }}
      {...props}
    >
      {children}
    </p>
  );
};

export default Text;
