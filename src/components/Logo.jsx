import { useId } from 'react'
import { BeeIcon } from '@/components/BeeIcon'

export function Logo(props) {
  let id = useId()

  return (
    <div className={'flex items-center gap-4'}>
      <BeeIcon className={'size-16'} />
      <h2 className={'text-3xl font-black text-white'}>ForHives</h2>
    </div>
  )
}
