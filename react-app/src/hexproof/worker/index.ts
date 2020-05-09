/* eslint import/no-webpack-loader-syntax: off */
const Worker = require('workerize-loader!./worker');

let instance = new Worker();

instance.expensive(1000).then((count: number) => {
  console.log(`Ran ${count} loops`)
});

export { instance };
