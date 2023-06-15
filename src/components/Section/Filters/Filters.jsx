import React from 'react';

import './filters.css';

export default function Filters({ selectedTags, onClearTags }) {
const globalFeedClass = selectedTags.length > 0 ? "clear-tags-button globalfeed" : "clear-tags-button";
  return (
    <div>
        <div className="selected-tags-container">
        <h3 className={globalFeedClass} onClick={onClearTags}>Global Feed</h3>
        {selectedTags.length > 0 && (
          <>
            <div className="selected-tags">
              {selectedTags.map((tag) => (
                <div key={tag} className="selected-tag">
                    {tag}
                </div>
              ))}
            </div>
          </>
        )}
        </div>
        <hr />
    </div>
  );
}
