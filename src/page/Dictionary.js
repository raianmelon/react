import {useState, useEffect} from "react";

export default function Dictionary() {
    const [word, setWord] = useState("")
    const [word2, setWord2] = useState("")

    useEffect(() => {
        console.log("State for word 1 updated,", word)
    }, [word])

    useEffect(() => {
        console.log("State for word 2 updated,", word2)
    }, [word2])

    return (
        <>
            <div className="px-10 py-10 flex gap-10 flex-col">
                <input className="border-2 border-gray-800 rounded-md w-1/3" type="text" onChange={(e) => {
                    setWord(e.target.value)
                }} />
                <h1>Lets get the definition for {word}</h1>
                <input className="border-2 border-gray-800 rounded-md w-1/3" type="text" onChange={(e) => {
                    setWord2(e.target.value)
                }} />
                <h2>Lets get the definition for {word2}</h2>
            </div>
        </>
    )
}