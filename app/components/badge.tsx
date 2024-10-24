interface BadgeProps {
    children?: React.ReactNode;
    className?: string;
}

export function Badge(props: BadgeProps) {
    return (
        <span className={`
            inline-flex text-sm items-center dark:hover:bg-blue-subtle-2 dark:bg-blue-subtle bg-blue-prime-ultra text-blue-prime-ultra-typo
            hover:bg-blue-prime-ultra-dim dark:hover:text-white dark:text-gray-400 transition-all duration-100 cursor-default
            rounded-md px-2 py-1 text-s ring-1 ring-inset ring-gray-500/10 
            ${props.className}
        `}>
            {props.children}
        </span>
    )
}