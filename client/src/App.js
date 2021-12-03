import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [img, setImg] = useState([]);
  const categories = [
    "kick",
    "happy",
    "wink",
    "poke",
    "dance",
    "cringe",
    "waifu",
    "neko",
    "shinobu",
    "megumin",
    "bully",
    "cuddle",
    "cry",
    "hug",
  ];
  const apiFetch = (category) => {
    axios.get(`https://api.waifu.pics/sfw/${category}`).then((response) => {
      console.log(response.data);
      setImg(response.data);
    });
  };

  return (
    <div className="body">
      <div className="App">
        <h2>Waifu GIFs</h2>
        <div className="category">
          <h2>Select the category</h2>
          <hr />
          <div class="type">
            <div className="sel-categ">
              {categories.map((category) => (
                <span onClick={() => apiFetch(category)}>{category}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="img">
        <img src={img.url} />
      </div>
    </div>
  );
}

export default App;
