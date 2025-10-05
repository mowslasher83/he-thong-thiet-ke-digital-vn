import React from 'react';

const BotButton = ({ label, onClick }) => {
  return (
    <button className="bot-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default BotButton;
