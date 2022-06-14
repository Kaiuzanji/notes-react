import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Plus, Notepad } from 'phosphor-react'
import FormTask from '../Form/FormTask'
import FormCategory from '../Form/FormCategory'

import Modal from '../Modal'
const Navbar = ({ notes, setNotes, categories, setCategories }) => {
    const [openModalTask, setOpenModalTask] = useState(false)
    const [openModalCategory, setOpenModalCategory] = useState(false)
    return (
        <Disclosure as="nav" className="bg-slate-700">
            <>
                <Modal title="New Task" children={<FormTask notes={notes} setNotes={setNotes} categories={categories} />} open={openModalTask} setOpen={setOpenModalTask} />
                <Modal title="New Category" children={<FormCategory categories={categories} setCategories={setCategories} />} open={openModalCategory} setOpen={setOpenModalCategory} />
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <Notepad size={40} className="text-orange-600"/>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Profile dropdown */}
                        <Menu as="div" className="ml-3 relative">
                        <div>
                            <Menu.Button className="flex text-sm rounded-full text-slate-200">
                                <span className="sr-only">Open task menu</span>
                                <Plus size={28}/>
                            </Menu.Button>
                        </div>
                        <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button onClick={() => setOpenModalTask(true)} href="#" className={`${active ? 'bg-gray-100' : ''} px-4 w-full py-2 text-sm flex justify-between items-center text-gray-700`}>
                                            <span>News Task</span>
                                            <Plus size={20}/>
                                        </button>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <button onClick={() => setOpenModalCategory(true)} href="#" className={`${active ? 'bg-gray-100' : ''} px-4 w-full py-2 text-sm flex justify-between items-center text-gray-700`}>
                                            <span>News Category</span>
                                            <Plus size={20}/>
                                        </button>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                        </Menu>
                    </div>
                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar