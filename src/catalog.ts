import * as R from "npm:remeda";
import { Book, Author } from "./dataModels.ts";

export type CatalogData = {
  booksByIsbn: Record<string, Book>;
  authorsById: Record<string, Author>;
}

export const catalogData = {
  booksByIsbn: {
    "978-1779501127": {
      isbn: "978-1779501127",
      title: "Watchman",
      publicationYear: 1987,
      authorIds: ["alan-moore", "dave-gibbons"],
      bookItems: [
        {
          id: "book-item-1",
          libId: "nyc-central-lib",
          isLent: true,
        },
        {
          id: "book-item-2",
          libId: "nyc-central-lib",
          isLent: false,
        },
      ],
    },
  },
  authorsById: {
    "alan-moore": {
      name: "Alan Moore",
      bookIsbns: ["978-1779501127"],
    },
    "dave-gibbons": {
      name: "Dave Gibbons",
      bookIsbns: ["978-1779501127"],
    },
  },
} satisfies CatalogData;

type BookInfo = {
  title: string;
  isbn: string;
  authorNames: string[];
}

export default class Catalog {
  static getBookLendings(catalogData: CatalogData, memberId: string) {
    // 나중에 구현될 예정
  }

  static addBookItem(catalogData: CatalogData, book: Book) {
    // 나중에 구현될 예정
  }

  static authorNames(catalogData: CatalogData, book: Book): string[] {
    return R.pipe(
      R.pathOr(book, R.stringToPath("authorIds"), []),
      R.map((authorId) => {
        return R.pathOr(catalogData, R.stringToPath(`authorsById.${authorId}.name`), "");
      }),
    );
  }

  static bookInfo(catalogData: CatalogData, book: Book): BookInfo {
    return {
      title: R.pathOr(book, R.stringToPath("title"), ""),
      isbn: R.pathOr(book, R.stringToPath("isbn"), ""),
      authorNames: Catalog.authorNames(catalogData, book),
    };
  }

  static searchBooksByTitle(catalogData: CatalogData, query: string): BookInfo[] {
    return R.pipe(
      R.values(catalogData.booksByIsbn),
      R.filter((book) => R.pathOr(book, R.stringToPath("title"), "").includes(query)),
      R.map((book) => Catalog.bookInfo(catalogData, book)),
    );
  }
}
