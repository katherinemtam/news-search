export const getArticles = async (search) => {
  // eslint-disable-next-line max-len
  const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.API_KEY}`);

  const json = await res.json();

  return json.articles;
};
