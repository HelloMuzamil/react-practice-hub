// api.js

// Yeh ek fake API hai jo thoda delay karke data return karti hai.
// Jaise real server se data fetch hota hai.

export async function fetchBio(person) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let data;
      if (person === "Alice") {
        data = "Alice is a student who loves React.";
      } else if (person === "Bob") {
        data = "Bob is a developer who enjoys JavaScript.";
      } else if (person === "Taylor") {
        data = "Taylor is a designer who likes creative work.";
      } else {
        data = "No bio available.";
      }
      resolve(data);
    }, 1500); // 1.5 second ka delay (loading effect ke liye)
  });
}

// fetchBio("Alice").then((data) => {
//   console.log("Result aya:", data);
// });

const myPromise = new Promise((resolve) => {
  console.log("Executor chal raha hai");
  resolve("Hello");
});

myPromise.then((value) => {
  console.log("Then me aya:", value);
});
