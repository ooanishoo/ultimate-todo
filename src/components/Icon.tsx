import React, { ReactElement } from 'react'

interface IconProps {
  iconType: React.ReactElement
  className?: string
}
const Icon = ({ iconType, className }: IconProps): ReactElement => {
  return (
    <div className={`bg-blue-400 rounded-full w-6 h-6 flex justify-center items-center ${className}`}>
      {iconType}
    </div>
  )
}

export default Icon