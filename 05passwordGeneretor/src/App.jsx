import { useRef } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react"


export default function App() {

  const [length, setLength] = useState(8)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [charsAllowed, setCharsAllowed] = useState(false)
  const [password, setPassword] = useState("");

  const passRef = useRef(password);


  const copyToClipBoard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])


  const generatePassword = useCallback(() => {
    let pass = "";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbersAllowed) {
      let num = "0123456789"
      chars += num
    }

    if (charsAllowed) {
      let ch = "-{}!`";
      chars += ch
    }

    for (let i = 1; i <= length; i++) {
      let random = Math.floor(Math.random() * chars.length + 1)
      pass = pass + chars.charAt(random);
    }
    setPassword(pass);

  }, [length, numbersAllowed, charsAllowed, setPassword])

  useEffect(() => {

    generatePassword()

  }, [length, numbersAllowed, charsAllowed])


  return (
    <>

      <div className="w-1/3 m-auto mt-12 bg-slate-800 h-10 border-white px-5 py-10 flex flex-col justify-center">
        <h2 className="pt-10 pb-2 text-center text-lg">Password Generetor</h2>
        <div className="w-full mb-2">
          <input type="text" className="p-2 rounded-sm w-2/3 text-black" readOnly placeholder="Password" value={password} ref={passRef} />
          <button className="bg-blue-500 p-2 w-1/3" onClick={copyToClipBoard}>Copy</button>
        </div>
        <div className="w-full flex items-center justify-between">
          <div>
            <input type="range" min='8' max='50' id="range" value={length} onChange={(e) => setLength(e.target.value)} />&nbsp;
            <label htmlFor="range">Length ({length})</label>
          </div>
          <div>
            <input type="checkbox" id="number" onChange={() => setNumbersAllowed(!numbersAllowed)} />&nbsp;
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div>
            <input type="checkbox" id="characters" onChange={() => setCharsAllowed(!charsAllowed)} />&nbsp;
            <label htmlFor="characters">Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}