import DefinitionSearch from "../components/DefinitionSearch";

export default function Dictionary() {
    return (
        <div className='flex flex-col gap-5 h-[70dvh] justify-center items-center'>
            <h1>Search our dictionary</h1>
            <DefinitionSearch/>
        </div>
    )
}