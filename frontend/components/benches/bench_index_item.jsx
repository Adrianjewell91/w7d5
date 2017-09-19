import React from 'react';

export const BenchIndexItem = ({bench}) => {
  return (
    <li>Bench#{bench.description} @ {bench.lat}, {bench.lng}</li>
  );
};
