const dataServers = {
  b: {
    name: 'Archipel Low-Tech Lab',
    baseUrl: process.env.REACT_APP_MIDDLEWARE_URL,
    authServer: true,
    default: true,
    uploadsContainer: '/files'
  },
  a: {
    name: 'Archipel Glocal Low-tech',
    baseUrl: "https://data.gl.assemblee-virtuelle.org/",
  }
};

export default dataServers;
