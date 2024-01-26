import React from "react";
import { username , city } from "../data/user"

// we used two dots => go up one directory/level 


function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home
