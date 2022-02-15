const arr = [6,4,7,1,8,3,9,2,0,5];
const sortedArr = arr.sort();

const friends = ['kabli','joshim','rajjak','anwar','dipjol','manna'];
const sortedFriends = friends.sort();
const reversedFriends = friends.reverse();
const sortedReversedFriends = reversedFriends.sort();

const bigNum = [44,85,7,5,4,2,5,5,5,4,4,4,44,422,1,1,11,14,4,498,8,9,3,22];
const sortedBigNum = bigNum.sort(function(a,b){
    return a - b;
});
//জাভাস্ক্রিপ্টে যদি নাম্বার সর্ট করতে চাই তাহলে কম্পেয়ার ফাঙ্কশন ব্যাবহার করতে হবে।

console.log(sortedBigNum);