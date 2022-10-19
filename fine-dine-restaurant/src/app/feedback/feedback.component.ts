import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Feedback } from '../model/feedback';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  // feedback=new Feedback("","","","","","");
  feedback:Feedback={};

  locations= ['Hunts Ville', 'Spring Dale', 'Orlando', 'Augusta', 'New York'​]

  


  onSubmit() {
    this._snackBar.open('Feedback submitted successfully', 'success', {​
      duration: 5000,​
      panelClass: ['mat-toolbar', 'mat-primary']​
      })

          }
        }
        

        