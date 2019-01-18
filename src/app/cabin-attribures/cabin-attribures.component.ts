import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabin-attribures',
  templateUrl: './cabin-attribures.component.html',
  styleUrls: ['./cabin-attribures.component.scss']
})
export class CabinAttriburesComponent implements OnInit {

  constructor(private apiService: ApiServiceService, private router: Router) { }

  attributes: Object;

  public transformProduct = {
    priority: [],
  }

  public selection = [
    
  ]
  
  ngOnInit() {

    this.apiService.getCabinAttributes().subscribe(data => {
      console.log('data', data);
      this.attributes = data;
      this.transformMobile(this.attributes[0].messageAttributes);
      //this.transFormAttributes(this.attributes[0].messageAttributes);
      //console.log('after returning from the function',this.transFormAttributes(this.attributes[0].messageAttributes));

    })
  }

  transformMobile = function(attributes){
     

    this.selection.push(attributes['COMMON']);
    this.selection.push(attributes['NONHBO']);

    console.log('selection',this.selection);
  }

  transFormAttributes = function (attributes) {
    console.log('data', attributes);
    let i = 0;
   this.transformProduct.priority = new Array(attributes.COMMON.length);
      for(i=0;i<6;i++){
        //console.log('inside for');
        this.transformProduct.priority[i] = new Array(4);
        console.log('2',this.transformProduct.priority);
        if((attributes.COMMON[i].priority && attributes.NONHBO[i].priority &&
          attributes.HBO[i].priority && attributes.FLEX[i].priority) === attributes.COMMON[i].priority){
            //console.log('inside if');
                 this.transformProduct.priority[i][0] = attributes.COMMON[i];
                 this.transformProduct.priority[i][1] = attributes.NONHBO[i];
                 this.transformProduct.priority[i][2] = attributes.HBO[i];
                 this.transformProduct.priority[i][3] = attributes.FLEX[i];
                 this.mapImage(this.transformProduct.priority[i][0]);
          }

          console.log('print',this.transformProduct.priority);
         
        }
        return JSON.stringify( this.transformProduct.priority);
        //console.log('print',this.transformProduct.priority1);
  }

  mapImage = function(messageAttributes){
    console.log('1',messageAttributes);
    messageAttributes['image_Link'] = '/image';
  }
 
}

