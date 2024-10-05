import React from 'react';

type DescriptionProps = {
  description: string;
};

const Description: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <div className='text-center relative'>
        <p>Règle</p>
        <p>{description}</p>
    </div>
  );
};

export default Description;
