console.log(
  "In JavaScript, default function parameters allow you to initialize named parameters with default",
  "values if no values or undefined are passed into the function."
);

function say(message = "Hi") {
  console.log(message);
}

say(); // 'Hi'
say("Hello"); // 'Hello'
