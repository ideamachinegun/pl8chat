'use client'

import { Disclosure, Menu } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'About us', href: '/about', current: false },
  { name: 'Contact', href: 'mailto:info@pl8chat.com', current: false },
]

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

const Logo = () => {
  return (
    <div>
      <svg width="124" height="28" viewBox="0 0 124 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M27.1834 14.0004C27.1834 21.4042 21.0982 27.4061 13.5917 27.4061L9.43867 27.4061V19.9585L13.5917 19.9585C16.9279 19.9585 19.6324 17.291 19.6324 14.0004C19.6324 10.7099 16.9279 8.04233 13.5917 8.04233C10.2555 8.04233 7.55094 10.7099 7.55094 14.0004V27.4061L0 27.4061V14.0004C0 6.59666 6.0852 0.594727 13.5917 0.594727C21.0982 0.594727 27.1834 6.59666 27.1834 14.0004Z" fill="white" />
        <path d="M116.3 21.8197V8.64857H111.83V6.17969H123.383V8.64857H118.913V21.8197H116.3Z" fill="white" />
        <path d="M99.2197 21.8197L105.121 6.17969H107.59L113.491 21.8197H110.716L109.436 18.3342H103.286L102.029 21.8197H99.2197ZM104.124 15.9994H108.575L106.831 11.2739C106.786 11.1472 106.733 10.9983 106.673 10.827C106.612 10.6557 106.552 10.4881 106.491 10.3243C106.431 10.153 106.386 10.0003 106.355 9.86625C106.318 10.0003 106.269 10.153 106.208 10.3243C106.155 10.4881 106.099 10.6557 106.038 10.827C105.978 10.9983 105.925 11.1472 105.88 11.2739L104.124 15.9994Z" fill="white" />
        <path d="M85.1753 21.8197V6.17969H87.7852V12.5139H94.7224V6.17969H97.3323V21.8197H94.7224V14.9604H87.7852V21.8197H85.1753Z" fill="white" />
        <path d="M77.8052 22.1174C76.5869 22.1174 75.5566 21.8864 74.7143 21.4244C73.872 20.9625 73.1914 20.344 72.6725 19.5691C72.1611 18.7867 71.7889 17.9187 71.5558 16.965C71.3226 16.0038 71.2061 15.0314 71.2061 14.0479C71.2061 13.1016 71.3264 12.1516 71.567 11.1979C71.8077 10.2441 72.1875 9.37236 72.7064 8.58255C73.2253 7.79274 73.9059 7.1594 74.7482 6.68253C75.5904 6.19821 76.6094 5.95605 77.8052 5.95605C78.7904 5.95605 79.6402 6.11253 80.3546 6.42547C81.069 6.73841 81.6594 7.14077 82.1257 7.63254C82.5994 8.12431 82.9567 8.64215 83.1973 9.18608L80.8735 10.2814C80.6178 9.90883 80.3508 9.58099 80.0726 9.29785C79.7943 9.01471 79.471 8.7949 79.1025 8.63843C78.7415 8.48196 78.3091 8.40372 77.8052 8.40372C77.0757 8.40372 76.459 8.5751 75.9552 8.91784C75.4513 9.26059 75.049 9.71138 74.7482 10.2702C74.4549 10.829 74.2405 11.44 74.1052 12.1032C73.9698 12.7589 73.9021 13.4071 73.9021 14.0479C73.9021 14.7259 73.9773 15.4002 74.1277 16.0708C74.2781 16.734 74.5113 17.3375 74.8271 17.8814C75.143 18.4179 75.5453 18.8501 76.0341 19.1779C76.5305 19.4983 77.1208 19.6585 77.8052 19.6585C78.5422 19.6585 79.1513 19.476 79.6326 19.1109C80.1215 18.7383 80.5464 18.2577 80.9073 17.6691L83.2876 18.552C82.9717 19.2301 82.5656 19.8373 82.0693 20.3738C81.5729 20.9103 80.9713 21.335 80.2644 21.6479C79.565 21.9609 78.7452 22.1174 77.8052 22.1174Z" fill="white" />
        <path d="M64.1663 22.1176C63.0423 22.1176 62.0626 21.9121 61.2272 21.5009C60.3918 21.0823 59.7425 20.503 59.2792 19.763C58.8235 19.023 58.5957 18.1708 58.5957 17.2065C58.5957 16.2721 58.8387 15.4648 59.3248 14.7846C59.8184 14.0969 60.4716 13.5811 61.2842 13.2373C60.9044 13.0504 60.5589 12.8 60.2475 12.486C59.9437 12.1721 59.7007 11.8095 59.5184 11.3984C59.3438 10.9798 59.2564 10.5126 59.2564 9.99684C59.2564 9.21197 59.4577 8.50931 59.8602 7.88888C60.2627 7.26846 60.8285 6.77884 61.5576 6.42004C62.2943 6.06124 63.1638 5.88184 64.1663 5.88184C65.1688 5.88184 66.0384 6.06124 66.775 6.42004C67.5193 6.77884 68.0927 7.26846 68.4952 7.88888C68.8977 8.50931 69.099 9.21197 69.099 9.99684C69.099 10.5051 69.0078 10.9686 68.8256 11.3872C68.6433 11.7983 68.3965 12.1609 68.0851 12.4748C67.7737 12.7813 67.4282 13.028 67.0484 13.2148C67.8611 13.5587 68.518 14.0782 69.0192 14.7734C69.5205 15.4686 69.7711 16.2796 69.7711 17.2065C69.7711 18.1708 69.5395 19.023 69.0762 19.763C68.6129 20.503 67.9598 21.0823 67.1168 21.5009C66.2814 21.9121 65.2979 22.1176 64.1663 22.1176ZM64.1663 19.763C64.7359 19.763 65.2409 19.6546 65.6814 19.4378C66.1295 19.2136 66.4789 18.9034 66.7295 18.5072C66.9877 18.111 67.1168 17.6438 67.1168 17.1056C67.1168 16.5973 66.9915 16.1413 66.7409 15.7377C66.4902 15.334 66.1409 15.0163 65.6928 14.7846C65.2523 14.5529 64.7435 14.437 64.1663 14.437C63.5815 14.437 63.0689 14.5529 62.6284 14.7846C62.1879 15.0163 61.8462 15.334 61.6031 15.7377C61.3601 16.1413 61.2386 16.5973 61.2386 17.1056C61.2386 17.6438 61.3601 18.111 61.6031 18.5072C61.8538 18.9034 62.1993 19.2136 62.6398 19.4378C63.0803 19.6546 63.5891 19.763 64.1663 19.763ZM64.1663 12.1833C64.8574 12.1833 65.4156 11.9964 65.8409 11.6227C66.2738 11.2414 66.4902 10.7668 66.4902 10.1987C66.4902 9.60067 66.2738 9.11479 65.8409 8.74104C65.408 8.36729 64.8498 8.18041 64.1663 8.18041C63.4828 8.18041 62.9284 8.36729 62.5031 8.74104C62.0778 9.11479 61.8652 9.60067 61.8652 10.1987C61.8652 10.7668 62.0702 11.2414 62.4803 11.6227C62.898 11.9964 63.46 12.1833 64.1663 12.1833Z" fill="white" />
        <path d="M46.8916 21.8197V6.17969H49.4927V19.3284H57.1609V21.8197H46.8916Z" fill="white" />
        <path d="M33.2246 21.8197V6.17969H39.7146C41.0285 6.17969 42.0705 6.41801 42.8407 6.89466C43.6185 7.36386 44.1735 7.97084 44.5057 8.7156C44.8379 9.45291 45.0041 10.22 45.0041 11.0169C45.0041 11.5755 44.9059 12.1378 44.7096 12.7038C44.5208 13.2624 44.215 13.78 43.7921 14.2566C43.3693 14.7333 42.8218 15.1168 42.1498 15.4073C41.4778 15.6903 40.6661 15.8318 39.7146 15.8318H35.841V21.8197H33.2246ZM35.841 13.4188H39.8506C40.4622 13.4188 40.9492 13.2996 41.3117 13.0613C41.6741 12.8155 41.9346 12.5102 42.0932 12.1452C42.2518 11.7728 42.331 11.3967 42.331 11.0169C42.331 10.6743 42.2593 10.3168 42.1158 9.94445C41.9799 9.56463 41.7307 9.24438 41.3683 8.98371C41.0058 8.72305 40.4999 8.59271 39.8506 8.59271H35.841V13.4188Z" fill="white" />
      </svg>
    </div>
  )
}

export default function Navbar() {
  const pathname = usePathname()


  return (
    <Disclosure as="nav" className="bg-[#034b48] fixed w-screen px-8">
      {({ open }) => (
        <>
          <div className="mx-auto">
            <div className="relative flex h-[58px] items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon aria-hidden="true" className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon aria-hidden="true" className="block h-6 w-6 text-white" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-lelft sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href={'/'}>
                    <Logo />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  {/* <div className="flex -space-x-1 xl:space-x-4 text-nowrap">
                    {navigation.map((item) => {
                      const isActive = item.href === pathname; // Declare isActive here
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          aria-current={isActive ? 'page' : undefined}
                          className={classNames(
                            isActive ? 'bg-white text-darkGreen' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-3 text-md lg:text-lg font-medium'
                          )}
                        >
                          {item.name}
                        </Link>
                      );
                    })}

                  </div> */}
                </div>
              </div>

              {/* Right-side items are hidden on mobile */}
              <div className="sm:flex sm:items-center sm:pr-0">
                <div className='hidden sm:flex space-x-4 text-sm text-white'>
                  {navigation.map((item) => {
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className='py-2 hover:text-[#58ff89] font-semibold'>
                        {item.name}
                      </Link>
                    )
                  })}
                </div>

                {/* Profile dropdown */}
                {/* <Menu as="div" className="lg:hidden relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="h-8 w-8 rounded-full"
                      />
                    </Menu.Button>
                  </div>
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <div className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} >
                          <div>Call us: 1(310)PL8-CHAT</div>
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Talk to Sales
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Sign in
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden flex justify-end">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames('block rounded-md px-3 py-2 text-base font-medium text-white')}
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
