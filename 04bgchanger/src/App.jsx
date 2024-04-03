import { useState } from 'react'



function App() {
  const [color, setColor] = useState('olive');

  return (
    <>
      <div
        className="h-screen duration-200 w-full"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-wrap fixed bottom-10  justify-center inset-x-0 px-2">
          <div className="flex flex-wrap gap-3 justify-center rounded-xl shadow-lg bg-white p-4">
            <button
              className="outline-none p-2 rounded-md text-white shadow-lg px-3"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none p-2 rounded-md text-white shadow-lg px-3"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none p-2 rounded-md text-white shadow-lg px-3"
              style={{ backgroundColor: "Blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none p-2 rounded-md text-white shadow-lg px-3"
              style={{ backgroundColor: "olive" }}
              onClick={() => setColor("olive")}
            >
              Olive
            </button>
            <button
              className="outline-none p-2 rounded-md text-white shadow-lg px-3"
              style={{ backgroundColor: "Gray" }}
              onClick={() => setColor("gray")}
            >
              Gray
            </button>
            <button
              className="outline-none p-2 rounded-md text-Black shadow-lg px-3"
              style={{ backgroundColor: "Yellow" }}
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
            <button
              className="outline-none p-2 rounded-md text-Black shadow-lg "
              style={{ backgroundColor: "Pink" }}
              onClick={() => setColor("pink")}
            >
              Pink
            </button>
            <button
              className="outline-none p-2 rounded-md text-Black shadow-lg px-3"
              style={{ backgroundColor: "Purple" }}
              onClick={() => setColor("purple")}
            >
              Purple
            </button>
            <button
              className="outline-none p-2 rounded-md text-Black shadow-lg px-3"
              style={{ backgroundColor: "Lavender" }}
              onClick={() => setColor("lavender")}
            >
              Lavender
            </button>
            <button
              className="outline-none p-2 rounded-md text-Black shadow-lg px-3"
              style={{ backgroundColor: "White" }}
              onClick={() => setColor("white")}
            >
              White
            </button>
            <button
              className="outline-none p-2 rounded-md text-white shadow-lg px-3"
              style={{ backgroundColor: "Black" }}
              onClick={() => setColor("black")}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
