import axios from "axios";

const BASE_URL = 'http://localhost:4000/api/';

const API = axios.create({
  baseURL:BASE_URL,
})

export function getDataByUrl(url) {
  return API(url)
    .then(res => res.data);
}

export function getGoodsCategory(category) {
  return API(`/categories?item=${category}`)
    .then(res => res.data);
}

export function getFilteredGoods(url, cost, amount) {
  return API(url + `?cost=${cost}&amount=${amount}`)
    .then(res => res.data);
}