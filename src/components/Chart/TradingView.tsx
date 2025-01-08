"use client";
import React from "react";

interface TradingView {
  hideSignup?: boolean;
}

function TradingView({ hideSignup = true }: TradingView) {
  return (
    <iframe
      id="trading-view-iframe"
      style={{ width: "100%", height: "50vh", backgroundColor: "white" }}
      src={`https://charts.deriv.com/deriv?hide-signup=${hideSignup}`}
    />
  );
}

export default TradingView;
