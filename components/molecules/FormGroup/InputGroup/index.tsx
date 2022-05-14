import Input, { InputProps } from 'components/atoms/Form/Input'
import Label from 'components/atoms/Label'
import { useEffect, useState } from 'react'
import randomString from 'utils/randomString'

interface InputGroupProps extends InputProps {
  label: string
}
const InputGroup = ({
  label,
  defaultValue,
  onChange,
  onSubmit,
  required,
  placeholder,
}: InputGroupProps) => {
  const [randomId, setRandomId] = useState<string>('')
  useEffect(() => {
    setRandomId(randomString(64))
  }, [])
  return (
    <div className="space-y-1.5">
      <Label label={label} htmlFor={randomId} />
      <Input
        defaultValue={defaultValue}
        id={randomId}
        onChange={onChange}
        onSubmit={onSubmit}
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}

export default InputGroup
