// 나중에 구현될 예정
type libraryData = any;
// 나중에 구현될 예정
type UserManagementData = any;
// 나중에 구현될 예정
type CatalogData = any;

class Library {
  static getBookLendings(libraryData: libraryData, userId: string, memberId: string) {
    if (UserManagement.isLibrarian(libraryData.userManagement, userId)) {
      return Catalog.getBookLendings(libraryData.catalog, memberId);
    } else {
      throw "대출된 도서를 조회할 권한이 없음";
    }
  }
}

class UserManagement {
  static isLibrarian(userManagementData: UserManagementData, userId: string): boolean {
    // 나중에 구현될 예정
    return false;
  }
}

class Catalog {
  static getBookLendings(catalogData: CatalogData, memberId: string) {
    // 나중에 구현될 예정
  }
}
