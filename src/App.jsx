
import Routes from './Routes'
import {Provider} from 'react-redux'
import {store,persistor} from './redux/store.js'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
const  App=()=> {
 
  return (
    <>
<Provider store={store}>
<PersistGate loading={null} persistor={persistor}>
<Routes/>
<ToastContainer/>
</PersistGate>

</Provider>
     
    
    </>
  )
}

export default App
