import axios from "axios";

const BASE_URL = 'http://localhost:4000/api/';

const GoodsAPI = axios.create({
  baseURL:BASE_URL,
})

export function getDataByUrl(url) {
  return GoodsAPI(url)
    .then(res => res.data)
}

export function getGoodsCategory(category) {
  return GoodsAPI(`/categories?item=${category}`)
    .then(res => res.data)
}

export function getFilteredGoods(url, cost, amount) {
  return GoodsAPI(url + `?cost=${cost}&amount=${amount}`)
    .then(res => res.data)
}