import React from 'react';
import Filters from './Filters/Filters'
import Articles from './Articles/Articles'
import Pagination from './Pagination/Pagination'
import Tags from './Tags/Tags'

import './section.css'

export default function Section() {
    return (
        <section>
            <div className="newscard">
                <Filters />
                <Articles />
                <Pagination />
            </div>
            <div className="tags-wrapper">
                <Tags />
            </div>
        </section>
    )
}