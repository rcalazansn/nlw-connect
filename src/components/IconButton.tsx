import { type ComponentProps, ReactNode } from 'react'

interface IconButtonInterface extends ComponentProps<'button'> {}
export function IconButton(props: IconButtonInterface) {
  return (
    <button
      className="px-1.5 bg-gray-500 rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
      {...props}
    />
  )
}
