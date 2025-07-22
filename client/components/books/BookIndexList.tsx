import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BOOKS } from '@/data/books';

export default function BookIndexList() {
  return (
    <div className="space-y-4">
      {BOOKS.map((book) => (
        <Card key={book.id} className="w-full">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-indigo-700">Book {book.id}: {book.name}</h3>
                {book.subtitle && (
                  <p className="text-gray-600 italic">{book.subtitle}</p>
                )}
              </div>
              <Button variant="outline" size="sm">
                View Full Text
              </Button>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">Chapters:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {book.chapters?.map((chapter) => (
                  <div key={chapter.number} className="text-sm p-2 bg-gray-50 rounded">
                    <span className="font-medium">{chapter.number}.</span> {chapter.title}
                  </div>
                ))}
              </div>
            </div>
            
            {book.appendices && book.appendices.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Appendices:</h4>
                <div className="flex flex-wrap gap-2">
                  {book.appendices.map((appendix, index) => (
                    <span key={index} className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                      {appendix}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}