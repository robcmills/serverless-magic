import Worker from 'worker-loader!./worker'

import { store } from 'hexproof/redux/store'

const worker = new Worker()

worker.onmessage = (e: any) => {
  store.dispatch(e.data)
}

worker.onerror = (error: any) => {
  console.error('Worker error', error)
}

export { worker }
