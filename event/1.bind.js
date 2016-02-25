/**
 * call apply
 */
var person = {
    name:'zfpx',
    say:function(words){
        console.log(this.name+' say '+words);
    }
}
person.say('hello');

var p = {
    name:'node.js'
}
person.say.call(p,'hello');
person.say.apply(p,['hello']);

//bind
var pSay = person.say.bind(p,'phello');
pSay('world');