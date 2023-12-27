import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function AddCustomer(props) {
    const [name, setName] = useState("");
    const [industry, setIndustry] = useState("");

    return (
        <>
            <button onClick={props.toggleShow} className="block mt-4 mx-auto shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded transition-all">+ Add Customer</button>

            <Modal
                show={props.show}
                onHide={props.toggleShow}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id='editmodal' onSubmit={(e) => {
                        e.preventDefault()
                        props.newCustomer(name, industry)
                        setName("")
                        setIndustry("")
                    }} className="w-full max-w-sm">
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                                    Name
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input placeholder="Luka Petrovic" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" defaultValue={name} onChange={(e) => {setName(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="industry">
                                    Industry
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input placeholder="Computing" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="industry" type="text" defaultValue={industry} onChange={(e) => {setIndustry(e.target.value)}}/>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={props.toggleShow} type="button" className="shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded transition-all">
                        Cancel
                    </button>
                    <button form="editmodal" className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded transition-all">
                        Add
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}