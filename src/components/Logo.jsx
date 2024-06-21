import { useId } from 'react'
import { BeeIcon } from '@/components/BeeIcon'

export function Logo(props) {
  let id = useId()

  return (
    <div className={'flex items-center gap-2'}>
      <BeeIcon />
      <h2 className={'text-white'}>ForHives</h2>
    </div>
  )
}
