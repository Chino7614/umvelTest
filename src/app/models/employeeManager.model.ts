/**
 * Employee manage array
 */
export class EmployeeManagerModel {
  users = new Array<EmployeeManagerArrayModel>();
}

/**
 * Employee manager to array
 */
export class EmployeeManagerArrayModel {
    image: string | undefined;
  email: string | undefined;
  first_name: string | undefined;
  gender: string | undefined;
  last_name: string | undefined;
}
