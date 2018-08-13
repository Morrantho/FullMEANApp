import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'BodyComponent',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
    private posts:any;

    constructor(private postService:PostService){
        postService.all((data)=>{
            this.posts = data;
        });
    }

    ngOnInit() {
    }
}
