<<<<<<< HEAD
import {Car} from './articles';
import {Following, Followers} from './activity';

export interface User {
    id: number;
    username: string;
    password: string;
    name: string;
    birthday: Date;
    email: string;
  }
  
  export interface Profile{
    own_cars: Car[];
    following: Following;
    followers: Followers;
    user: User;
    rating: number;
=======
import {Car} from './articles';
import {Following, Followers} from './activity';

export interface User {
    id: number;
    username: string;
    password: string;
    name: string;
    birthday: Date;
    email: string;
  }
  
  export interface Profile{
    own_cars: Car[];
    following: Following;
    followers: Followers;
    user: User;
    rating: number;
>>>>>>> a3c535873b43a0139387976543edb6ae22d37612
  }