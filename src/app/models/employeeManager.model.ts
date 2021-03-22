export class EmployeeManagerModel {
  users = new Array<EmployeeManagerArrayModel>();
}

export class EmployeeManagerArrayModel {
    image: string | undefined;
  email: string | undefined;
  first_name: string | undefined;
  gender: string | undefined;
  last_name: string | undefined;
}
