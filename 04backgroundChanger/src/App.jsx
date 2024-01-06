import { useState } from "react"
import ColorCard from "./Color"

function App() {

  let [color, setColor] = useState("olive")


  let availableColors = [
    {
      name: "Olive",
      value: "olive",
      textColor: "#fff"
    },
    {
      name: "Red",
      value: "red",
      textColor: "#fff"
    },
    {
      name: "Green",
      value: "green",
      textColor: "#fff"
    },
    {
      name: "Blue",
      value: "blue",
      textColor: "#fff"
    },
    {
      name: "Yellow",
      value: "yellow",
    },
    {
      name: "Black",
      value: "black",
      textColor: "#fff"
    }
  ]


  const Colors = () => {
    return availableColors.map((color) => {
      return (
        <ColorCard name={color.name} value={color.value} key={color.value} textColor={color.textColor} setColor={() => setColor(color.value)} />
      )
    })
  }

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="w-full fixed flex flex-wrap justify-center bottom-12">
          <div className="flex flex-wrap justify-center gap-3 bg-white shadow-lg rounded px-10 py-5">
            {availableColors.length == 0 && "No Colors"}
            <Colors />
          </div>
        </div>
      </div>
    </>
  )
}


export default App