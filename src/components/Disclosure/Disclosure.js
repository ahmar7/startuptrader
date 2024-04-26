import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon,PlusIcon } from '@heroicons/react/20/solid'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function DisclosureComp({title,para}) {
  return (
    <div className="w-full ">
      <div className=" w-full  rounded-2xl ">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className={`flex w-full  justify-between rounded-lg ${!open?"border-gradient":"border-gradient-1"}  p-5 text-left text-sm font-medium text-white  focus:outline-none `}>
                <span>{title}</span>
                {!open?   <PlusIcon
                  className='text-[#E5E7EA] h-6 w-6'
                />:<XMarkIcon className='text-[#E5E7EA] h-6 w-6'/>}
             
                
              </Disclosure.Button>
              <Disclosure.Panel className="p-5 border-gradient-2  text-sm text-[#CCCED5]">
                {para}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
      </div>
    </div>
  )
}
