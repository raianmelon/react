import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import NotFound from "../components/NotFound";
import EditCustomer from "../components/EditCustomer";

export default function Customer() {
    const [customer, setCustomer] = useState()
    const [notFound, setNotFound] = useState()
    const { id } = useParams();
    const navigate = useNavigate()
    const [show, setShow] = useState()

    function toggleShow() {
        setShow(!show)
    }

    const getUser = async () => {
        try {
            const response = await fetch(`https://658b363aba789a9622389252.mockapi.io/api/customers/${id}`);

            if (response.status === 404) {
                setNotFound(true);
            } else {
                const data = await response.json();
                setCustomer(data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getUser();
    }, [id]);

    const editCustomer = async (id,name,industry) => {
        if(name === customer.name && industry === customer.industry){
            return false
        }

        try {
            let response = await fetch(`https://658b363aba789a9622389252.mockapi.io/api/customers/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, industry})
            })
            if(response.ok) {
                await getUser()
                await toggleShow()
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <Link className="no-underline w-fit mb-4 block shadow border-2 border-purple-400 hover:bg-purple-400 hover:text-white focus:shadow-outline focus:outline-none text-purple-400 font-bold py-2 px-4 rounded transition-all" to={'/customers'}>Back</Link>
            {notFound ? <NotFound/> : null}
            {customer ?
                <div>
                    <div className="flex flex-col justify-start items-start">
                        <div className="flex flex-col items-start justify-start min-w-[350px] py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4">
                            <p className="m-0">ID: {customer.id}</p>
                            <p>Name: {customer.name}</p>
                            <p>Industry: {customer.industry}</p>
                        </div>
                    </div>
                    <div className="flex gap-5 mt-4">
                        <EditCustomer oldData={[customer.id, customer.name, customer.industry]} editCustomer={editCustomer} show={show} toggleShow={toggleShow}/>
                        <button className="block shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4 rounded transition-all" onClick={async () => {
                            try {
                                await fetch(`https://658b363aba789a9622389252.mockapi.io/api/customers/${id}`, {method: 'DELETE', headers: {'Content-Type': 'application/json'}});
                                navigate('/customers')
                            } catch (error) {
                                console.error('Error fetching data:', error);
                            }
                        }}>Delete</button>
                    </div>
                </div>
                : null
            }
        </div>
    )
}