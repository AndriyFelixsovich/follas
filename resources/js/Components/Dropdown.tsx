import { Transition } from '@headlessui/react';
import { Link } from '@inertiajs/react';
import { createContext, useContext, useState, ReactNode, HTMLProps } from 'react';

interface DropDownContextType {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	toggleOpen: () => void;
}

const DropDownContext = createContext<DropDownContextType | undefined>(undefined);

interface DropdownProps {
	children: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
	const [open, setOpen] = useState(false);

	const toggleOpen = () => {
		setOpen((previousState) => !previousState);
	};

	return (
		<DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
			<div className="relative">{children}</div>
		</DropDownContext.Provider>
	);
};

interface TriggerProps {
	children: ReactNode;
}

const Trigger: React.FC<TriggerProps> = ({ children }) => {
	const { open, setOpen, toggleOpen } = useContext(DropDownContext) || {};

	if (!toggleOpen) return null;

	return (
		<>
			<div onClick={toggleOpen}>{children}</div>

			{open && (
				<div
					className="fixed inset-0 z-40"
					onClick={() => setOpen(false)}
				></div>
			)}
		</>
	);
};

interface ContentProps {
	align?: 'left' | 'right';
	width?: '48';
	contentClasses?: string;
	children: ReactNode;
}

const Content: React.FC<ContentProps> = ({
	                                         align = 'right',
	                                         width = '48',
	                                         contentClasses = 'py-1 bg-white',
	                                         children,
                                         }) => {
	const { open, setOpen } = useContext(DropDownContext) || {};

	if (!setOpen) return null;

	let alignmentClasses = 'origin-top';

	if (align === 'left') {
		alignmentClasses = 'ltr:origin-top-left rtl:origin-top-right start-0';
	} else if (align === 'right') {
		alignmentClasses = 'ltr:origin-top-right rtl:origin-top-left end-0';
	}

	let widthClasses = '';

	if (width === '48') {
		widthClasses = 'w-48';
	}

	return (
		<Transition
			show={open}
			enter="transition ease-out duration-200"
			enterFrom="opacity-0 scale-95"
			enterTo="opacity-100 scale-100"
			leave="transition ease-in duration-75"
			leaveFrom="opacity-100 scale-100"
			leaveTo="opacity-0 scale-95"
		>
			<div
				className={`absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`}
				onClick={() => setOpen(false)}
			>
				<div
					className={`rounded-md ring-1 ring-black ring-opacity-5 ${contentClasses}`}
				>
					{children}
				</div>
			</div>
		</Transition>
	);
};

interface DropdownLinkProps extends HTMLProps<HTMLAnchorElement> {
	className?: string;
	children: ReactNode;
}

const DropdownLink: React.FC<DropdownLinkProps> = ({ className = '', children, ...props }) => {
	return (
		<Link
			{...props}
			className={`block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${className}`}
		>
			{children}
		</Link>
	);
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;

export default Dropdown;
