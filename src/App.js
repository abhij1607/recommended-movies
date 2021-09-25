import React, { useState } from "react";
import "./styles.css";

var genreDictionary = {
  Action: [
    {
      title: "Dune",
      year: "2021",
      desc:
        "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy"
    },
    {
      title: "The Matrix",
      year: "1999",
      desc:
        "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence."
    },
    {
      title: " The Dark Knight",
      year: "2008",
      desc:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    }
  ],
  Animation: [
    {
      title: "Your Name",
      year: "2016",
      desc:
        "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?"
    },
    {
      title: "WALL·E",
      year: "2008",
      desc:
        "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind."
    },
    {
      title: "Toy Story",
      year: "1995",
      desc:
        "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room."
    }
  ],
  Mystrey: [
    {
      title: " Knives Out",
      year: "2019",
      desc:
        "A detective investigates the death of a patriarch of an eccentric, combative family."
    },
    {
      title: "Gone Girl",
      year: "2014",
      desc:
        "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent."
    },
    {
      title: " Seven",
      year: "1995",
      desc:
        "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives."
    }
  ]
};

var genreWeKnow = Object.keys(genreDictionary);

export default function App() {
  var [selectedGenre, setGenre] = useState("Action");

  function genreChangeHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>Recommended Movies</h1>
      <div className="button-div">
        {
          /*creating array from object and mapping each 
        element in the array to create buttons*/
          genreWeKnow.map((genre) => (
            <button
              onClick={() => genreChangeHandler(genre)}
              style={{
                width: "150px",
                fontSize: "1.5rem",
                fontWeight: "600",
                padding: "0.5rem 1rem",
                margin: "1rem",
                border: "3px solid #000",
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor: "#000",
                color: "#fff"
              }}
            >
              {genre}
            </button>
          ))
        }
      </div>
      <div className="list-div">
        {
          //displaying the list of series
          genreDictionary[selectedGenre].map((movies) => (
            <div
              style={{
                border: "3px solid black",
                borderRadius: "10px",
                maxWidth: "350px",
                padding: "0.5rem 1rem",
                margin: "1rem"
              }}
            >
              <h2>{movies.title}</h2>
              <h5>
                <em>{movies.desc}</em>
              </h5>
              <h5>{`Realese Year : ${movies.year}`}</h5>
            </div>
          ))
        }
      </div>
    </div>
  );
}
