import { Container, Row, Col } from 'react-bootstrap'
import { books } from './data/books'
import BookCard from './components/BookCard'
import { useReadingList } from './hooks/useReadingList'

export default function App() {
  const { readBookIds, toggleRead, readCount } = useReadingList()

  return (
    <Container as="main" className="py-5">
      <header className="mb-4">
        <h1>One More Chapter</h1>
        <p>A shelf full of suspense. Explore the books of Lars Kepler.</p>

        <p aria-live="polite">
          {readCount} of {books.length} books read
        </p>
      </header>

      <Row className="g-5">
        {books.map(book => (
          <Col xs={12} md={6} lg={4} key={book.id}>
            <BookCard
              book={book}
              isRead={readBookIds.includes(book.id)}
              onToggleRead={toggleRead}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}