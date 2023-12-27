import {useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';

export default function EditCustomer(props) {
    const id = props.oldData[0]
    const [name, setName] = useState(props.oldData[1]);
    const [industry, setIndustry] = useState(props.oldData[2]);

    const [editDisabled, setEditDisabled] = useState(true)

    useEffect(() => {
        if(name === props.oldData[1] && industry === props.oldData[2]){
            setEditDisabled(true)
        } else {
            setEditDisabled(false)
        }
    }, [name, industry]);

    return (
        <>
            <button onClick={props.toggleShow} className="block shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded transition-all">Edit Customer</button>

            <Modal
                show={props.show}
                onHide={props.toggleShow}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id='editmodal' onSubmit={(e) => {
                        e.preventDefault()
                        props.editCustomer(id, name, industry)
                    }} className="w-full max-w-sm">
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                                    Name
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input value={name} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" onChange={(e) => {setName(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="industry">
                                    Industry
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input value={industry} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="industry" type="text" onChange={(e) => {setIndustry(e.target.value)}}/>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={props.toggleShow} type="button" className="border-2 border-gray-500 shadow bg-gray-500 hover:bg-gray-400 hover:border-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded transition-all">
                        Cancel
                    </button>
                    <button disabled={editDisabled} form="editmodal" className={`disabled:border-gray-500 ${editDisabled ? 'disabled:text-gray-500' : 'text-white'} disabled:bg-transparent border-2 border-purple-500 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded transition-all`}>
                        Edit
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}