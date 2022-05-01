import React from 'react'
import ReactPaginate from 'react-paginate'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import Store from '../store'
import './Pagination.css'
import { Button } from 'semantic-ui-react'



const Paginat = () => {
    const OwnStore = useContext(Store)
    return (
        <div>
            <ReactPaginate
                align = "center"
                previousLabel={'Back'}
                nextLabel={'Next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={Math.ceil(OwnStore.dataRepos.length / OwnStore.perPage)}
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                onPageChange={OwnStore.handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
            <Button.Group color='blue' centered>
                <Button basic color='teal' onClick={OwnStore.prevHundred}>Previos 100 Repos</Button>
                <Button basic color='teal' onClick={OwnStore.nextHundred}>Next 100 Repos</Button>
            </Button.Group>

        </div>
    )
}
export default observer(Paginat)








