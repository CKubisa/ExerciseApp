import { api } from "./myFetch";

const list = [
    { 
        firstName: 'Cass',
        lastName: 'Kubisa',
        handle: '@casskubisa',
        pic: 'https://pbs.twimg.com/profile_images/1435642082123730957/wEMcELkz_400x400.jpg',
        password: 'newpaltz',
        isAdmin: true,
        emails: [
            "kubisac1@newpaltz.edu"
        ],
        following: [ { handle: '@cat', isApproved: true }, ],
    },
    { 
        firstName: 'A',
        lastName: 'Cat',
        handle: '@cat',
        pic: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
        password: 'meow',
        isAdmin: true,
        emails: [
            "cat@meow.com"
        ],
        following: [ { handle: '@casskubisa', isApproved: true }, ],
    },

];

export function GetAll() { return api('users'); }
export function Get(user_id) { return list[user_id]; }
export function GetByHandle(handle) { return ({ ...list.find( x => x.handle == handle ), password: undefined }); } 

export function Add(user) {
    if(!user.firstName){
        throw { code: 422, msg: "First Name is required" }
    }
     list.push(user);
     return { ...user, password: undefined };
}


export function Update(user_id, user) {
    const oldObj = list[user_id];
    if(user.firstName){
        oldObj.firstName = user.firstName;
    }
    if(user.lastName){
        oldObj.lastName = user.lastName;
    }
    if(user.handle){
        oldObj.handle = user.handle;
    }
    if(user.pic){
        oldObj.pic = user.pic;
    }
    //list[user_id] = newObj ;
    return { ...oldObj, password: undefined };
}

export function Delete(user_id) {
    const user = list[user_id];
    list.splice(user_id, 1);
    return user;
}

export function Login(handle, password){
    console.log({ handle, password})
    const user = list.find(x=> x.handle == handle);
    if(!user) throw { code: 401, msg: "Sorry there is no user with that handle" };

    if( ! (password == user.password) ){
        throw { code: 401, msg: "Wrong Password" };
    }

    const data = { ...user, password: undefined };

    return { user: data };
}