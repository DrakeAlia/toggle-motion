import React from "react";
import Switch from "./components/Switch";

export default function App() {
  const [value, setValue] = React.useState(false);

  // const [disabled, setDisabled] = React.useState(true);

  return (
    <div
      style={{
        // opacity: disabled ? 0.25 : 1,
        // pointerEvents: disabled ? "none" : "initial",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#000",
        height: "100px"
      }}
    >
      <Switch
        //  style={{
        //   opacity: disabled ? 0.25 : 1,
        //   pointerEvents: disabled ? "none" : "initial",
        //  }}

        onColor="#fff"
        isOn={value}
        handleToggle={() => setValue(!value)}
      />
    </div>
  );
}
