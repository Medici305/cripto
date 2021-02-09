const base_url = 'https://api.coingecko.com/api/v3/coins/';

// Basic URL
export const listAllURL = () => `${base_url}markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
