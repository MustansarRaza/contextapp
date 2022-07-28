import React from "react";
import { useUserContext } from "../context/userContext";
function About() {
  const [userData, { handleUserDataChange }] = useUserContext();

  return (
    <>
      <h2>{userData.name}</h2>
      <button
        onClick={() => {
          handleUserDataChange({ name: "Name Changed" });
        }}
      >
        Click to change user name
      </button>
    </>
  );
}
export default About;
