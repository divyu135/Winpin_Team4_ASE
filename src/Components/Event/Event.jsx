import React, { useState, useEffect} from 'react';

function Event() {

  const [data, setData] = useState({ message: "" });

  useEffect(() => {
    // const url = 'https://winpin-express.mybluemix.net'
    fetch(`/api/hello`)
    .then(res => res.json())
    .then(res => 
      setData({message:res.message})
      );
    
      console.log(data.message)
  }, [data]);

  return (
    <div>
      <h1>Event</h1> 
      <br />
      <p>{data.message}</p>
    </div>
  );
}

export default Event;
