import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'

import { BrowserRouter} from 'react-router-dom'


import App from './components/App'

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
