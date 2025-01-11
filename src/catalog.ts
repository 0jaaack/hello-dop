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

export default class Catalog {
  static getBookLendings(catalogData: CatalogData, memberId: string) {
    // 나중에 구현될 예정
  }

  static addBookItem(catalogData: CatalogData, bookItemInfo: BookItemInfo) {
    // 나중에 구현될 예정
  }
}
