import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
const APIKEY = "&api-key=tnkdGL4fGMB8GtdLgnEQu9zXtznihNGA";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  getContacts: function() {
    return axios.get("/api/contacts");
  },
  getContact: function(obj) {
    return axios.get("/api/contact/get", obj);
  },
  deleteContact: function(id) {
    return axios.delete("/api/contacts/" + id);
  },
  saveContact: function(contactData) {
    return axios.post("/api/contacts", contactData);
  },
  saveUser: function(userData) {
    return axios.post("/api/users", userData)
  },
  getUser: function(obj) {
    console.log(obj.username)
    return axios.post("/api/users/login", obj);
  },
  getUsers: function() {
    return axios.get("/api/users");
  }

};
