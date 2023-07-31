import React from 'react';
import '../clients.css';

const clients = [
  'client 1',
  'client 2',
  'client 3',
  'client 4',
  'client 5',
  'client 6',
  'client 7',
  'client 8',
  'client 9',

  
];

const MovingClients = () => {
  return (
    <div className="moving-container p-10 mt-8 bg-teal-600">
      <ul className="moving-list ">
        {clients.map((client, index) => (
          <li key={index} className="inline-block pr-4 animate-slide-left">
            {client}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovingClients;
