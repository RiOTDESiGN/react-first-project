
import React, { useState } from 'react';
import Filters from './Filters/Filters'
import Articles from './Articles/Articles'
import Tags from './Tags/Tags'

import './section.css'

export default function Section() {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagSelect = (tag) => {
    setSelectedTags((prevSelectedTags) => [...prevSelectedTags, tag]);
  };

  const handleTagDeselect = (tag) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.filter((selectedTag) => selectedTag !== tag)
    );
  };

  const handleClearTags = () => {
    setSelectedTags([]);
  };

  return (
    <section>
      <div className="newscard">
        <Filters selectedTags={selectedTags} onClearTags={handleClearTags} />
        <Articles selectedTags={selectedTags} />
      </div>
      <div className="tags-wrapper">
        <Tags
          selectedTags={selectedTags}
          onTagSelect={handleTagSelect}
          onTagDeselect={handleTagDeselect}
        />
      </div>
    </section>
  );
}
