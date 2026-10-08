import { Container, Row, Col } from 'react-bootstrap'
import { books } from './data/books'
import BookCard from './components/BookCard'
import { useReadingList } from './hooks/useReadingList'

export default function App() {
  const { readBookIds, toggleRead, readCount } = useReadingList()

  return (
    <Container as="main" className="py-5">
      <header className="gallery-header mb-5">
        <div>
          <p className="header-label">Lars Kepler · Reading collection</p>
          <h1>The Kepler Files</h1>
          <p>Twelve books. How many cases have you closed?</p>
        </div>

        <p className="reading-progress" aria-live="polite">
          <span className="reading-progress-count">
            {readCount} / {books.length}
          </span>
          <span>books read</span>
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