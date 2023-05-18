import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'selecting-matches',
  templateUrl: './selecting-matches.component.html',
  styleUrls: ['./selecting-matches.component.scss'],
})
export class SelectingMatchesComponent implements OnInit {
  title = 'Dating-app';
  durationInSeconds = 5;
  candidateData: any;
  parentSubject: Subject<string> = new Subject();

  constructor(
    private _snackBar: MatSnackBar,
    private toastr: ToastrService,
    private sharedService: SharedService
  ) {}
  ngOnInit(): void {}

  cardAnimation(value: any) {
    this.parentSubject.next(value);
    if (value == 'swiperight') {
      this.showInterested();
    }
    if (value == 'swipeleft') {
      this.showNotInterested();
    }
  }
  showInterested() {
    this.toastr.success('Interested !', '', {
      positionClass: 'toast-bottom-right',
      timeOut: 2000,
    });
  }
  showNotInterested() {
    this.toastr.error('Not Interested !', '', {
      positionClass: 'toast-bottom-left',
      timeOut: 2000,
    });
  }

  receiveData(data: any) {
    this.candidateData = data;
    console.log(this.candidateData, '$$%$%');
  }
  onInfoClick() {
    this.sharedService.setSelectedData(this.candidateData);
    localStorage.removeItem('candidateInfo');
    this.sharedService.setInLocalStorage('candidateInfo', this.candidateData);
  }
}
