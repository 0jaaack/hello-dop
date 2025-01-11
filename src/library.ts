import Catalog from "./catalog.ts";
import { UserManagement } from "./userMangement.ts";

// 나중에 구현될 예정
type libraryData = any;
// 나중에 구현될 예정
type BookItemInfo = any;

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

  static addBookItem(libraryData: LibraryData, userId: string, bookItemInfo: BookItemInfo) {
    if (
      UserManagement.isLibrarian(libraryData.userManagement, userId)
      || UserManagement.isVIPMember(libraryData.userManagement, userId)
    ) {
      Catalog.addBookItem(libraryData.catalog, bookItemInfo);
    } else {
      throw "도서 추가 권한이 없음";
    }
  }
}
