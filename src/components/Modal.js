import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { DialogPanel, DialogTitle } from "@headlessui/react";

export default function Modal({ isOpen, onClose, children, title }) {
	return (
		<Transition show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-50" onClose={onClose}>
				<div className="fixed inset-0 bg-black/40" aria-hidden="true" />

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4">
						<Transition
							as={Fragment}
							enter="transition duration-300 ease-out"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="transition duration-200 ease-in"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
							show={isOpen}
						>
							<DialogPanel className="space-y-6 p-6 bg-white rounded-lg shadow-md w-full max-w-lg mx-auto">
								<DialogTitle className="text-2xl font-semibold text-center text-teal-500 mb-4">
									{title}
								</DialogTitle>
								<div className="mt-4">{children}</div>
							</DialogPanel>
						</Transition>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}
