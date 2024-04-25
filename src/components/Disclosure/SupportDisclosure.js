import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon,PlusIcon } from '@heroicons/react/20/solid'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function SupportDisclosure({title}) {
  return (
    <div className="w-full ">
      <div className=" w-full  rounded-2xl ">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className={`flex w-full  justify-between  ${!open?"border-[#333C57] border-b":"border-none"}  py-5 text-left text-[16px] font-medium text-white  focus:outline-none `}>
                <span>{title}</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-[#CCCED5]`}
                />
             
                
              </Disclosure.Button>
              <Disclosure.Panel className="py-5 border-[#333C57] border-b  text-sm text-[#CCCED5]">
              Yes, we prioritize the security of your investments. Our platform conducts thorough due diligence on listed startups, provides transparent information, encourages portfolio diversification, and ensures secure transactions. While all investments carry some risk, we're committed to minimizing it through ongoing monitoring and transparency. Keep in mind that, as with any investment, there's inherent risk, and past performance is not indicative of future results.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
      </div>
    </div>
  )
}
