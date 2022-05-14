import Select, { SelectProps } from 'components/atoms/Form/Select'
import Label from 'components/atoms/Label'
import { useEffect, useState } from 'react'
import randomString from 'utils/randomString'

interface SelectGroupProps extends SelectProps {
  label: string
}
const SelectGroup = ({
  label,
  defaultValue,
  onChange,
  options,
  required,
}: SelectGroupProps) => {
  const [randomId, setRandomId] = useState<string>('')
  useEffect(() => {
    setRandomId(randomString(64))
  }, [])
  return (
    <div className="space-y-1.5">
      <Label label={label} htmlFor={randomId} />
      <Select
        defaultValue={defaultValue}
        onChange={onChange}
        required={required}
        options={options}
        id={randomId}
      />
    </div>
  )
}

export default SelectGroup
