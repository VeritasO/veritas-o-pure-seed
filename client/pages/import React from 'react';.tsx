import React from 'react';
import BookIndexList from '@/components/books/BookIndexList';

export default function BooksPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📚 Sacred Books</h1>
      <p className="text-gray-600 mb-6">Explore Books I–XV with MIRRA contradiction flags and symbolic indices.</p>
      
      <BookIndexList />
    </div>
  );
}