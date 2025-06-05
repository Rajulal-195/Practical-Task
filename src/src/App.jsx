import React, { useState } from 'react';
import Addproject from './Addproject';
import Displayitem from './Displayitem';


function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User Project Form</h2>
      <Addproject onAddUser={handleAddUser} />
      <h2 className="text-xl font-bold mt-8 mb-4">User Project List</h2>
      <Displayitem users={users} />
    </div>
  );
}

export default App;
