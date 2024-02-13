export async function getMaquillaje() {
  // eslint-disable-next-line no-undef
  const url = `http://localhost:1337/api/maquillajes?populate=*`;
  const request = await fetch(url);
  const data = await request.json();
  return await data;
}
export async function getProducto(product) {
  const url = `http://localhost:1337/api/maquillajes?filters[url]=${product}&populate=*`;
  const request = await fetch(url);
  const data = await request.json();
  return await data;
}
