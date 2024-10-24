import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

interface PageBreakProps {
    className?: string;
}

function PageBreak(props: PageBreakProps) {
    return (
        <div className={`flex items-center justify-center ${props.className}`}>
            <EllipsisHorizontalIcon className="w-8 h-8 dark:text-gray-500 text-gray-400" />
        </div>
    )
}

export default PageBreak;
