import { useEffect, useState } from 'react'

const STORAGE_KEY = 'kepler-read-books'

function loadReadBooks(): string[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return []

    const parsed: unknown = JSON.parse(saved)

    if (
      Array.isArray(parsed) &&
      parsed.every(id => typeof id === 'string')
    ) {
      return parsed
    }
  } catch {
    // Start with an empty list if saved data cannot be read.
  }

  return []
}

export function useReadingList() {
  const [readBookIds, setReadBookIds] = useState<string[]>(loadReadBooks)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(readBookIds))
    } catch {
      // Reading status still works if browser storage is unavailable.
    }
  }, [readBookIds])

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