// Navbar component
import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Emotions', href: '#' },
  { name: 'Manifesto', href: '#' },
  { name: 'Self-awareness test', href: '#' },
  { name: 'Work with Us', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white p-3 fixed w-full top-0 z-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-12 w-12 rounded-lg"
                  src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ad/99/de/ad99ded3-b344-aa25-1754-4ede9c532190/AppIcon-1x_U007ephone-0-85-220.png/60x60bb.jpg"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:block flex-grow text-center">
                <div className="flex justify-center space-x-4 ">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-blue-500 text-white' : 'text-gray-500 hover:bg-blue-500 hover:text-white',
                        'rounded-lg px-3 py-2 text-md font-medium font-bold'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0">
                <button
                  type="button"
                  className="relative text-sm font-md rounded-full font-sm font-bold bg-purple-700 p-2 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Download App
                </button>
              </div>
              <div className="sm:hidden flex-shrink-0">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
