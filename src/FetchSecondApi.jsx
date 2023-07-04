import { useEffect, useState } from "react";
function FetchSecondApi() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  function fetcherData() {
    const url = "https://jsonplaceholder.typicode.com/posts/1/comments";

    const getIt = async () => {
      try {
        const fet = await fetch(url);
        const json = await fet.json();
        // console.log(json);
        setData(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getIt();
  }
  useEffect(fetcherData, []);
  if (error) {
    <h2>{error}</h2>;
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (data) {
    console.log(data);
    return (
      <div>
        <h1>I am a second api</h1>
        {data.map((el, ind) => {
          const { name } = el;
          return (
            <div key={ind}>
              <h6>{name}</h6>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FetchSecondApi;
