import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import range from 'lodash.range'

const Paginator = ({ numPages, currentPage, goToPage, className = 'justify-content-center' }) => (
  <Pagination className={className}>
    <PaginationItem disabled={!currentPage || currentPage === 1}>
      <PaginationLink previous onClick={() => goToPage(currentPage - 1)}/>
    </PaginationItem>
    {range(numPages).map(page => (
      <PaginationItem key={page} active={page + 1 === currentPage}>
        <PaginationLink onClick={() => goToPage(page + 1)}>
          {page + 1}
        </PaginationLink>
      </PaginationItem>
    ))}
    <PaginationItem disabled={!currentPage || !(currentPage < numPages)}>
      <PaginationLink next onClick={() => goToPage(currentPage + 1)}/>
    </PaginationItem>
  </Pagination>
)

export default Paginator
