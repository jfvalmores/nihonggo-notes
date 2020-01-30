function getDomain() {
  const { protocol, hostname } = window.location;
  return `${protocol}//${hostname}`;
}

export const serverURL = `${process.env.URL}`;
console.log(process.env);