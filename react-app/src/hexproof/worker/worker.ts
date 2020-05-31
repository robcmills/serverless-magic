import { receiver } from './receiver'

const worker: Worker = self as any

worker.onmessage = (e: any) => {
  receiver.receive(e.data)
}
