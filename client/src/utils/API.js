import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
const APIKEY = "&api-key=tnkdGL4fGMB8GtdLgnEQu9zXtznihNGA";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  getContacts: function() {
    return axios.get("/api/contacts");
  }
};
