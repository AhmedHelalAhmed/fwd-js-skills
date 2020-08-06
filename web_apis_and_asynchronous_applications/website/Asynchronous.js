// Asynchronous = abnormal order
setTimeout(() => {
  console.log("Asynchronous => third => #1 (order if not Asynchronous)");
}, 3000);

function sync() {
  console.log("Asynchronous => first => #2 (order if not Asynchronous)");
}

sync();

console.log("Asynchronous => second => #3 (order if not Asynchronous)");
