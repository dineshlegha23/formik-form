import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState({ username: "", password: "" });
  const [touched, setTouched] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="mt-10">
      <h1>h</h1>
    </div>
  );
};

export default App;
