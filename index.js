function hello(name) {
  console.log(`Hello, ${name}`);
}

function helloName(helloFn) {
  const name = "Nur";
  helloFn(name);
}

helloName(hello);
