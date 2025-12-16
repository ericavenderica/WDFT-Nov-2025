import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCharacters(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {characters.map((oneCharacter) => {
        return (
          <Link to={`/characters/${oneCharacter.id}`}>
            <div className="char-card">
              <img alt="character image" src={oneCharacter.image} />
              <p>{oneCharacter.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Characters;
