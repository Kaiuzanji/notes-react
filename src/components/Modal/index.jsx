import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { X } from 'phosphor-react'
const Modal = ({title, children, open, setOpen}) => {
    const cancelButtonRef = useRef(null)
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" >
                        <Dialog.Panel className="relative bg-zinc-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                            <div className="bg-zinc-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 w-full">
                                <div className="w-full">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <Dialog.Title as="h3" className="text-lg flex justify-between leading-6 font-medium text-slate-300">
                                        <span>{title}</span>
                                        <button onClick={() => setOpen(false)}><X size={28}/></button>
                                    </Dialog.Title>
                                    <div className="mt-2 w-full me-2">
                                        {children}
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Modal