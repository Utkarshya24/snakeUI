// src/components/button.tsx
import React from "react";
var Button = ({ className, children }) => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", { className: `${className}` }, children));
};
var button_default = Button;
export {
  button_default as Button
};
