// A function that create / return new promise that automatically
// resolves when called

export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    resolve();
  });
}
