const baseUrl = "https://vercel-superfon-update.vercel.app/api";

async function getData() {
  return fetch(`${baseUrl}/data`).then((data) => data.json());
}

export { getData };