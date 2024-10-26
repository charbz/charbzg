import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
  return (
    <div className="relative bottom-[4px]">
        <Link href="/">
            <Image
                src="/images/logo.svg"
                alt="logo"
                width={220}
                height={50}
                className="rounded-full hidden dark:block"
            />
            <Image
                src="/images/logo-dark.svg"
                alt="logo"
                width={220}
                height={30}
                className="rounded-full dark:hidden"
            />
        </Link>
    </div>
  )
}
