import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { CalendarModal, CalendarModalOptions } from '../ion2-calendar';

@Component({
  selector: 'demo-modal-range-multi',
  template: `
    <ion-button (click)="openCalendar()">
      range multi
    </ion-button>
  `,
})
export class DemoModalRangeMultiComponent {
  dateRange: Array<{
    from: Date;
    to: Date;
    color: string;
  }> = [{
    from: new Date(),
    to: new Date(Date.now() + 24 * 60 * 60 * 1000 * 5),
    color: '#F334FF'
  }, {
    from: new Date(Date.now() + 24 * 60 * 60 * 1000 * 10),
    to: new Date(Date.now() + 24 * 60 * 60 * 1000 * 12),
    color: '#3776CB'
  }];

  constructor(public modalCtrl: ModalController) {}

  async openCalendar() {
    const options: CalendarModalOptions = {
      pickMode: 'multirange',
      title: 'MULTI RANGE',
      defaultDateRangeMulti: this.dateRange,
      color: 'primary'
    };

    const myCalendar = await this.modalCtrl.create({
      component: CalendarModal,
      componentProps: { options },
    });

    myCalendar.present();

    const event: any = await myCalendar.onDidDismiss();
    const { data: date, role } = event;

    /*if (role === 'done') {
      this.dateRange = Object.assign(
        {},
        [{
          from: date.from.dateObj,
          to: date.to.dateObj,
        }]
      );
    }*/
    console.log(date);
    console.log('role', role);
  }
}
