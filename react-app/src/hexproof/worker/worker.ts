import { receiver } from './receiver'

const worker: Worker = self as any

worker.onmessage = (e: any) => {
	console.log('Worker received message', e.data)
  receiver.receive(e.data)
  self.postMessage('Response back to main thread')
}
