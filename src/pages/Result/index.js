import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks, selectBooks } from 'store/books'
import SearchForm from 'components/SearchForm'
import Stack from 'components/Stack'
import Books from 'pages/Result/components/Books'
import Pagination from 'pages/Result/components/Books/Pagination'
import Modal from 'components/Modal'
import Filters from 'pages/Result/components/Filters'

function Result() {
  const dispatch = useDispatch()
  const { search } = useLocation()
  const { items } = useSelector(selectBooks)
  const [show, setShow] = useState(false)

  const toggle = () => {
    setShow((prev) => !prev)
  }

  useEffect(() => {
    if (!search) {
      return
    }

    dispatch(fetchBooks(search))
  }, [dispatch, search])

  return (
    <>
      <div className={styles.wrapper}>
        <Stack gaps={[0, 10, 20, 20]}>
          <Link to="/">
            <button className={styles.button}>책책책 책을 찾읍시다!</button>
          </Link>
          <SearchForm toggle={toggle} />
          <Books items={items} />
          {items ? <Pagination /> : <div>검색 결과가 없습니다.</div>}
        </Stack>
      </div>
      <Modal show={show} width={'25%'} height={'45%'} toggle={toggle}>
        <Filters toggle={toggle} />
      </Modal>
    </>
  )
}

const styles = {
  wrapper: 'pb-4',
  button: 'border rounded bg-blue-500 text-white text-lg'
}

export default Result
