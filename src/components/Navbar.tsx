import { Disclosure } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const navigation = [
  { name: "Projects", href: "#projects", special: false },
  { name: "About", href: "#about", special: false },
  { name: "Contact", href: "#contact", special: false },
  { name: "Resume", href: "#resume", special: true },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ")
}

export default function Navbar() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-4 md:mx-16">
            <div className="relative flex h-24 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="text-gray-400 cus:outline-none inline-flex items-center justify-center rounded-md p-2 hover:bg-lightgray hover:text-white focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex h-full flex-1 items-center justify-center ">
                <a
                  href="/"
                  className="w-auto select-none text-3xl font-black text-white md:text-4xl lg:text-5xl"
                >
                  walsh.
                </a>

                <div className="hidden sm:my-auto sm:ml-auto md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={
                          item.special
                            ? "hover: rounded-md bg-lightgray px-3 py-3 transition duration-200 ease-in-out hover:bg-gradient-to-r hover:from-lightorange hover:to-darkorange hover:text-white hover:ease-in-out"
                            : "px-3 py-3 hover:text-white"
                        }
                      >
                        <p
                          className={classNames(
                            item.special
                              ? "border-none"
                              : "hover:border-b-2 hover:border-b-lightorange",
                            "inline text-center text-sm"
                          )}
                        >
                          {item.name}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 text-center">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-md px-3 py-4 text-base font-medium text-white hover:bg-lightgray hover:text-white"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
