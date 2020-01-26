import { Component, OnInit } from '@angular/core';
import { RestServiceService } from '../rest-service.service';


@Component({
  selector: 'app-test-rest',
  templateUrl: './test-rest.component.html',
  styleUrls: ['./test-rest.component.css']
})
export class TestRestComponent implements OnInit {
  listComments : comments[];
  listposts : posts[];
  responsObj: posts;
 listalbums :  albums[] ;
 selected = 'option2';
         


  constructor( private restServiceService : RestServiceService   ) { }

  ngOnInit() {



 
    this.restServiceService.getAllcomments().subscribe
    (
      data =>
        {
          this.listComments = data ;
        }
    )
      

      this.restServiceService.getparmsPosts().subscribe
      (
        data => 
        {
          this.listposts = data ;
        }
      )


      var obj = {
        
        title: 'foo',
        body: 'bar',
        userId: 1
      }

      this.restServiceService.postComments(obj).subscribe
      (
        data =>
        {
          this.responsObj = data ;
          console.log(this.responsObj);
        }
      )


      this.restServiceService.getMails().subscribe
      (
        data =>
        {
            this.listalbums = data;
            console.log ('inside getMails');
            console.log(data);

        }
      )


       

  }


   
  


}

interface comments{
 
  postId : number ,
  id  : number ,
  name : string ,
  email : string ,
  body : string  

}

interface posts{
   
   userId : number ,
   id : number ,
   title : string ,
   body : string 
}

interface albums{
  userId : number ,
  id : number ,
  title : string 
}


