import { Librarian, Member } from "./dataModels.ts";

export type UserManagementData = {
  librariansByEmail: Record<string, Librarian>;
  membersByEmail: Record<string, Member>;
}

export const userManagementData = {
  librariansByEmail: {
    "frank@gmail.com": {
      email: "frank@gmail.com",
      encryptedPassword: "bX1wYXNzd29yZA==",
    },
  },
  membersByEmail: {
    "samatha@gmail.com": {
      email: "samatha@gmail.com",
      encryptedPassword: "c2VjcmV0",
      isBlocked: false,
      bookLendings: [
        {
          bookItemId: "book-item-1",
          bookIsbn: "978-1779501127",
          lendingDate: "2025-01-11",
        },
      ],
    },
  },
} satisfies UserManagementData;

export class UserManagement {
  static isLibrarian(userManagementData: UserManagementData, userId: string): boolean {
    // 나중에 구현될 예정
    return false;
  }

  static isSuperMember(userManagementData: UserManagementData, userId: string): boolean {
    // 나중에 구현될 예정
    return false;
  }

  static isVIPMember(userManagementData: UserManagementData, userId: string): boolean {
    // 나중에 구현될 예정
    return false;
  }
}