import Pagination from 'react-bootstrap/Pagination'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState(12)
  const [prev, setPrev] = useState(2)
  const [next, setNext] = useState(2)

  const prevPage = () => {
    page > 1 && setPage((item) => item - 1)
  }

  const nextPage = () => {
    page < pages && setPage((item) => item + 1)
  }

  const pages = 20
  let items = []

  useEffect(() => {
    if (pages - 2 <= page) {
      setPrev(pages - page)
      setNext(2)
    } else if (2 >= page) {
      setNext(page - 1)
      setPrev(2)
    } else {
      setPrev(2)
      setNext(2)
    }
  }, [page])

  for (let i = page - next; i <= page + prev; i++) {
    items.push(
      <Pagination.Item
        onClick={() => {
          setPage(i)
        }}
        key={i}
        active={i === page}
      >
        {i}
      </Pagination.Item>,
    )
  }

  return (
    <div className="App">
      <Pagination size="lg">
        <Pagination.First
          onClick={() => {
            setPage(1)
          }}
        />
        <Pagination.Prev
          onClick={() => {
            prevPage()
          }}
        />
        {page > 3 && (
          <>
            <Pagination.Item
              onClick={() => {
                setPage(1)
              }}
            >
              {1}
            </Pagination.Item>
            <Pagination.Ellipsis />
          </>
        )}

        {items}

        {page < pages - 2 && (
          <>
            <Pagination.Ellipsis />
            <Pagination.Item
              onClick={() => {
                setPage(pages)
              }}
            >
              {pages}
            </Pagination.Item>
          </>
        )}

        <Pagination.Next
          onClick={() => {
            nextPage()
          }}
        />
        <Pagination.Last
          onClick={() => {
            setPage(pages)
          }}
        />
      </Pagination>
      <div>
        <h1>Page: {page}</h1>
      </div>
    </div>
  )
}

export default App
