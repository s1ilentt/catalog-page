import { useEffect, useRef, useState } from 'react';

export function useDropdown() {
	const ref = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(true);

	useEffect(() => {
		if (!isOpen) return;

		const onEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setIsOpen(false);
		};

		document.addEventListener('keydown', onEscape);

		return () => {
			document.removeEventListener('keydown', onEscape);
		};
	}, [isOpen]);

	return {
		ref,
		isOpen,
		toggle: () => setIsOpen(p => !p),
		close: () => setIsOpen(false),
	};
}
