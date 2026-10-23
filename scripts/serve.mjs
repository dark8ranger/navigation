import {createServer} from 'node:http';
import worker from '../dist/worker.mjs';
createServer(async(req,res)=>{const result=await worker.fetch(new Request('http://localhost'+req.url,{method:req.method}));res.writeHead(result.status,Object.fromEntries(result.headers));res.end(Buffer.from(await result.arrayBuffer()))}).listen(4173,'127.0.0.1',()=>console.log('http://127.0.0.1:4173'));
