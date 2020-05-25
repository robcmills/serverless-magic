/* eslint-disable no-restricted-globals */

// import { receiver } from './receiver'

// const worker = () => {
//   self.onmessage = (e: any) => {
		// console.log('Worker received message', e.data)
    // receiver(e.data)
    // self.postMessage('Response back to main thread');
  // }
// }

const worker: Worker = self as any

worker.onmessage = (e: any) => {
	console.log('Worker received message', e.data)
  // receiver.receive(e.data)
  self.postMessage('Response back to main thread')
}

// export default worker
export default worker