import {useEffect, useState }from "react";
import {Link, useParams} from "react-router-dom";
import {v4 as uuidv4} from 'uuid'
import NotFound from "../components/NotFound.js";
import DefinitionSearch from "../components/DefinitionSearch";
export default function Definition() {
    const [word, setWord] = useState('')
    const [notFound, setNotFound] = useState(false)
    const [error, setError] = useState(false)
    let { search } = useParams()
    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
            .then((response) => {
                if(response.status === 404) {
                    setNotFound(true)
                }
                if (!response.ok) {
                    setError(true)

                    throw new Error('Something went wrong')
                }
                return response.json()

            })
            .then((data) => {
                if (!data.title) {
                    setWord(data[0].meanings)
                }
            })
            .catch((e) => {
                console.log(e.message)
            })
    }, []);

    if(notFound === true) {
        return (
            <>
                <NotFound/>
                <Link to="/dictionary">Search another</Link>
            </>
        )
    }

    if(error === true) {
        return (
            <>
                <p>Something went wrong, try again?</p>
                <Link to="/dictionary">Search another</Link>
            </>
        )
    }

    return (
        <>
            {word ? (
                <>
                    <h1>Here is a definition:</h1>
                    {word.map((meaning) => {
                        return <p key={uuidv4()}>{meaning.partOfSpeech}: {meaning.definitions[0].definition}</p>
                    })}
                    <p>Search again:</p>
                    <DefinitionSearch/>
                </>
            ): null}
        </>
    )

}