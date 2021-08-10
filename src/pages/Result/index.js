import React, { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks, selectBooks } from 'store/books'
import SearchForm from 'components/SearchForm'
import Stack from 'components/Stack'
import Books from 'pages/Result/components'
import Pagination from 'pages/Result/components/Pagination'

function Result() {
  const dispatch = useDispatch()
  const { search } = useLocation()
  const { items } = useSelector(selectBooks)

  useEffect(() => {
    if (!search) {
      return
    }

    dispatch(fetchBooks(search))
  }, [dispatch, search])

  return (
    <div className={styles.wrapper}>
      <Stack gaps={[0, 10, 20, 20]}>
        <Link to="/">
          <button className={styles.button}>책책책 책을 찾읍시다!</button>
        </Link>
        <SearchForm />
        <Books items={items} />
        <Pagination />
      </Stack>
    </div>
  )
}

const styles = {
  wrapper: 'pb-4',
  button: 'border rounded bg-blue-500 text-white text-lg'
}

export default Result
