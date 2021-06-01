import React from 'react'
import ReactPaginate from 'react-paginate'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import Store from '../store'
import './Pagination.css'


const Paginat = () => {
    const OwnStore = useContext(Store)
    return (
        <div>
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={Math.ceil(OwnStore.dataRepos.length/OwnStore.perPage) }
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={OwnStore.handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />

        </div>
    )
}
export default observer(Paginat)








