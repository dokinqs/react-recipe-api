import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

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
      <form onSubmit={submitHandler}>
        <span>🔍</span>
        <input
          type="text"
          value={input}
          placeholder="search recipes..."
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
