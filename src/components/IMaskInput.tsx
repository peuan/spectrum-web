import { FormEvent, forwardRef } from 'react'

import { IMaskInput as ReactIMaskInput, IMaskInputProps } from 'react-imask'

const IMaskInput = forwardRef<
  HTMLInputElement,
  IMaskInputProps<HTMLInputElement>
>(function IMaskCustom(props, ref) {
  const { onChange, ...rest } = props

  //doc: https://imask.js.org/guide.html#masked-number
  const defaultOptions = {
    scale: 2,
    radix: '.',
    thousandsSeparator: ',',
    padFractionalZeros: false,
    normalizeZeros: true,
    unmask: true,
  }

  return (
    <ReactIMaskInput
      inputRef={ref}
      onAccept={(value) => {
        return onChange?.({
          target: { value },
        } as unknown as FormEvent<HTMLInputElement>)
      }}
      {...defaultOptions}
      {...rest}
    />
  )
})

export default IMaskInput
