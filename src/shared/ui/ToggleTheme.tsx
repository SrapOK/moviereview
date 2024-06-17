import { FiSun } from "react-icons/fi"
import { FiMoon } from "react-icons/fi"

import useTheme, { Theme } from "@/hooks/useTheme"

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <label className='flex cursor-pointer align-middle  gap-2'>
      <FiSun size={20} className='my-auto' />
      <input
        onClick={() => toggleTheme()}
        defaultChecked={theme === Theme.dark}
        type='checkbox'
        value='light'
        className='toggle theme-controller'
      />
      <FiMoon size={20} className='my-auto' />
    </label>
  )
}

export default ToggleTheme
