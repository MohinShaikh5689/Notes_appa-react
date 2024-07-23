import React, { useState, useEffect } from "react";

function Header() {
  const [name, setName] = useState("");

  useEffect(() => {

    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setName(storedName);
    } else {

      const userName = prompt("Please Enter Your Name")?.trim() || "Zoro";
      setName(userName);
      localStorage.setItem('userName', userName);
    }
  }, []);

  return (
    <header>
      <h1>Notes of {name}</h1>
    </header>
  );
}

export default Header;
