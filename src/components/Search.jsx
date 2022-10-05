import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);
    setInput("");
  };
  return (
    <div>
      {/* <span>🔍</span> */}
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={input}
          placeholder="search for a recipe"
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
