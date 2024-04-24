import { Fragment ,useState} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import NotificationIcon from '../Icons/NotificationIcon'
import Language from '../Icons/Language'
import BuyMoreModal from '../Model/BuyMoreModal'
import { sidebarConst } from '../Constant/index';
import { useNavigate,useLocation } from 'react-router-dom';


const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NabarResponsive() {
    const [isHovered, setIsHovered] = useState(-1);
    const navigate = useNavigate();
    const location = useLocation();
  return (
    <>
     
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-[#171f38] border-b-[1px] border-b-[#333C57]">
          {({ open }) => (
            <>
              <div className="  px-4 sm:px-6 lg:px-8">
                <div className="flex h-24  items-center w-full justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                    <img src='/images/dark.png'  alt='' className='' />
                    </div>
                   
                  </div>
                  <div className="hidden md:block">
                    <div className=" flex gap-6 items-center ">
                    <div className='flex '> <p className='text-[#CCCED5] hidden md:block font-manrope text-sm'>Availlable Funds:</p>
            <p className='text-[#439CFF] hidden md:block text-sm font-manrope'>$6,074.00</p></div>
           
         
<BuyMoreModal />
                      
                      <NotificationIcon />
            <Language />

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img src='/images/Avatar.png'  alt='' className='' />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
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

              <Disclosure.Panel className="md:hidden absolute w-full bg-[#171f38] border-b-[1px] border-b-[#333C57] z-10">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {sidebarConst.map((item,index) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                     
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <div key={index}
                    onClick={() => navigate(item.path)}
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(-1)}
                    className={`flex items-center   space-x-4 px-3 py-3 rounded-md cursor-pointer 
                                hover:bg-[#1C2642] transition-colors duration-200
                                ${((isHovered === index) || (location.pathname === item.path ))? 'bg-[#1C2642]' : 'bg-transparent'}`}>
                    <item.icon isHovered={((isHovered === index) || (location.pathname === item.path ))} className={`text-xl ${((isHovered === index) || (location.pathname === item.path )) ? "text-[#439CFF]" : "text-[#CCCED5]"}`} />
                    <p className={`text-xl font-manrope transition-colors duration-200 ${((isHovered === index) || (location.pathname === item.path )) ? "text-[#439CFF]" : "text-[#CCCED5]"} 
                                  `}>
                        {item.name}
                    </p>
                </div>
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                    <img src='/images/Avatar.png'  alt='' className='' />
                    </div>
                    <div className="ml-3">
                           <div className='flex '> <p className='text-[#CCCED5]  font-manrope text-sm'>Availlable Funds:</p>
            <p className='text-[#439CFF]  text-sm font-manrope'>$6,074.00</p></div>
           
         
<BuyMoreModal />
                    </div>
                    <div
                      className="relative ml-auto flex-shrink-0 flex gap-4 "
                    >
                       <NotificationIcon />
            <Language />
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

       
      </div>
    </>
  )
}
