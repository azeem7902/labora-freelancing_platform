import React from 'react';

interface IconProps {
  icon: React.FC<any>;
}

const FontAwesomeIcon: React.FC<IconProps> = ({ icon: Icon }) => {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <Icon />
    </span>
  );
};

export default FontAwesomeIcon;