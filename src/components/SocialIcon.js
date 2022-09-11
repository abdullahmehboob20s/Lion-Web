import React from "react";

function SocialIcon(props) {
  const { Icon } = props;
  return (
    <a
      {...props}
      className="w-12 h-12 rounded-full bg-white flex items-center justify-center"
    >
      {Icon && <Icon />}
    </a>
  );
}

export default SocialIcon;
