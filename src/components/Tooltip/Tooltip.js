import { Popover, Transition } from '@headlessui/react'
import React, { useState } from 'react'

export default function Tooltip({
  children,
  tip
}) {
  const [open, setOpen] = useState(false)

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="w-full relative"
    >
      <Popover>
        <>
          <div>{children}</div>
          <Transition
            show={open}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-[50000]  -top-[36px] left-1/2  -translate-x-1/2 transform px-4 sm:px-0 ">
              <div className=" relative rounded-md  ring-1 ring-black ring-opacity-5">
                <div className=" bg-[#f7f7f7]  truncate flex items-center justify-center rounded !text-black capitalize py-[6px] px-[8px] text-xs">
                  {tip}
                  <div className="relative flex justify-end itme"></div>
                  <div className="absolute h-[8px] w-[8px] rotate-45  -bottom-[4px] left-1/2 bg-[#f7f7f7]" />
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      </Popover>
    </div>
  )
}
