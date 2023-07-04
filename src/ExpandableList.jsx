import React, { useState, useEffect } from "react";
function ExpandableList() {
  const [activity, setActivity] = useState("");
  const [activities, setActivities] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(null);

  function fetchActivity() {
    const url = "https://www.boredapi.com/api/activity";
    const getActivity = async () => {
      try {
        const activity = await fetch(url);
        const activityJson = await activity.json();
        setActivity(activityJson);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("is all set");
      }
    };
    getActivity();
  }
  useEffect(fetchActivity, [activities]);
  function generateActivity() {
    setActivities((prev) => [...prev, activity]);
  }

  function detailsActivity(ind) {
    setShowDetails((prev) => !prev);
    setCurrentActivity(ind);
  }

  return (
    <>
      <h1>My list of activities</h1>
      <button onClick={generateActivity}>Generate activity</button>
      {activities.map((el, ind) => {
        return (
          <div>
            <h2>{el.activity}</h2>
            <button onClick={() => detailsActivity(ind)}>Expand</button>
            {showDetails && currentActivity === ind && (
              <ol>
                {Object.entries(el).map(([key, value]) => {
                  return <li>{`${key}: ${value}`}</li>;
                })}
              </ol>
            )}
          </div>
        );
      })}
      <div></div>
    </>
  );
}

export default ExpandableList;
