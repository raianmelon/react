import { Fragment, useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {Bars3Icon, XMarkIcon,} from '@heroicons/react/24/outline'
export default function Header(props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <>
            <header className="bg-gray-300">
                <nav className="mx-auto flex max-w-[97%] items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Vjezba</span>
                            <img className="h-8 w-auto" src="/reactpurple.png" alt="React Logo" />
                         </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <Popover.Group className="hidden lg:flex lg:gap-x-12">
                        <a href="/customers" className="no-underline font-semibold leading-6 text-gray-900">
                            Customers
                        </a>
                        <a href="/dictionary" className="no-underline font-semibold leading-6 text-gray-900">
                            Dictionary
                        </a>
                    </Popover.Group>
                    <div className="hidden lg:flex lg:gap-5 lg:flex-1 lg:justify-end">
                        <a href="#" className="shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded transition-all no-underline">
                            Log in
                        </a>
                        <a href="#" className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded transition-all no-underline leading-6">
                            Sign up
                        </a>
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-[2rem] py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Vjezba</span>
                                <img className="h-8 w-auto" src="/reactpurple.png" alt="React Logo" />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-3 py-12 flex flex-col gap-3">
                                    <a href="/customers" className="no-underline font-semibold leading-6 text-gray-900">
                                        Customers
                                    </a>
                                    <a href="/dictionary" className="no-underline font-semibold leading-6 text-gray-900">
                                        Dictionary
                                    </a>
                                </div>
                                <div className="py-6 flex justify-between">
                                    <a href="#" className="shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded transition-all no-underline">
                                        Log in
                                    </a>
                                    <a href="#" className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded transition-all no-underline leading-6">
                                        Sign in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
            <div className='px-10 py-10'>
                {props.children}
            </div>
        </>
    )
}