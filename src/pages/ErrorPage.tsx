import {
  isRouteErrorResponse,
  useRouteError
} from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div className=' text-xl flex-col mt-36 mx-auto text-center h-screen'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {isRouteErrorResponse(error) ? (
        <p>
          <i>{error.statusText || error.data}</i>
        </p>
      ) : null}
    </div>
  )
}

export default ErrorPage
