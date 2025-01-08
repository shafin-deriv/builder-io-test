import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import TradingView from "./components/Chart/TradingView";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(TradingView, {
  name: "TradingView",
  inputs: [
    {
      name: "hideSignup",
      type: "boolean",
    },
  ],
});
