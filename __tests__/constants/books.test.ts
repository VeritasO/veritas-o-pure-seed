import {
  VERITAS_BOOKS,
  BOOKS,
  BOOKS_WITH_GLYPHS,
  BOOKS_BY_ID,
  BOOKS_BY_TITLE,
  BOOKS_BY_ORDER,
  BOOKS_BY_ID_WITH_GLYPHS,
  BOOKS_BY_TITLE_WITH_GLYPHS,
  BOOKS_BY_ORDER_WITH_GLYPHS,
  BOOKS_BY_ID_AND_ORDER_WITH_GLYPHS,
  BOOKS_BY_ID_AND_TITLE,
} from "@/server/constants/books";

describe("VERITAS_BOOKS integrity", () => {
  test("Each book has a unique ID and valid chapter structure", () => {
    const ids = VERITAS_BOOKS.map(b => b.id);
    expect(new Set(ids).size).toBe(ids.length);

    for (const book of VERITAS_BOOKS) {
      expect(Array.isArray(book.chapters)).toBe(true);
      expect(book.chapters.length).toBeGreaterThan(0);
    }
  });

  test("BOOKS_WITH_GLYPHS entries contain glyphs and IDs", () => {
    for (const book of BOOKS_WITH_GLYPHS) {
      expect(book.id).toMatch(/^B\d{2}$/);
      expect(book.glyph).toBeDefined();
    }
  });

  test("BOOKS_BY_ID maps correctly", () => {
    for (const book of BOOKS) {
      expect(BOOKS_BY_ID[book.id]).toEqual(book);
    }
  });

  test("BOOKS_BY_TITLE and BOOKS_BY_ORDER return correct references", () => {
    for (const book of BOOKS) {
      expect(BOOKS_BY_TITLE[book.title]).toEqual(book);
      expect(BOOKS_BY_ORDER[book.order]).toEqual(book);
    }
  });

  test("BOOKS_BY_ID_AND_ORDER_WITH_GLYPHS returns glyph-augmented books", () => {
    for (const book of BOOKS_WITH_GLYPHS) {
      expect(BOOKS_BY_ID_AND_ORDER_WITH_GLYPHS[book.id]).toEqual(book);
      expect(BOOKS_BY_ID_AND_ORDER_WITH_GLYPHS[book.order]).toEqual(book);
    }
  });
});