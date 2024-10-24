
export function Card() {
    return (
        <div className="flex items-center gap-x-4 mb-8">
            <img alt="" src="/images/self.png" className="h-[120px] w-[120px] rounded-full bg-gray-50" />
            <div className="leading-6">
                <p className="font-bold text-3xl mb-2 dark:text-white">
                    <span className="inset-0" />
                    Charbel Ghossain
                </p>
                <p>
                    I'm an engineering leader with a passion for getting things done. Welcome to my corner of the internet.
                </p>
            </div>
        </div>
    )
}
