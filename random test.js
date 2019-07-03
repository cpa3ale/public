//'2c4efbe0a0e550c64ba0e39f82a706418b4ae19ab40da4f36f7e5602f35e39c83dc3eb5643a1ffe0e69574127d98decb56200604968321ae74732db8b5a3a522'
//'000a61ad8d30b04b7a6d686af47eaf5ed29b89d8a526c542b48ca0d38bd5657beb5a24542c26be71c5b0b2648fb45bfbc44fca561722ca7524037dd28ee98ab7'
var crypto=require('crypto');
var d=crypto.createHash('sha512').update("").digest();
var l = 0;
var ml=0, ld=d;
while (l<50) {
 var d1=d;
 d=crypto.createHash('sha512').update(d).digest();
  var c = d.compare(d1);
  if (c<=0) {
   if(l>=ml) {
	ml=l;
	md=d;
        console.log(ml, ld.toString('hex'))
	console.log(ml, d1.toString('hex'));
   }
   l=0;
   ld=d;
  }
 l++;
}
