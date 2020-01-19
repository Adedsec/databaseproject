import "./App.css";
import React from "react";
import Async from "react-async";
import Table from "./Table";

//const { Client } = require("@elastic/elasticsearch");
//const client = new Client({ node: "http://localhost:9200" });

const address = "http://localhost:9200/news/_search?q=*:*&size=100";
const address2 = "https://jsonplaceholder.typicode.com/posts";
// const loadelastic = async () => {
//   await client
//     .search({
//       index: "news",
//       body: {}
//     })
//     .then(res => (res.ok ? res : Promise.reject(res)))
//     .then(res => res.json());
// };
const loadPosts = () =>
  fetch(address, { method: "GET" })
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

const Data = () => (
  <Async promiseFn={loadPosts}>
    {({ data, error, isLoading }) => {
      if (isLoading) return <div>Fetching data... Please Wait</div>;

      if (error) return <div>Something went wrong: ${error.message}</div>;

      if (data) {
        const pure = [];
        const data2 = data.hits.hits;
        data2.forEach(function(item) {
          pure.push(item._source);
        });
        console.log(pure);
        return <Table data={pure} />;
        return null;
        const responseData = data.map(post => {
          return (
            <div>
              <p> {post.title} </p>
              <hr />
              <h1> {post.body} </h1>
            </div>
          );
        });
        return <div>{responseData}</div>;
      }
      return null;
    }}
  </Async>
);

export default Data;
