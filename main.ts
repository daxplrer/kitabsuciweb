// @deno-types="npm:@types/express@4.17.15"
import express from "npm:express@4.18.2";
import * as fs from 'https://deno.land/std@0.204.0/fs/mod.ts'
import * as pug from 'https://deno.land/x/pug@v0.1.6/mod.ts'
import {join} from 'https://deno.land/std@0.204.0/path/mod.ts'
import generatePath from "./tools/generatePath.ts";
import convertTo from './tools/convertTo.ts';
import namespaceit from "./tools/namespaceit.ts";
import listdoa from './views/private/kumpulandoa/doa.js'
import nodecrypto from 'node:crypto'
import {type quiztype, mainquiz} from './views/private/quiz/popquiz.ts'
const {dirname, filename, filepath} = generatePath(import.meta);
async function run(){
// const fileCache: { [key: string]: Uint8Array } = {};
// async function getFile(entrypath: string): Promise<Uint8Array> {
//     const textencode = new TextEncoder()
//     if (typeof fileCache[entrypath] !== "undefined") return fileCache[entrypath];
//     const file = await Deno.readFile(entrypath)
//     const filestr = convertTo(file, 'utf-8')
//     if (path.globToRegExp("**/*.e.js").test(entrypath)) {
//       return textencode.encode(`${await eval(filestr)}`);
//     } else {
//       fileCache[entrypath] = file
//       return file;
//     }
//   }
const app = express()
const viewdir = join(dirname, 'views')
app.set('view engine', 'pug')
app.set('views', join(dirname, 'views'))
await namespaceit('/assets', 'views/assets', app, import.meta, {doNotCacheAllFiles:true, dontConvertTheseFiles:['**/*.css', '**/*.map'], verbose:true})
app.get('/', (req, res)=>res.render(join(viewdir, 'index.pug'), {pagenm:'home'}))
app.get('/beranda/', (_req, res)=>res.redirect('../'))
app.get('/err', (_req, res)=>res.render(join(viewdir, '404.pug')))
app.get('/styles.css/', async(_req,res)=>{
    // @ts-ignore: outdated types
    res.writeHead(200, {['Content-Type']:'text/css'});
    // @ts-ignore: outdated types
    res.end(await Deno.readFile(join(viewdir, 'styles.css')))
})
app.get('/kumpulandoa/', (_req, res)=>res.render(join(viewdir, 'kumpulandoa.pug'), {pagenm:'prayerscollection', prayerscollection:Object.keys(listdoa)}))
app.get('/kumpulandoa/:namadoa', (req, res)=>{
    const reqdoa = req.params.namadoa as keyof typeof listdoa
    if (typeof listdoa[reqdoa] === "undefined") {
       res.redirect('/err')
       return
    }
    const teksdoa = listdoa[reqdoa].split('\n')
    res.render(join(viewdir, 'doa2.pug'), {namadoa:reqdoa, teksdoa:teksdoa})
})
app.get('/quiz/', (_req, res)=>{
const questkeys = Object.keys(mainquiz)
const selectlen = nodecrypto.randomInt(questkeys.length-1)
const quest = mainquiz[questkeys[selectlen]]
if (quest.correctans<1||quest.correctans>4) throw new Error()
const imgres = Array.isArray(quest.imgkeyword)?`https://source.unsplash.com/random/300x300?${quest.imgkeyword.join(',')}`:quest.imgkeyword
res.render(join(viewdir, 'quiz.pug'), {pagenm:'quiz', anslist:quest.ans, realans:quest.ans[quest.correctans-1], quizimg:imgres, quizquestion:questkeys[selectlen]})
})
app.listen(8000);
}
run()