export type BookItem = {
  id: string;
  libId: string;
  isLent: boolean;
}

export type Book = {
  isbn: string;
  title: string;
  publicationYear: number;
  authorIds: string[];
  bookItems: BookItem[];
}

export type Author = {
  name: string;
  bookIsbns: string[];
}

export type Librarian = {
  email: string;
  encryptedPassword: string;
}

export type Member = {
  email: string;
  encryptedPassword: string;
  isBlocked: boolean;
  bookLendings: {
    bookItemId: string;
    bookIsbn: string;
    lendingDate: string;
  }[];
}
