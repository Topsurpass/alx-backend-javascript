// A function that return a promise that rejects with an error

export default function uploadPhoto(filename) {
  return new Promise((reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
}
