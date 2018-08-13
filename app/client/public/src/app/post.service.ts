import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { errorHandler } from '../../node_modules/@angular/platform-browser/src/browser';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    constructor(private http:HttpClient){}

    all(cb){
        this.http.get("/posts")
        .subscribe( data=>cb(data) );
    }

    findById(){

    }

    create(){

    }

    update(){

    }

    destroy(){

    }
}
