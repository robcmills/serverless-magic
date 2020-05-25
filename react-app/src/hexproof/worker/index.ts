import Worker from "worker-loader!./worker";

const worker = new Worker();

worker.onmessage = function(e: any) {
  console.log('Message received from Worker: ', e.data);
};

worker.postMessage("Some input to worker");

export { worker };
