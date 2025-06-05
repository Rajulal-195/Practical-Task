import React, { useState } from 'react';

function Addproject({ onAddUser }) {
  const [name, setName] = useState('');
  const [completedProjects, setCompletedProjects] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !completedProjects) return alert('All fields required.');

    const user = {
      name,

      completedProjects: parseInt(completedProjects)
    };

    onAddUser(user);


    setName('');

    setCompletedProjects('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text" placeholder="Name" className="border p-2 w-full" value={name} onChange={(e) => setName(e.target.value)} />

      <input
        type="number" placeholder="Completed Projects" className="border p-2 w-full" value={completedProjects} onChange={(e) => setCompletedProjects(e.target.value)}
      />
      <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}

export default Addproject;
