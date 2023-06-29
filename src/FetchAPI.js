import { useEffect, useState } from "react";

function DataApi() {
  //Option with useEffect using the FetchAPI wich is a tool that is built in most modern browsers, using fetch we need to handle our errors ourselves so we throw response as an error for it to handled by our catch callback

  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [data, setData] = useState({
    loading: true,
    error: null,
    results: null,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const dataFetch = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );

        const jsonResult = await dataFetch.json();
        console.log(jsonResult);
        setData((prev) => ({ ...prev, results: jsonResult }));
      } catch (error) {
        console.log(error);
        setData((prev) => ({ ...prev, error: error.message }));
      } finally {
        setData((prev) => ({ ...prev, loading: false }));
      }
    };
    getData();
  }, []);
  const { loading, error, results } = data;
  if (loading) {
    return <h1>loading..</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  console.log(results);
  return (
    <>
      <h1>Here is the gorgeous info</h1>
      {results.map((obj) => {
        //  const { street } = obj.address;
        return (
          <>
            <h1>{obj.name}</h1>
          </>
        );
      })}
    </>
  );
}
export default DataApi;
