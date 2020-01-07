import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { User, UserGroup } from '../../Models/user.model';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class UserDataService {
    
    private userSubject$: BehaviorSubject<User> = new BehaviorSubject({} as User);
    readonly items$: Observable<User> = this.userSubject$.asObservable();

    private userRole$ : BehaviorSubject<string> = new BehaviorSubject("");
    readonly userRoleData$  :Observable<string> = this.userRole$.asObservable();

    private userGroup$: BehaviorSubject<UserGroup> = new BehaviorSubject({} as UserGroup);
    readonly group$: Observable<UserGroup> = this.userGroup$.asObservable();


    add(data : User) :Observable<void>{
        return timer(200).pipe(map(() => {
            this.userSubject$.next(data);
        }));
    }

    addGroup(data:UserGroup) : Observable<void> {
        return timer(200).pipe(map(()=>{
            this.userGroup$.next(data);
        }));
    }

    updateUserRole(data:string) {
        this.userRole$.next(data);
    }
}