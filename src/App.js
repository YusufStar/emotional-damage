import { useState } from "react"
function App() {
  const [buttonPos, setButtonPos] = useState({
    x: "0",
    y: "0",
  })
  const [count, setCount] = useState(0)
  const randomPos = () => {
    const x = Math.floor(Math.random() * 75) + "%"
    const y = Math.floor(Math.random() * 75) + "%"
    setButtonPos({ x, y })
    setCount(count + 1)
    if(count%10 == 0 && count !== 0) alert("Lütfen beni yalnız bırakma")
  }
  return (
    <div className="h-screen relative w-full bg-bg overflow-hidden fle items-center">
      <button
        onMouseEnter={randomPos}
        style={{
          left: buttonPos.x,
          right: 0,
          top: buttonPos.y,
          bottom: 0,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "auto",
          marginBottom: "auto",
        }} className="absolute bg-dot w-[200px] h-[65px] rounded-md cursor-default font-semibold text-xl">I'm alone 🥹</button>
    </div>
  );
}

export default App;