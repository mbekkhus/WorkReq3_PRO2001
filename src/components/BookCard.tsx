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
    <Card className="book-card h-100">
      <div className="book-cover">
        <Card.Img
          src={book.image}
          alt={`Cover of ${book.title}`}
          loading="lazy"
          className="book-cover-image"
        />
      </div>

      <Card.Body className="d-flex flex-column">
        <p className="text-secondary small">
          {book.seriesNumber === null
            ? 'Standalone novel'
            : `Joona Linna · Book ${book.seriesNumber}`}
        </p>

        <Card.Title as="h2" className="fs-4">
          {book.title}
        </Card.Title>

        <Card.Text>{book.description}</Card.Text>

        <Button
          variant="outline-dark"
          className="mt-auto align-self-start"
          aria-pressed={isRead}
          aria-label={`Mark ${book.title} as ${isRead ? 'unread' : 'read'}`}
          onClick={() => onToggleRead(book.id)}
        >
          <span aria-hidden="true">{isRead ? '✓' : '🔪'}</span>
          {' '}
          {isRead ? 'Read' : 'Mark as read'}
        </Button>
      </Card.Body>
    </Card>
  )
}