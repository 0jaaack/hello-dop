import * as R from "npm:remeda";
import Catalog, { CatalogData, catalogData } from "./catalog.ts";
import { UserManagement, UserManagementData, userManagementData } from "./userMangement.ts";
import { Book } from "./dataModels.ts";

export type LibraryData = {
  catalog: CatalogData,
  userManagement: UserManagementData,
}

export const libraryData = {
  catalog: catalogData,
  userManagement: userManagementData,
} satisfies LibraryData;

export default class Library {
  static getBookLendings(libraryData: LibraryData, userId: string, memberId: string) {
    if (
      UserManagement.isLibrarian(libraryData.userManagement, userId)
      || UserManagement.isSuperMember(libraryData.userManagement, userId)
    ) {
      return Catalog.getBookLendings(libraryData.catalog, memberId);
    } else {
      throw "대출된 도서를 조회할 권한이 없음";
    }
  }

  static addBookItem(libraryData: LibraryData, userId: string, book: Book) {
    if (
      UserManagement.isLibrarian(libraryData.userManagement, userId)
      || UserManagement.isVIPMember(libraryData.userManagement, userId)
    ) {
      Catalog.addBookItem(libraryData.catalog, book);
    } else {
      throw "도서 추가 권한이 없음";
    }
  }

  static searchBooksByTitleJSON(libraryData: LibraryData, query: string) {
    return R.pipe(
      Catalog.searchBooksByTitle(libraryData.catalog, query),
      JSON.stringify,
    );
  }
}
