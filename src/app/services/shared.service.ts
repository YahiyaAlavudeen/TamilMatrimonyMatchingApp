import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private selectedData: any;

  setSelectedData(data: any) {
    this.selectedData = data;
  }

  getSelectedData() {
    return this.selectedData;
  }
  setInLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getFromLocalStorage(key: string) {
    var data: any = localStorage.getItem(key);
    return JSON.parse(data);
  }
}
