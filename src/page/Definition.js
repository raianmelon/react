import {useEffect} from "react";

export default function Definition() {
    useEffect(() => {
        console.log('page loaded')
    }, []);
    return (
        <>
            <p>Here is a definition for </p>
        </>
    )
}