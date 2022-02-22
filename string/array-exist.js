function megaFriend(friends){
    if(!Array.isArray(friends)){
        return 'Please Proveide An array';
    }
    let mega = friends[0];
    for(const friend of friends) {
        if(friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}

const buddy = ['kutub','lion','shaymol','sabbir'];

const myBigBuddy = megaFriend(buddy);

if(buddy.indexOf('Lion') != -1) {
    // console.log('Lion Exists');
}

if(buddy.includes('lion')) {
    console.log('Lion Exists using includes');
}

