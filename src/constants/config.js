function getDomain() {
  const { protocol, hostname } = window.location;
  return `${protocol}//${hostname}`;
}

export const serverURL = `${getDomain()}:3004`;