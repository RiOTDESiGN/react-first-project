import Filters from './Filters/Filters'
import Feed from './Feed/Feed'
import Pagination from './Pagination/Pagination'

export default function NewsCard() {
    return (
        <div className="newscard">
            <Filters />
            <Feed />
            <Pagination />
        </div>
    )
}