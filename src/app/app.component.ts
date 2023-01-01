import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 're-usable-components';
  userdata = [
    {
      name: 'Patrick',
      location: 'New York',
      dp: 'https://cdn-icons-png.flaticon.com/512/145/145843.png',
      post: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio deserunt odit saepe vel blanditiis, recusandae quo fugiat sit iste aspernatur veritatis magnam neque similique molestias necessitatibus! Natus assumenda unde ex?'
    },
    {
      name: 'Fabrizio',
      location: 'New York',
      dp: 'https://cdn-icons-png.flaticon.com/512/145/145843.png',
      post: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio deserunt odit saepe vel blanditiis, recusandae quo fugiat sit iste aspernatur veritatis magnam neque similique molestias necessitatibus! Natus assumenda unde ex?'
    },
    {
      name: 'Pablo',
      location: 'New York',
      dp: 'https://cdn-icons-png.flaticon.com/512/145/145843.png',
      post: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio deserunt odit saepe vel blanditiis, recusandae quo fugiat sit iste aspernatur veritatis magnam neque similique molestias necessitatibus! Natus assumenda unde ex?'
    }
  ]
}
