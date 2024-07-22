"use client";

import { useState } from "react";

const ConnectWalletBtn = () => {
  const [connected, setConnected] = useState(false);

  const handleClick = () => {
    setConnected(true);
  };

  return (
    <button
      className="hidden md:block"
      onClick={() => {
        handleClick();
      }}
    >
      {connected ? (
        <img
          loading="lazy"
          src="wallet-connected-button.png"
          alt="wallet-btn"
        />
      ) : (
        <img loading="lazy" src="wallet-button.png" alt="wallet-btn" />
      )}
    </button>
  );
};

export default ConnectWalletBtn;
