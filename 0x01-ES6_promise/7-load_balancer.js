// A function that returns the value of the fastest promise to resolve

export default async function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((isFasterPromise) => isFasterPromise);
}
