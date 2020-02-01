function getDomain() {
  const { protocol, hostname } = window.location;
  return `${protocol}//${hostname}`;
}

export const serverURL = `${process.env.REACT_APP_SERVER_URL}`;