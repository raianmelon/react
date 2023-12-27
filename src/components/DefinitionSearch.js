import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function DefinitionSearch() {
    const [word, setWord] = useState("")
    const navigate = useNavigate()
    return (
        <form className="flex justify-center max-w-[300px] flex-col gap-3" onSubmit={() => {navigate('/dictionary/'+word)}}>
            <input placeholder='color' className="shrink p-1 border-2 border-gray-800 rounded-md" type="text" onChange={(e) => {
                setWord(e.target.value)
            }} />
            <button className='py-1 border-2 border-purple-700 bg-purple-700 text-white rounded-md'>Search</button>
        </form>
    )
}