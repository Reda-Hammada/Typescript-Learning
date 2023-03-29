
let article: readonly [number,string,boolean] = [11,'title one', true]
// we will not be able to push any new element to the array because we defined it as readonly 

// article.push(100);

console.log(article);
