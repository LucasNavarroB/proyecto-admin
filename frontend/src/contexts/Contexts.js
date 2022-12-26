import React, { useRef } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Context = React.createContext()

const ProviderContext = ({ children }) => {
  /*const [context, setContext] = useState(
    {
      token: ''
    }
  )
  const setToken = (token) => setContext({ ...context, token: token })*/

  const token = useRef('')
  const url = 'http://localhost:5000/'

  const errorT = (text) => toast.error(`${text}`, {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const succesT = (text) => toast.success(`${text}`, {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  return (
    <Context.Provider
      value={
        {
          /*context,
          setToken,*/
          url,
          token,
          errorT,
          succesT
        }
      }
    >
      <ToastContainer />
      {children}
    </Context.Provider>
  )
}

export { Context, ProviderContext }