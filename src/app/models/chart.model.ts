/**
 * Create Chart model array
 */
export class ChartModel {
  sales = new Array<ChartArrayModel>();
}

/**
 * Items to array
 */
export class ChartArrayModel {
  car_make: string | undefined;
  date: string | undefined;
  id: number | undefined;
  quantity: number | undefined;
}
