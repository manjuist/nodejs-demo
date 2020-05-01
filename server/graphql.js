/**
* name: 模块功能
* author: Deve
* date: 2020-05-01
*/

const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
 type Query {
   hello: String
 }
`);

const root = {hello:()=> 'hello wrld'};

graphql(schema, root).then((res)=>{
  console.log(res)
})
