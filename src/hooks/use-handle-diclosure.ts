import { useDisclosure } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

function useClickOutside(element: HTMLElement | null, callback: () => void) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (element && !element.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [element, callback]);
}

function useDisclosureWithClickOutside<T extends HTMLElement>(
  initialOpen: boolean = false
) {
  const { isOpen, onOpen, onClose } = useDisclosure({
    defaultIsOpen: initialOpen,
  });

  const ref = useRef<T>(null);

  useClickOutside(ref.current, onClose);

  return {
    isOpen,
    isClose: !isOpen,
    onClose,
    onOpen,
    ref,
  };
}

export default useDisclosureWithClickOutside;
