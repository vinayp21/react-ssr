import React from "react";
import lodash from "lodash";
const App = () => {
  return (
    <div>
      {lodash.add(2, 5)}
      <div>Contact</div>
      <div>Contact</div>
      <div>Contact</div>
      <div>Contact</div>
      <div>Contact</div>
      <div>Contact</div>
      <div>Contact</div>
      <div>Contact</div>
      <div>Contact{lodash.add(2, 4)}</div>

      <img src={"/img.jpg"} />
    </div>
  );
};

export default App;
