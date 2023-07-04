import React, { useState, useEffect } from "react";

function RenderRobots() {
  const [inputString, setInputString] = useState("");
  const [robots, setAllRobots] = useState([]);
  const [fetchData, setFetchData] = useState({
    error: null,
    loading: true,
    data: null,
  });

  const { error, loading, data } = fetchData;
  function getInput(e) {
    const { value } = e.target;
    setInputString(value);
  }
  function addRobot() {
    setAllRobots((prev) => [...prev, data.url]);
    setInputString("");
  }
  function deleteRobot(e, robot) {
    setAllRobots((prev) => prev.filter((el) => el !== robot));
  }

  useEffect(() => {
    const url = `https://robohash.org/${inputString}`;
    const fetcher = async () => {
      try {
        const dataRequest = await fetch(url);
        const jsonData = await dataRequest;
        console.log(jsonData);
        setFetchData((prev) => ({ ...prev, data: jsonData }));
      } catch (error) {
        console.log(error);
        setFetchData((prev) => ({ ...prev, error: error.message }));
      } finally {
        setFetchData((prev) => ({ ...prev, loading: false }));
      }
    };
    fetcher();
  }, [robots]);

  console.log(robots);

  return (
    <>
      <h1>My beautiful robots</h1>
      <input
        onChange={getInput}
        placeholder="your input here"
        value={inputString}
        name="input"
      />
      <button onClick={addRobot}>Get that robot</button>
      {robots.length > 0 &&
        robots.map((el) => {
          return (
            <div>
              <img alt="robot" src={el} />
              <button onClick={(e) => deleteRobot(e, el)}>
                erase this robot
              </button>
            </div>
          );
        })}
    </>
  );
}

export default RenderRobots;
