const bcrypt = require('bcrypt');
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('users');
module.exports.collection = collection;

const list = [
    { 
        firstName: 'Buff',
        lastName: 'Girl',
        handle: '@buffgirl',
        pic: 'https://thumbs.dreamstime.com/z/smiling-strong-woman-black-sportswear-fitness-girl-131652010.jpg',
        password: 'power',
        isAdmin: true,
        emails: [
            "john@smith.com"
        ],
        following: [ { handle: '@vp', isApproved: true }, { handle: '@buffgirl', isApproved: true }, { handle: '@cat', isApproved: true }, { handle: '@casskubisa', isApproved: true } ],
        get name(){ return this.firstName + ' ' + this.lastName },
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
        following: [ { handle: '@vp', isApproved: true }, { handle: '@buffgirl', isApproved: true }, { handle: '@cat', isApproved: true }, { handle: '@casskubisa', isApproved: true } ],
        get name(){ return this.firstName + ' ' + this.lastName },
    },
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
        following: [ { handle: '@vp', isApproved: true }, { handle: '@buffgirl', isApproved: true }, { handle: '@cat', isApproved: true }, { handle: '@casskubisa', isApproved: true } ],
        get name(){ return this.firstName + ' ' + this.lastName },
    }

];

module.exports.GetAll = function GetAll() { return collection.find().toArray() ; }

module.exports.Get = user_id => collection.findOne({_id: new ObjectId(user_id)}) 

module.exports.GetByHandle = (handle) => collection.findOne({ handle }).then(x=> ({ ...x, password: undefined }));

module.exports.Add = async function Add(user) {
    if(!user.firstName){
         return Promise.reject( { code: 422, msg: "First Name is required" } )
    }

    const hash = await bcrypt.hash(user.password, +process.env.SALT_ROUNDS)
    
        console.log({
            user, salt: process.env.SALT_ROUNDS, hash
        })
        
        user.password = hash;

        const user2 = await collection.insertOne(user);
        user._id = user2.insertedId;

        return { ...user, password: undefined };
}


module.exports.Update = async function Update(user_id, user) {

    const results = await collection.findOneAndUpdate(
        {_id: new ObjectId(user_id) }, 
        { $set: user },
        { returnDocument: 'after'}
    );
    console.log({ user_id, results });
        
    return { ...results.value, password: undefined };
}

module.exports.Delete = async function Delete(user_id) {
    const results = await collection.findOneAndDelete({_id: new ObjectId(user_id) })

    return results.value;
}

module.exports.Login = async function Login(handle, password){
    console.log({ handle, password})
    const user = await collection.findOne({ handle });
    if(!user){
        return Promise.reject( { code: 401, msg: "Sorry there is no user with that handle" });
    }

    const result = await bcrypt.compare(password, user.password)
        
    if( ! result ){
        throw { code: 401, msg: "Wrong Password" } ;
    }
    
    const data = { ...user, password: undefined };
    
    return { user: data };

    
}

module.exports.Seed = async ()=>{
    for (const x of list) {
        await module.exports.Add(x)
    }
}