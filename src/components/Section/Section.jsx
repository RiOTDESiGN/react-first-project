import React, { useState } from 'react';
import Filters from './Filters/Filters'
import Articles from './Articles/Articles'
import Tags from './Tags/Tags'

import './section.css'

export default function Section() {
    const [selectedTags, setSelectedTags] = useState([]);
    return (
        <section>
            <div className="newscard">
                <Filters />
                <Articles />
            </div>
            <div className="tags-wrapper">
                <Tags />
            </div>
        </section>
    )
}