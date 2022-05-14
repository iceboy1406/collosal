import useMobileDeviceDetection from 'hooks/useMobileDetection'
import React, { useEffect, useRef, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import randomString from 'utils/randomString'

interface SelectOption {
  label: string
  value: string
}
interface SelectProps {
  defaultValue?: string
  onChange?: React.FormEventHandler<HTMLSelectElement>
  required?: boolean
  options: SelectOption[]
  id?: string
}
const Select = ({
  onChange = () => {},
  required = false,
  options,
  defaultValue = '',
  id,
}: SelectProps) => {
  const defaultIndex: number = options.findIndex(
    (element) => element.value == defaultValue
  )
  const [selectedIndex, setSelectedIndex] = useState<number>(
    defaultIndex == -1 ? 0 : defaultIndex
  )
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const isMobile = useMobileDeviceDetection()
  const nativeSelect: React.LegacyRef<HTMLSelectElement> = useRef(null)
  const triggerSelectChangeEvent = (index: number) => {
    if (nativeSelect.current) {
      nativeSelect.current.options.selectedIndex = index
    }
    nativeSelect.current?.dispatchEvent(new Event('change', { bubbles: true }))
  }
  return (
    <>
      {/* Fake Select */}
      <div
        className={`w-full relative select-none ${
          isMobile ? 'cursor-default' : 'cursor-pointer'
        }`}
      >
        <div
          className={`w-full flex place-content-between place-items-center bg-transparent border-borderLight px-4 py-2 rounded hover:bg-light border hover:border-white z-10 hover:border-opacity-30 `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-white text-opacity-40 w-full">
            {options[selectedIndex].label}
          </p>
          <div className="text-xl text-white text-opacity-40">
            <FiChevronDown />
          </div>
          {/* Real select but hidden */}
          <select
            className="invisible w-0 h-0"
            onChange={onChange}
            required={required}
            ref={nativeSelect}
            id={id}
          >
            {options.map((option) => {
              return (
                <option key={randomString(64)} value={option.value}>
                  {option.label}
                </option>
              )
            })}
          </select>
        </div>
        <div
          className={`absolute left-0 top-12 w-full bg-[#21172f] bg-cover rounded overflow-hidden ${
            isOpen ? '' : 'hidden'
          }`}
        >
          <div className="bg-light backdrop-blur-3xl">
            {options.map((option, index) => {
              return (
                <div
                  key={randomString(64)}
                  onClick={() => {
                    setIsOpen(!isOpen)
                    setSelectedIndex(index)
                    triggerSelectChangeEvent(index)
                  }}
                  className={`text-white text-opacity-60 hover:bg-primary px-3 py-2 hover:text-opacity-100 ${
                    index == selectedIndex ? 'bg-primary text-opacity-100' : ''
                  }`}
                >
                  {option.label}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Select
export type { SelectProps }
