let str = "sumeet123abc";
let newstr = '';
for(let i = 0;i<str.length;i++)
{
if(isNaN(str.charAt(i)))
{
    newstr = newstr + str.charAt(i);
}
}
let temp = '';
for(let i = newstr.length ;i >=0;i--)
{
     temp =  temp + newstr.charAt(i);
}
console.log(temp);