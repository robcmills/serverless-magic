/* eslint-disable no-restricted-globals */

import { receiver } from './receiver'

const worker = () => {
  self.onmessage = (e: any) => {
    receiver(e.data)
    // self.postMessage('Response back to main thread');
  }
}

export { worker }