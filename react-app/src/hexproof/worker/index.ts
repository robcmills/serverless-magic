import { worker as workerFunc } from './worker';

// Convert worker function to string
let dataObj = '(' + workerFunc + ')();';
// Firefox adds "use strict"; to any function which might block worker execution so remove it
dataObj = dataObj.replace('"use strict";', '');

const blob = new Blob([dataObj]);

const blobURL = URL.createObjectURL(blob);

const worker = new Worker(blobURL);

URL.revokeObjectURL(blobURL);

worker.onmessage = function(e) {
  console.log('Message received from Worker: ', e.data);
};

worker.postMessage("Some input to worker");

export { worker };
