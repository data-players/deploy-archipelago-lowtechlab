const dataServers = {
  a: {
    name: 'Archipel Low-Tech Lab',
    baseUrl: process.env.VITE_MIDDLEWARE_URL,
    authServer: true,
    default: true,
    uploadsContainer: '/files'
  },
  b: {
    name: 'Archipel Glocal Low-tech',
    baseUrl: "https://data.gl.assemblee-virtuelle.org/",
  }
};

export default dataServers;
