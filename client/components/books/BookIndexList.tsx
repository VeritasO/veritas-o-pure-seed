import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

interface Book {
  id: string;
  title: string;
  symbolicFlags: string[];
}

export default function BookIndexList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/books/index')
      .then(res => res.json())
      .then(data => {
        setBooks(data || []);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-4">
      {loading ? (
        <div className="text-gray-500">Loading books...</div>
      ) : (
        books.map(book => (
          <Card key={book.id} className="w-full">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-blue-700 mb-2">{book.title}</h3>
              <div className="flex gap-2 flex-wrap">
                {book.symbolicFlags.map(flag => (
                  <span key={flag} className="px-2 py-1 rounded bg-blue-100 text-blue-800 text-xs font-medium">{flag}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}