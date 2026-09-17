import { cx } from '../lib/utils'

export default function Container({ children, className = '' }) {
  return (
    <div className={cx('mx-auto w-full max-w-content px-6 md:px-10 lg:px-16', className)}>
      {children}
    </div>
  )
}
