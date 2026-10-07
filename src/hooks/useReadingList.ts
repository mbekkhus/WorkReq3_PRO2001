import { useState } from 'react'

export function useReadingList() {
  const [readBookIds, setReadBookIds] = useState<string[]>([])

  function toggleRead(bookId: string) {
    setReadBookIds(currentIds =>
      currentIds.includes(bookId)
        ? currentIds.filter(id => id !== bookId)
        : [...currentIds, bookId]
    )
  }

  return {
    readBookIds,
    toggleRead,
    readCount: readBookIds.length
  }
}