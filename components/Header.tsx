import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full mt-6 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto flex justify-between content-center">
        <Link href="/">
          <h2 className="font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Billage
          </h2>
        </Link>

        <Link href="https://github.com/Bill1907">
          <Image
            src="/svg/github-mark-white.svg"
            width={48}
            height={48}
            alt="github"
          />
        </Link>
      </div>
    </header>
  )
}
