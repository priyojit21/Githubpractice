import { useState } from "react"

function App() {
  const [word, setWord] = useState("");
  const[players,setPlayeys] = useState([]);
  const[finalplayers,setfinalPlayers] = useState([]);

  const handleChange = (e) => {
    setWord(e.target.value);
  }

  const handleItem = () => {
    setPlayeys([...players,word]);
    setWord('');
  }


  const addPlayers = (ele) =>{
    //final player list a add koro jei element ta click korecho
    setfinalPlayers([...finalplayers,ele]);
  }
  return (
    <>
      <div>
        <input type="text" value={word} onChange={handleChange} placeholder="Enter player name" />
        <button onClick={handleItem}>Add</button>
      </div>
      <br />
      <h3>Master Team</h3>
      <ul>
        {
          players.map((ele,i) => {
            return <div style={{display:"flex"}}>
            <li>{ele}</li>
            <div>
            <button onClick={() => addPlayers(ele)}>Add</button>
            </div>
            </div>
          })
        }
      </ul>
      <br />
      <h4>Playing 5</h4>
      <ul>
        {
          finalplayers.map((ele,i) => {
            return <li>{ele}</li>
          })
        }
      </ul>
    </>
  )
}

export default App
