import React, { ReactElement } from 'react'

interface IconProps {
  iconType: React.ReactElement
  className?: string
}
const Icon = ({ iconType, className }: IconProps): ReactElement => {
  return (
    <div
      className={`flex h-6 w-6 items-center justify-center rounded-full bg-blue-400 ${className}`}
    >
      {iconType}
    </div>
  )
}

export default Icon
