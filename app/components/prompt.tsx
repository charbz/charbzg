interface PromptProps {
    children?: React.ReactNode;
    className?: string;
}

export function Prompt(props: PromptProps) {
    return (
        <div className={`prompt font-mono text-xsm border-l-2 border-blue-prime my-8 ${props.className}`}>
            {props.children}
        </div>
    )
}