/* eslint-disable no-restricted-globals */
export function worker() {
  self.onmessage = function(e: any) {
    console.log('Worker received input: ', e.data);
    self.postMessage('Response back to main thread');
  }
}
