#! /usr/bin/env node

const fs=require('fs');
const path = require('path');
const spawn = require('child_process').spawn;
const configFile = process.argv[2]
const command= process.argv[3]
const script = process.argv[4]
const configFilePath = path.resolve(__dirname,'..',configFile)
const indexPath = path.resolve(__dirname,'..',script)
config = fs.readFile(configFilePath, (err,data)=>{
  confitString = data.toString()
  const sub = spawn(command,[indexPath])
})
