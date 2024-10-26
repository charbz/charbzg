'use client'
import { Switch } from '@headlessui/react'
import { useState, useEffect } from 'react'

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { SunIcon as SunIconSolid, MoonIcon as MoonIconSolid } from '@heroicons/react/24/solid'

export function ThemeToggle() {
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const storedDarkMode = 'dark' in localStorage ? localStorage.dark === 'true' : true
    toggleDarkMode(storedDarkMode)
  }, [])

  const toggleDarkMode = (checked: boolean) => {
    setEnabled(checked)
    localStorage.setItem('dark', checked.toString())
    checked ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
  }

  return (
    <div className="flex md:justify-end justify-center align-middle relative py-1 px-2 m-1">
        {enabled ? <SunIcon className="size-6 mr-2 opacity-40"/> : <SunIconSolid className="size-6 mr-2"/>}
        <Switch
        checked={enabled}
        onChange={toggleDarkMode}
        className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-prime-light"
        >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-7" />
        </Switch>
        {enabled ? <MoonIconSolid className="size-6 ml-2"/> : <MoonIcon className="size-6 ml-2 opacity-40"/>}
    </div>

  )
}