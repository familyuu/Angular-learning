import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})

export class HttpComponent implements OnInit {

  labels: any[];
  requestUrl: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.labels = ["Income", "Outcome"];
    this.requestUrl = "http://10.240.217.156:4200";
  }


  getString = function() {
    this.http.get(this.requestUrl).subscribe(function(data) {
      console.log(data);
    });
  }
}
