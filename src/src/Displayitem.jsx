import React from 'react';

function Displayitem({ users }) {
  if (users.length === 0) return <p>No users added yet.</p>;

  return (
    <div className="space-y-4">
      {users.map((user, index) => (
        <div key={index} className="border p-4 rounded shadow-sm">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Completed Projects:</strong> {user.completedProjects}</p>
        </div>
      ))}
    </div>
  );
}

export default Displayitem;
