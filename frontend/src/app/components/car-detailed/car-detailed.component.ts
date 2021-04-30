<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/models/identity';
import { concat } from 'rxjs';

@Component({
  selector: 'app-car-detailed',
  templateUrl: './car-detailed.component.html',
  styleUrls: ['./car-detailed.component.css']
})
export class CarDetailedComponent implements OnInit {
  myProfile: Profile;
  car : any;
  comments: any[] = [];
  likes: any[] = [];
  isLikedByMe = false;
  likeCount = 0;
  newComment = "";
  myUser: any;
  likeid = 0;
  like = {
  }
  commentary = {
    "text": "this.newComment"
  }
  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.getCar();
    // this.getMyProfile();
    this.myUser = JSON.parse(localStorage.getItem('myUser'));
  }

  getMyProfile() {
    this.profileService.getMyProfile().subscribe(res => {
      this.myProfile = res;
      this.myProfile = this.myProfile[0];
      console.log(this.myProfile);
    });
  }
  getCar() {
    console.log("getCar")
    const id = +this.route.snapshot.paramMap.get('id');
    this.carService.getCar(id).subscribe(car => {
      this.car = car;
      console.log(this.car);
      this.carService.getCommentsOfCar(this.car.id).subscribe(comments => {
        this.comments = comments;
      });
      this.carService.getLikesOfCar(this.car.id).subscribe(likes => {
        this.likes = likes;
        this.likeCount = this.likes.length;
        this.likes.forEach(like => {
          console.log(like);
          if(like.owner.user.id === this.myUser.id) {
            this.isLikedByMe = true;
            this.likeid = like.id;
          }
        });
      });
      });
  }

  onLikeClick(){
    if(this.isLikedByMe){
      this.carService.deleteLikesOfCar(this.car.id, this.likeid ).subscribe(res => {
        console.log("deleted");
        this.getCar();
        this.isLikedByMe = false;
      })
    }
    else {
      this.carService.createLikesOfCar(this.car.id, this.like ).subscribe(res => {
        console.log("created");

        this.getCar();
        this.isLikedByMe = true;
      })
    }
    // this.isLikedByMe = !this.isLikedByMe;
    // if(this.isLikedByMe) this.likeCount++;
    // else this.likeCount--;
  }

  onNewComment(){
    this.commentary = {
      "text": this.newComment
    }
    this.carService.createCommentsOfCar(this.car.id, this.commentary).subscribe(res => {

    })
    console.log(this.commentary);
    


    this.newComment = "";
    this.commentary = {
      "text": ""
    }
  }

}
=======
import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/models/identity';
import { concat } from 'rxjs';
import { Car } from 'src/app/models/articles';

@Component({
  selector: 'app-car-detailed',
  templateUrl: './car-detailed.component.html',
  styleUrls: ['./car-detailed.component.css']
})
export class CarDetailedComponent implements OnInit {
  myProfile: Profile;
  car : Car;
  comments: any[] = [];
  likes: any[] = [];
  isLikedByMe = false;
  likeCount = 0;
  newComment = "";
  myUser: any;
  likeid = 0;
  like = {
  }
  commentary = {
    "text": "this.newComment",
    "car": 0
  }
  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.getCar();
    this.getMyProfile();
    this.myUser = JSON.parse(localStorage.getItem('myUser'));
  }

  getMyProfile() {
    this.profileService.getMyProfile().subscribe(res => {
      this.myProfile = res;
      this.myProfile = this.myProfile[0];
      console.log(this.myProfile);
    });
  }
  getCar() {
    console.log("getCar")
    const id = +this.route.snapshot.paramMap.get('id');
    this.carService.getCar(id).subscribe(car => {
      this.car = car;
      console.log(this.car);
      this.carService.getCommentsOfCar(this.car.id).subscribe(comments => {
        this.comments = comments;
      });
      this.carService.getLikesOfCar(this.car.id).subscribe(likes => {
        this.likes = likes;
        this.likeCount = this.likes.length;
        this.likes.forEach(like => {
          console.log(like);
          if(like.owner.user.id === this.myUser.id) {
            this.isLikedByMe = true;
            this.likeid = like.id;
          }
        });
      });
      });
  }

  onLikeClick(){
    if(this.isLikedByMe){
      this.carService.deleteLikesOfCar(this.car.id, this.likeid ).subscribe(res => {
        console.log("deleted");
        this.getCar();
        this.isLikedByMe = false;
      })
    }
    else {
      this.carService.createLikesOfCar(this.car.id, this.like ).subscribe(res => {
        console.log("created");

        this.getCar();
        this.isLikedByMe = true;
      })
    }
    // this.isLikedByMe = !this.isLikedByMe;
    // if(this.isLikedByMe) this.likeCount++;
    // else this.likeCount--;
  }

  onNewComment(){
    this.commentary = {
      "text": this.newComment,
      "car": this.car.id
    }
    this.carService.createCommentsOfCar(this.car.id, this.commentary).subscribe(res => {
      
    })
    console.log(this.commentary);
    


    this.newComment = "";
    this.commentary = {
      "text": "",
      "car": 0
    }
  }

}
>>>>>>> a3c535873b43a0139387976543edb6ae22d37612
