// import React, { useState } from 'react';

// function App() {
//   const [number, setNumber] = useState(null);

//   const handleClick = () => {
//     fetch('http://localhost:3001/api/number')
//       .then(response => response.json())
//       .then(data => setNumber(data.number))
//       .catch(error => console.error(error));
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Get Number</button>
//       {number && <p>Number: {number}</p>}
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

function App() {
  const [number, setNumber] = useState(null);

  useEffect(() => {
    // Add a listener to handle incoming "number" events from the server
    socket.on('number', data => {
      setNumber(data.number);
    });

    return () => {
      // Remove the listener when the component is unmounted
      socket.off('number');
    };
  }, []);

  const handleClick = () => {
    // Send a "getNumber" event to the server
    socket.emit('getNumber');
  };

  return (
    <div>
      <button onClick={handleClick}>Get Number</button>
      {number && <p>Number: {number}</p>}
    </div>
  );
}

export default App;
