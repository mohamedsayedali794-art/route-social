
import { Component, OnInit, signal } from '@angular/core';
import { Posts } from '../../../core/services/posts';
import { Post } from '../../../core/models/post';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  imports: [ReactiveFormsModule,FormsModule],
  selector: 'app-content',
  styleUrl: './content.css',
  templateUrl: './content.html',
})
export class Content implements OnInit {
  postLists = signal<Post[]>([])
  saveFile:File|null =null ;
  imgURL= signal< string | ArrayBuffer | null | undefined>(null);
  formdata!:FormData ;
  isPosting=signal<boolean>(false)
  constructor(private posts:Posts){}

  createdPost:FormControl = new FormControl('');
  selectedPrivcy:FormControl = new FormControl('public');
   
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


  changFile(e:Event){
  const input = e.target as HTMLInputElement
  if(input.files&&input.files.length>0){
      this.saveFile = input.files[0]
     console.log(this.saveFile);
     const fileReader = new FileReader();
     fileReader.readAsDataURL(this.saveFile)
     fileReader.onload = (e)=>{
      this.imgURL.set(e.target?.result)
      console.log(this.imgURL);
      
     }
  }

  
  }
   

  submitData(e:Event){
    e.preventDefault();
    this.isPosting.set(false);
    const body = this.createdPost?.value?.trim();
    const privacy = this.selectedPrivcy?.value;
   if(!body&&!this.saveFile)return;
   this.formdata = new FormData();
   if(body){
    this.formdata.append('body',body);
   }
   this.formdata.append('privacy',privacy??'public');
   if(this.saveFile){
    this.formdata.append('image',this.saveFile);
   }
   this.isPosting.set(true)
    this.posts.creatPost(this.formdata).subscribe({
      next:(res)=>{
        console.log(res);
        this.isPosting.set(false)
        this.createdPost.reset();
        this.saveFile = null;            
        this.imgURL.set(null);  
        this.getAllPostsData();

      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

}
