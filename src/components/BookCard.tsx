import { Button, Card } from 'react-bootstrap'
import type { Book } from '../interfaces/Books'

interface BookCardProps {
  book: Book
  isRead: boolean
  onToggleRead: (bookId: string) => void
}

export default function BookCard({
  book,
  isRead,
  onToggleRead
}: BookCardProps) {
  return (
    <Card
      className={`book-card h-100${isRead ? ' is-read' : ''}${book.id === 'medusa' ? ' book-card--medusa' : ''}`}
    >
      <div className="book-cover">
        <div className="book-cover-inner">

          <Card.Img
            src={book.image}
            alt={`Cover of ${book.title}`}
            loading="lazy"
            className="book-cover-image"
          />

          {book.id === 'medusa' && (
            <span className="release-badge">
              Norwegian release
              <strong>27 Oct 2026</strong>
            </span>
          )}

          <span className="read-badge" aria-hidden="true">
            Case closed
          </span>
        </div>
      </div>

      <Card.Body className="d-flex flex-column">
        <p className="book-case-label">
          {book.seriesNumber === null
            ? 'Standalone · Special case'
            : `Joona Linna · Case ${String(book.seriesNumber).padStart(2, '0')}`}
        </p>

        <Card.Title as="h2" className="fs-4">
          {book.title}
        </Card.Title>

        <Card.Text>{book.description}</Card.Text>

        <Button
          variant="outline-dark"
          className="reading-button mt-auto align-self-start"
          aria-pressed={isRead}
          aria-label={`Mark ${book.title} as ${isRead ? 'unread' : 'read'}`}
          onClick={() => onToggleRead(book.id)}
        >
          {isRead ? 'Case closed ✓' : 'Close the case'}
        </Button>
      </Card.Body>
    </Card>
  )
}