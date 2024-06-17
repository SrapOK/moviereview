import { FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='footer footer-center p-4 mt-20 text-base-content'>
      <aside>
        <a href='https://github.com/SrapOK/moviefinder'>
          <FaGithub
            className=' btn btn-ghost btn-circle '
            size={35}
          />
        </a>
      </aside>
    </footer>
  )
}

export default Footer
