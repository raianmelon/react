import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import AddCustomer from "../components/AddCustomer";

export default function Customers() {
    const [customers, setCustomers] = useState()

    const [show, setShow] = useState()

    function toggleShow() {
        setShow(!show)
    }

    const getCustomers = () => {
        fetch('https://658b363aba789a9622389252.mockapi.io/api/customers/')
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                setCustomers(data)
            })
    }
    useEffect(() => {
        getCustomers()
    }, []);

    const newCustomer = async (name, industry) => {
        if (name && industry) {
            try {
                const response = await fetch(`https://658b363aba789a9622389252.mockapi.io/api/customers/`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({name: name, industry: industry}),
                })

                if(response.ok) {
                    await getCustomers()
                    await toggleShow()

                }
            } catch (e)  {
                console.log(`Something went wrong, ${e}`)
            }
        }
    }

    return  (
        <>
            <h1>Here are our customers</h1>
            <div className="flex flex-wrap justify-center">
                {customers ? customers.map((customer) => {
                    return (
                        <Link to={'/customers/' + customer.id} key={customer.id} id={customer.id} className="no-underline m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                            <div className="text-center space-y-2 sm:text-left">
                                <div className='flex flex-col justify-start items-start'>
                                    <p className="text-lg text-black font-semibold m-0" style={{textDecoration: 'none'}}>
                                        {customer.name}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    )
                }): null}
            </div>
            <AddCustomer newCustomer={newCustomer} show={show} toggleShow={toggleShow}/>
        </>
    )
}