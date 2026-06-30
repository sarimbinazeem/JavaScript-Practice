new Promise((resolve,reject) =>
{
    resolve(5);
}).then((res)=>
{
    return res*2;
}).then((res)=>
{
    return res+10;
}).then((res)=>
{
    console.log(res);
})