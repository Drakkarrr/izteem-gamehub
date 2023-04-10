import React, { useState } from "react";

const Exercise = () => {
  const [person, setPerson] = useState({
    id: 1,
    player: {
      name: "Junrey",
    },
  });

  const handleNameChange = () => {
    setPerson({
      ...person,
      player: {
        name: "Drakkar",
      },
    });
  };

  return (
    <>
      <h1>Name: {person.player.name}</h1>
      <button onClick={handleNameChange}>Change Name</button>
    </>
  );
};

export default Exercise;
