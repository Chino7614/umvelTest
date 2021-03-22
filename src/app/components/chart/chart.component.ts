import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartArrayModel, ChartModel } from 'src/app/models/chart.model';
import { ChartService } from 'src/app/services/chart/chart.service';

/**
 * char decorator
 */
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})

/**
 * Chart component class
 */
export class ChartComponent {
  /**
   * access to DOM where char will be create
   */
  @ViewChild('lineChart', { static: true }) lineChart: any = Chart;

  /**
   * contain all car_make array for show in axis x
   */
  carMakeArray: any = [];

  /**
   * contain all quantity array for show in axis x
   */
  quantityArray: any = [];

  /**
   * Create new Chart model
   */
  chartModel = new ChartModel();


  /**
   * Get data the service 
   * @param chartService ChartService
   */
  constructor(private chartService: ChartService) {
    this.chartService.getChart().forEach((chartModel: ChartModel) => {
      this.chartModel = chartModel;
      this.reduceArray();
      this._lineChart();
    });
  }

  /**
   * Execute reduce method for elimante replace data and sum quantity too
   */
  private reduceArray() {
    const reduceArray = this.chartModel.sales.reduce((acomulate: any, element: ChartArrayModel) => {
      const found = acomulate.find(
        (e: ChartArrayModel) => e.car_make === element.car_make
      );
      if (found) {
        found.quantity = found.quantity + element.quantity;
      } else {
        acomulate.push(element);
        this.carMakeArray.push(element.car_make);
      }
      return acomulate;
    }, []);
    this.quantityArray = reduceArray.map((element: ChartArrayModel) => element.quantity);
  }

  /**
   * create new Chart passing the viewChild and the mak and the quantity
   */
  private _lineChart() {
    const lineChart = new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: {
        labels: this.carMakeArray,
        datasets: [
          {
            data: [...this.quantityArray],
            backgroundColor: 'rgba(0, 156, 134, 0.56)',
            borderColor: '#009c86',
            borderWidth: 5,
          },
        ],
      },
       options: {
      legend: {
        display: false,
      },
    },
    });
  }
}
