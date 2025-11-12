
type contentType = 'text' | 'image' | 'video';
import React, { useState } from 'react';


function ContentSwitcher() {
    const [contentType, setContentType] = useState<contentType>('text');

    let contentElement: React.ReactNode;
    
    if (contentType === 'text') {
        contentElement = <p>This is some text content.</p>;
    } else if (contentType === 'image') {
        contentElement = <img src="https://via.placeholder.com/150" alt="Placeholder" />;
    }
    else if (contentType === 'video') {
        contentElement = <video width="320" height="240" controls>
            <source src="movie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>;
    }
  return (
    <div>
      <h2>Content Switcher Component</h2>
      <div>
        <button onClick={() => setContentType('text')}> Text</button>
        <button onClick={() => setContentType('image')}> Image</button>
        <button onClick={() => setContentType('video')}> Video</button>
      </div>
    </div>
  )
};

export default ContentSwitcher;