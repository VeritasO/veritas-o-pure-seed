import React from 'react';
import Layout from '../components/ui/Layout';
import BookIndexList from '../components/books/BookIndexList';
import MIRRAFlagViewer from '../components/books/MIRRAFlagViewer';
import SymbolicExcerptCard from '../components/books/SymbolicExcerptCard';

export default function BooksPage() {
  return (
    <Layout title="Sacred Books">
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">📚 Sacred Books</h1>
        <p className="text-gray-600 mb-6">Explore Books I–XV with MIRRA contradiction flags and symbolic indices.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BookIndexList />
          <MIRRAFlagViewer />
          <SymbolicExcerptCard />
        </div>
      </div>
    </Layout>
  );
}
