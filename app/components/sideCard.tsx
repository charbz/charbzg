import Link from 'next/link'


export function SideCard() {
    return (
        <section>
            <div>
                <div className="flex items-center gap-x-2 mb-4">
                    <Link href="/about">
                        <img alt="" src="/images/self.png" className="h-[60px] w-[60px] rounded-full bg-gray-50" />
                    </Link>
                    <Link href="/about">
                        <p className="font-bold text-sm dark:text-white border-b-2 border-blue-prime">
                            <span className="inset-0" />
                            Charbel Ghossain
                        </p>
                    </Link>
                </div>
                <p className="text-sm ml-2">
                I'm an engineering leader based in San Francisco, CA. I've spent a lot of my time building software in a wide range of domains from ad-tech servers processing millions of requests per second, 
                to frontend applications powering some of the most popular businesses. 
                <br /><br />
                Welcome to my corner of the internet, where I share my musings on industry trends, software architecture, and other interesting topics.
                </p>
                <div className="flex justify-between mt-4 mb-2 mx-auto w-[150px] text-[#c3c3c3] dark:text-gray-600 transition-colors duration-300">
                    <a href="https://www.linkedin.com/in/charbel-ghossain-17143b28/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 dark:hover:text-gray-300">
                        <svg height="20" preserveAspectRatio="xMidYMid" viewBox="0 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <path d="M256.000,512.000 C114.615,512.000 0.000,397.385 0.000,256.000 C0.000,114.615 114.615,0.000 256.000,0.000 C397.385,0.000 512.000,114.615 512.000,256.000 C512.000,397.385 397.385,512.000 256.000,512.000 ZM131.192,383.946 L188.450,383.946 L188.450,213.478 L131.192,213.478 L131.192,383.946 ZM159.928,128.053 C142.289,128.053 128.000,141.521 128.000,158.145 C128.000,174.754 142.289,188.204 159.928,188.204 C177.552,188.204 191.841,174.754 191.841,158.145 C191.841,141.521 177.552,128.053 159.928,128.053 ZM384.000,287.037 C384.000,219.713 345.448,208.104 321.731,208.104 C298.034,208.104 284.963,216.379 269.922,236.429 L269.922,213.478 L212.756,213.478 L212.756,383.946 L269.922,383.946 L269.922,291.313 C269.922,271.763 278.881,252.645 300.307,252.645 C321.731,252.645 326.997,271.763 326.997,290.846 L326.997,383.946 L384.000,383.946 L384.000,287.037 Z"/>
                        </svg>
                    </a>
                    <a href="https://github.com/charbz" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 dark:hover:text-gray-300">
                        <svg height="20px" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="20px" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <path d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z" /><g/><g/><g/><g/><g/><g/>
                        </svg>
                    </a>
                    <a href="mailto:charbzg@gmail.com" className="hover:text-gray-500 dark:hover:text-gray-300">
                        <svg viewBox="0 0 512 512" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z"/>
                        </svg>
                    </a>
                    <a href="/rss" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 dark:hover:text-gray-300 relative top-[2px]">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
                            <path d="M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415c1.814 0 3.293 1.479 3.293 3.295 0 1.813-1.485 3.29-3.301 3.29C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z"/>
                        </svg>
                    </a>

                </div>
            </div>
        </section>
    )
}
