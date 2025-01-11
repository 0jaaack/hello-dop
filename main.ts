// 나중에 구현될 예정
type libraryData = any;
// 나중에 구현될 예정
type UserManagementData = any;
// 나중에 구현될 예정
type CatalogData = any;
// 나중에 구현될 예정
type BookItemInfo = any;

class Library {
  static getBookLendings(libraryData: libraryData, userId: string, memberId: string) {
    if (
      UserManagement.isLibrarian(libraryData.userManagement, userId)
      || UserManagement.isSuperMember(libraryData.userManagement, userId)
    ) {
      return Catalog.getBookLendings(libraryData.catalog, memberId);
    } else {
      throw "대출된 도서를 조회할 권한이 없음";
    }
  }

  static addBookItem(libraryData: libraryData, userId: string, bookItemInfo: BookItemInfo) {
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

class UserManagement {
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

class Catalog {
  static getBookLendings(catalogData: CatalogData, memberId: string) {
    // 나중에 구현될 예정
  }

  static addBookItem(catalogData: CatalogData, bookItemInfo: BookItemInfo) {
    // 나중에 구현될 예정
  }
}
