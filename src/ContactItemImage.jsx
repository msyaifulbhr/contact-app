import React from 'react';

function ContactItemImage({ imageUrl }) {
  return (
    <div>
      <img src={imageUrl} alt="contact avatar" />
      </div>
  );
}

export default ContactItemImage;