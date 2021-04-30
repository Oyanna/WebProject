<<<<<<< HEAD
import {User} from './identity';
import {Car} from './articles';

export interface Likes{
    car: Car;
    whoLike: User;
}

export interface Comments{
    car: Car;
    text: string,
    whoComment: User;
}

export interface Following{
    own: User
    whoFollowing: User[];
}

export interface Followers{
    own: User;
    WhoFollow: User[];
=======
import {User} from './identity';
import {Car} from './articles';

export interface Likes{
    car: Car;
    whoLike: User;
}

export interface Comments{
    car: Car;
    text: string,
    whoComment: User;
}

export interface Following{
    own: User
    whoFollowing: User[];
}

export interface Followers{
    own: User;
    WhoFollow: User[];
>>>>>>> a3c535873b43a0139387976543edb6ae22d37612
}