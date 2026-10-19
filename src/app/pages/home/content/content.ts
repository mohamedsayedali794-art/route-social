
import { Component, OnInit, signal } from '@angular/core';
import { Posts } from '../../../core/services/posts';
import { Post } from '../../../core/models/post';



@Component({
  imports: [],
  selector: 'app-content',
  styleUrl: './content.css',
  templateUrl: './content.html',
})
export class Content implements OnInit {
  postLists = signal<Post[]>([])
  constructor(private posts:Posts){}
   
  ngOnInit(): void {
    this.getAllPostsData();
  }

  getAllPostsData():void{
    this.posts.getallPosts().subscribe({
      next:(res)=>{
        console.log(res.data.posts);
        this.postLists.set(res.data.posts)
      
        
      },
      error:(err)=>{
        console.log(err);
        
      },
    })

  }

}
