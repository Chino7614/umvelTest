export class ChartModel {
  sales = new Array<ChartArrayModel>();
}

export class ChartArrayModel {
  car_make: string | undefined;
  date: string | undefined;
  id: number | undefined;
  quantity: number | undefined;
}
