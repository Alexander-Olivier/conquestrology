// Empirescope antique map generator. usage: node gen.js <id|all> <main|sit|both> <atlas|portolan|royal> <outdir>
const path=require('path'),fs=require('fs');
const LIB=path.join(__dirname,'lib'),SRC=path.join(__dirname,'..');
const d3=require(path.join(LIB,'d3.min.js')),topo=require(path.join(LIB,'topojson-client.min.js')),pc=require(path.join(LIB,'polygon-clipping.umd.min.js'));
global.window={};for(const f of ['data.js','moments.js','hist.js','situations.js'])require(path.join(SRC,f));
const D=window.EMPIRE_DATA,MM=window.EMPIRE_MOMENTS,HIST=window.HIST_BORDERS,SIT=window.SITUATIONS;
const E=D.EMPIRES.slice();E.forEach(e=>{const a=MM.ADD[e.id];if(a)Object.assign(e,a)});MM.NEW.forEach(e=>E.push(e));
const l50=JSON.parse(fs.readFileSync(path.join(LIB,'land-50m.json'))),l110=JSON.parse(fs.readFileSync(path.join(LIB,'land-110m.json')));
const LAND=topo.feature(l50,l50.objects.land),LAND110=topo.feature(l110,l110.objects.land);
const W=+process.env.MAP_W||720,H=+process.env.MAP_H||470,B=15,MS=+process.env.MAP_LABEL||1,FS=+process.env.MAP_FURN||1;
const STY={
 atlas:{frame:'#F4EEE1',sea:'#CDD8C8',wl:'#93A99B',land:'#F4EDDB',coast:'#4A3F2E',ink:'#2A231A',gold:'#AE8A3C',goldL:'#D9BE7C',wash:'#C8A047',washO:.62,grat:'#6F7F70',gratO:.34,rh:'#7E8F80',rhO:.22,seaT:'#4F6355',cityHalo:'#F4EDDB',waterlines:true,ally:'#5F8A83',rival:'#A8452F',pressure:'#8A6F35',prize:'#B8912F',band:'#9A7526'},
 portolan:{frame:'#F4EEE1',sea:'#F2EAD6',wl:'#D9C89E',land:'#E6D9B8',coast:'#6B3A1E',ink:'#3A2A18',gold:'#B08D3E',goldL:'#E2C98B',wash:'#D2AC55',washO:.7,grat:'#B08D3E',gratO:0,rh:'#A8452F',rhO:.34,seaT:'#8A6A3A',cityHalo:'#F2EAD6',waterlines:false,ally:'#3F7F7A',rival:'#A8332A',pressure:'#7A6A33',prize:'#B8912F',band:'#A8332A',heavyRhumb:true},
 royal:{frame:'#1E2E3D',sea:'#24384A',wl:'#44607A',land:'#EFE6CF',coast:'#0F1A24',ink:'#1A1510',gold:'#CFAA5C',goldL:'#E9D39A',wash:'#CFA64F',washO:.72,grat:'#8FA7BD',gratO:.28,rh:'#8FA7BD',rhO:.16,seaT:'#AFC3D4',cityHalo:'#EFE6CF',waterlines:true,ally:'#4F8F8A',rival:'#B24A33',pressure:'#8A7440',prize:'#C9A23F',band:'#94702A',frameInk:'#CFAA5C',darkSea:true}
};
const HOMES={"Britain":[-1.5,52.5],"England":[-1.5,52.5],"France":[2.5,47],"Spain":[-3.7,40.4],"Portugal":[-8,39.5],"The Dutch":[5,52.2],"Germany":[10.5,51],"The United States":[-98,39],"Japan":[138,36.5],"Russia":[37.6,55.7],"Soviet Russia":[37.6,55.7],"Italy":[12.5,43],"Venice":[12.3,45.4],"The Ottomans":[32,39.5],"Austria-Hungary":[16.4,48.2],"Austria":[16.4,48.2],"The Habsburgs":[16.4,48.2],"Persia":[52,32.5],"Qing China":[112,34],"China":[112,34],"Rome":[12.5,42],"Carthage":[10,36.8],"Prussia":[13.4,52.5],"The Holy Roman Empire":[10,50],"Byzantium":[29,41]};
const WORLD=new Set(['british','spain','usa']);const CENTER={british:30};
const SEAS=[["O C E A N U S   A T L A N T I C U S",-38,33],["M A R E   M E D I T E R R A N E U M",18,35.2],["M A R E   G E R M A N I C U M",3,56.5],["M A R E   B A L T I C U M",19.3,57.5],["P O N T U S   E U X I N U S",34.5,43.2],["M A R E   R U B R U M",38.5,20],["S I N U S   P E R S I C U S",51,26.8],["O C E A N U S   I N D I C U S",75,-15],["M A R E   A R A B I C U M",63,14],["O C E A N U S   P A C I F I C U S",-150,12],["M A R E   S I N I C U M",114,14],["M A R E   C A S P I U M",51,42],["M A R E   I A P O N I C U M",135,40],["S I N U S   B E N G A L E N S I S",89,14]];
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');
const f2=n=>Math.round(n*100)/100;
function polys(g){if(g.type==='Polygon')return[g.coordinates];if(g.type==='MultiPolygon')return g.coordinates;if(g.type==='GeometryCollection')return g.geometries.flatMap(polys);if(g.type==='FeatureCollection')return g.features.flatMap(f=>polys(f.geometry));if(g.type==='Feature')return polys(g.geometry);return[]}
function parseRings(d){const rings=[];if(!d)return rings;const re=/([MLZ])([^MLZ]*)/g;let m,cur=null;while((m=re.exec(d))){if(m[1]==='M'){cur=[];rings.push(cur);const[a,b]=m[2].split(',').map(Number);cur.push([a,b])}else if(m[1]==='L'){const[a,b]=m[2].split(',').map(Number);cur.push([a,b])}}return rings.filter(r=>r.length>=3)}
function area(r){let s=0;for(let i=0,n=r.length;i<n;i++){const a=r[i],b=r[(i+1)%n];s+=a[0]*b[1]-b[0]*a[1]}return s/2}
function dp(r,t){if(r.length<8)return r;const keep=new Uint8Array(r.length);keep[0]=keep[r.length-1]=1;const st=[[0,r.length-1]];while(st.length){const[a,b]=st.pop();let mx=0,ix=-1;const[ax,ay]=r[a],[bx,by]=r[b],dx=bx-ax,dy=by-ay,l=dx*dx+dy*dy||1;for(let i=a+1;i<b;i++){const[px,py]=r[i];const u=Math.max(0,Math.min(1,((px-ax)*dx+(py-ay)*dy)/l)),qx=ax+u*dx-px,qy=ay+u*dy-py,d=qx*qx+qy*qy;if(d>mx){mx=d;ix=i}}if(mx>t*t&&ix>0){keep[ix]=1;st.push([a,ix],[ix,b])}}return r.filter((_,i)=>keep[i])}
function close(r){const a=r[0],b=r[r.length-1];return a[0]===b[0]&&a[1]===b[1]?r:r.concat([a])}
function toMP(geo,gp,tol,minA){ // projected, cleaned multipolygon
 const outers=[],holes=[];for(const c of polys(geo)){const rs=parseRings(gp({type:'Polygon',coordinates:c})).map(r=>dp(r.map(p=>[f2(p[0]),f2(p[1])]),tol));if(!rs.length)continue;const big=rs.reduce((a,b)=>Math.abs(area(a))>Math.abs(area(b))?a:b);const sg=Math.sign(area(big));for(const r of rs){if(r.length<3||Math.abs(area(r))<minA)continue;(Math.sign(area(r))===sg?outers:holes).push(close(r))}}
 let mp=outers.map(r=>[r]);try{if(mp.length>1)mp=pc.union(...mp)}catch(e){}
 if(holes.length){try{mp=pc.difference(mp,...holes.map(r=>[[r]]))}catch(e){}}
 return mp}
const mpD=mp=>mp.map(po=>po.map(r=>'M'+r.slice(0,-1).map(p=>f2(p[0])+','+f2(p[1])).join('L')+'Z').join('')).join('');
function inter(a,b){try{return pc.intersection(a,b)}catch(e){return a}}
function homeOf(a){return HOMES[a.name]||d3.geoCentroid({type:'Polygon',coordinates:polys(a.geo).map(c=>({type:'Polygon',coordinates:c})).sort((x,y)=>d3.geoArea(y)-d3.geoArea(x))[0].coordinates})}
function rose(cx,cy,R,s,ink){let o='';const k=(a,r,w,c1,c2)=>{const t=x=>[cx+Math.sin(x)*r,cy-Math.cos(x)*r],tip=t(a),l=[cx+Math.sin(a-Math.PI/2)*w,cy-Math.cos(a-Math.PI/2)*w],rr=[cx+Math.sin(a+Math.PI/2)*w,cy-Math.cos(a+Math.PI/2)*w];return `<path d="M${f2(cx)},${f2(cy)}L${f2(l[0])},${f2(l[1])}L${f2(tip[0])},${f2(tip[1])}Z" fill="${c1}"/><path d="M${f2(cx)},${f2(cy)}L${f2(rr[0])},${f2(rr[1])}L${f2(tip[0])},${f2(tip[1])}Z" fill="${c2}"/>`};
 o+=`<circle cx="${cx}" cy="${cy}" r="${f2(R*.72)}" fill="none" stroke="${s.gold}" stroke-width="1.1"/><circle cx="${cx}" cy="${cy}" r="${f2(R*.66)}" fill="none" stroke="${ink}" stroke-width=".5"/>`;
 for(let i=0;i<32;i++){const a=i*Math.PI/16,r1=R*.66,r2=R*.72;o+=`<path d="M${f2(cx+Math.sin(a)*r1)},${f2(cy-Math.cos(a)*r1)}L${f2(cx+Math.sin(a)*r2)},${f2(cy-Math.cos(a)*r2)}" stroke="${ink}" stroke-width=".5" fill="none"/>`}
 for(let i=0;i<8;i++){const a=(i+.5)*Math.PI/4;o+=k(a,R*.5,R*.05,s.goldL,s.gold)}
 for(let i=0;i<4;i++){const a=(i+.5)*Math.PI/2;o+=k(a,R*.68,R*.09,s.frame==='#1E2E3D'?'#EFE6CF':'#F7F1E2',s.gold)}
 for(let i=0;i<4;i++){const a=i*Math.PI/2;o+=k(a,R,R*.12,s.frame==='#1E2E3D'?'#EFE6CF':'#F7F1E2',ink)}
 o+=`<circle cx="${cx}" cy="${cy}" r="${f2(R*.07)}" fill="${s.gold}" stroke="${ink}" stroke-width=".6"/>`;
 return o}
function neat(s){const fi=s.frameInk||s.ink,gold=s.gold;let o=`<rect x="0" y="0" width="${W}" height="${B}" fill="${s.frame}"/><rect x="0" y="${H-B}" width="${W}" height="${B}" fill="${s.frame}"/><rect x="0" y="0" width="${B}" height="${H}" fill="${s.frame}"/><rect x="${W-B}" y="0" width="${B}" height="${H}" fill="${s.frame}"/>`;
 o+=`<rect x="1.2" y="1.2" width="${W-2.4}" height="${H-2.4}" fill="none" stroke="${fi}" stroke-width="2.4"/><rect x="${B}" y="${B}" width="${W-2*B}" height="${H-2*B}" fill="none" stroke="${fi}" stroke-width="1"/>`;
 const a=5.5,b=B-3.5;let d='',seg=24,x=B+seg/2;let on=true;for(;x<W-B-1;x+=seg){if(on){const e=Math.min(x+seg,W-B);d+=`M${x},${a}H${e}V${b}H${x}Z`;d+=`M${x},${H-b}H${e}V${H-a}H${x}Z`}on=!on}
 on=true;for(let y=B+seg/2;y<H-B-1;y+=seg){if(on){const e=Math.min(y+seg,H-B);d+=`M${a},${y}H${b}V${e}H${a}Z`;d+=`M${W-b},${y}H${W-a}V${e}H${W-b}Z`}on=!on}
 o+=`<path d="${d}" fill="${fi}"/><rect x="${a}" y="${a}" width="${W-2*a}" height="${H-2*a}" fill="none" stroke="${fi}" stroke-width=".6"/><rect x="${b}" y="${b}" width="${W-2*b}" height="${H-2*b}" fill="none" stroke="${fi}" stroke-width=".6"/>`;
 for(const[x0,y0]of[[0,0],[W-B,0],[0,H-B],[W-B,H-B]])o+=`<rect x="${x0+2.4}" y="${y0+2.4}" width="${B-4.8}" height="${B-4.8}" fill="${gold}" stroke="${fi}" stroke-width=".7"/><path d="M${x0+B/2},${y0+4.2}L${x0+B-4.2},${y0+B/2}L${x0+B/2},${y0+B-4.2}L${x0+4.2},${y0+B/2}Z" fill="${s.frame}"/>`;
 return o}
function txt(x,y,t,o){const fam=o.fam||'EB Garamond',sz=o.sz||11,fs=o.it?' font-style="italic"':'',fw=o.w?` font-weight="${o.w}"`:'',an=o.an?` text-anchor="${o.an}"`:'';const base=`x="${f2(x)}" y="${f2(y)}" font-family="${fam}" font-size="${sz}"${fs}${fw}${an}`;let s='';if(o.halo)s+=`<text ${base} fill="${o.halo}" stroke="${o.halo}" stroke-width="${o.hw||2.6}" stroke-linejoin="round">${esc(t)}</text>`;return s+`<text ${base} fill="${o.c}">${esc(t)}</text>`}
const CRn=(c,w,h)=>c==='tl'?{x:B+8,y:B+8,w,h}:c==='tr'?{x:W-B-8-w,y:B+8,w,h}:c==='bl'?{x:B+8,y:H-B-8-h,w,h}:{x:W-B-8-w,y:H-B-8-h,w,h};
function hatch(mp,ang,gap,wid){const R=[];const L=Math.hypot(W,H)*1.1;const ca=Math.cos(ang),sa=Math.sin(ang);for(let t=-L;t<L;t+=gap){const nx=-sa,ny=ca,cx=W/2+nx*t,cy=H/2+ny*t,w=wid/2;const a=[cx-ca*L+nx*w,cy-sa*L+ny*w],b=[cx+ca*L+nx*w,cy+sa*L+ny*w],c=[cx+ca*L-nx*w,cy+sa*L-ny*w],d=[cx-ca*L-nx*w,cy-sa*L-ny*w];R.push([[a,b,c,d,a]])}const out=[];for(const r of R){try{const x=pc.intersection(mp,r);if(x.length)out.push(...x)}catch(e){}}return out}
function dots(mp,gap,r){let d='';for(let y=B;y<H-B;y+=gap)for(let x=B+(Math.round(y/gap)%2?gap/2:0);x<W-B;x+=gap){let ins=false;for(const po of mp){if(inRing([x,y],po[0])){ins=true;for(let i=1;i<po.length;i++)if(inRing([x,y],po[i]))ins=false;if(ins)break}}if(ins)d+=`M${f2(x-r)},${f2(y)}a${r},${r} 0 1,0 ${2*r},0a${r},${r} 0 1,0 ${-2*r},0Z`}return d}
function inRing(p,r){let c=false;for(let i=0,j=r.length-1;i<r.length;j=i++){if((r[i][1]>p[1])!==(r[j][1]>p[1])&&p[0]<(r[j][0]-r[i][0])*(p[1]-r[i][1])/(r[j][1]-r[i][1])+r[i][0])c=!c}return c}
const yearOf=e=>e.moment.replace(/^.* in /,'');
function build(e,type,sn){const s=STY[sn],geo=HIST[e.mapKey],actors=(SIT[e.id]&&SIT[e.id].actors)||[];
 const home=e.cities&&e.cities[0]?[e.cities[0][1],e.cities[0][2]]:d3.geoCentroid(geo);
 const allP=polys(geo).map(c=>({type:'Polygon',coordinates:c}));
 let focus=allP.filter(p=>WORLD.has(e.id)||d3.geoDistance(d3.geoCentroid(p),home)<35*Math.PI/180||d3.geoContains(p,home));if(!focus.length)focus=allP;
 const pts=[];const pad=(p,dx,dy)=>pts.push([p[0]-dx,p[1]-dy],[p[0]+dx,p[1]+dy]);pad(home,12,7);
 if(type==='sit')actors.forEach(a=>pad(homeOf(a),6,4));
 const feats={type:'FeatureCollection',features:(type==='sit'?[]:focus.map(g=>({type:'Feature',geometry:g}))).concat(type==='sit'?[{type:'Feature',geometry:focus.slice().sort((a,b)=>d3.geoArea(b)-d3.geoArea(a))[0]}]:[]).concat([{type:'Feature',geometry:{type:'MultiPoint',coordinates:pts}}])};
 const bb=d3.geoBounds(feats);let lonSpan=bb[1][0]-bb[0][0];if(lonSpan<0)lonSpan+=360;
 const c0=d3.geoCentroid({type:'MultiPoint',coordinates:[[bb[0][0],bb[0][1]],[bb[1][0],bb[1][1]]]});
 const inner=[[B+14,B+14],[W-B-14,H-B-14]];
 const wide=lonSpan>125;
 const midLon=bb[0][0]+lonSpan/2;
 const proj=(wide?d3.geoNaturalEarth1().rotate([-(CENTER[e.id]!==undefined?CENTER[e.id]:((midLon+540)%360-180)),0]):d3.geoAzimuthalEqualArea().rotate([-midLon,-(bb[0][1]+bb[1][1])/2]).precision(.3)).fitExtent(inner,feats);
 proj.clipExtent([[-30,-30],[W+30,H+30]]);
 const gp=d3.geoPath(proj).digits(2);
 const landMP=toMP(LAND,gp,.45,2.2),landD=mpD(landMP);
 const empMP=inter(toMP(geo,gp,.4,.5),landMP),empD=mpD(empMP);
 const rects=[];const hit=r=>rects.some(q=>r.x<q.x+q.w&&r.x+r.w>q.x&&r.y<q.y+q.h&&r.y+r.h>q.y);
 // sea fraction by corner
 const inv=(x,y)=>inRingMP([x,y],landMP);function inRingMP(p,mp){for(const po of mp){if(inRing(p,po[0])){let h=false;for(let i=1;i<po.length;i++)if(inRing(p,po[i]))h=true;if(!h)return true}}return false}
 const score=c=>{const r=CRn(c,170,110);let n=0;for(let i=0;i<8;i++)for(let j=0;j<6;j++){if(inRingMP([r.x+r.w*i/7,r.y+r.h*j/5],empMP))n+=4;else if(inv(r.x+r.w*i/7,r.y+r.h*j/5))n+=1}const hp=proj(home);if(hp&&hp[0]>r.x-20&&hp[0]<r.x+r.w+20&&hp[1]>r.y-20&&hp[1]<r.y+r.h+20)n+=60;const near=q=>q&&q[0]>r.x-40&&q[0]<r.x+r.w+40&&q[1]>r.y-16&&q[1]<r.y+r.h+16;if(type==='sit'){for(const a of actors)if(near(proj(homeOf(a))))n+=60}else{for(const c of(e.cities||[]))if(near(proj([c[1],c[2]])))n+=30}return n};
 const corners=['tl','tr','bl','br'].map(c=>[c,score(c)]).sort((a,b)=>a[1]-b[1]).map(x=>x[0]);
 let o=`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" fill="none"><g id="map/${e.id}-${type}-${sn}">`;
 o+=`<rect x="0" y="0" width="${W}" height="${H}" fill="${s.sea}"/>`;
 // rhumb
 const hubs=s.heavyRhumb?[[W*.27,H*.5],[W*.73,H*.5],[W*.5,H*.2]]:[[W*.5,H*.5]];let rd='';for(const[hx,hy]of hubs)for(let i=0;i<32;i++){const a=i*Math.PI/16;rd+=`M${f2(hx)},${f2(hy)}L${f2(hx+Math.cos(a)*900)},${f2(hy+Math.sin(a)*900)}`}
 const clipL=(d)=>d;
 o+=`<path d="${rd}" stroke="${s.rh}" stroke-width="${s.heavyRhumb?.45:.4}" opacity="${s.rhO}" fill="none"/>`;
 if(s.gratO){const g=d3.geoGraticule().step(wide?[30,20]:[10,10]);o+=`<path d="${gp(g())}" stroke="${s.grat}" stroke-width=".5" opacity="${s.gratO}" fill="none"/>`}
 // waterlines
 if(s.waterlines){const ws=[[15,.42],[10.5,.55],[6.5,.7],[3.2,.9]];for(const[w,op]of ws){o+=`<path d="${landD}" fill="none" stroke="${s.wl}" stroke-width="${w}" stroke-linejoin="round" opacity="${op}"/><path d="${landD}" fill="none" stroke="${s.sea}" stroke-width="${f2(w-.9)}" stroke-linejoin="round"/>`}}
 else{o+=`<path d="${landD}" fill="none" stroke="${s.wl}" stroke-width="3" stroke-linejoin="round"/>`}
 o+=`<path d="${landD}" fill="${s.land}" stroke="${s.coast}" stroke-width=".7" stroke-linejoin="round" fill-rule="evenodd"/>`;
 const tR={};
 if(type==='sit'){
  for(const a of actors){const mp=inter(toMP(a.geo,gp,.4,.5),landMP);if(!mp.length)continue;const c=s[a.role];const d=mpD(mp);o+=`<g id="actor/${esc(a.name)}"><path d="${d}" fill="${c}" opacity="${a.role==='ally'?.42:.2}" fill-rule="evenodd"/>`;
   if(a.role==='rival'){const h=hatch(mp,Math.PI/4,5.5,.8);if(h.length)o+=`<path d="${mpD(h)}" fill="${c}" opacity=".75"/>`}
   if(a.role==='pressure'){const h=hatch(mp,-Math.PI/4,7,.6);if(h.length)o+=`<path d="${mpD(h)}" fill="${c}" opacity=".7"/>`}
   if(a.role==='prize'){const dd=dots(mp,6,.85);if(dd)o+=`<path d="${dd}" fill="${c}"/>`}
   o+=`<path d="${d}" fill="none" stroke="${c}" stroke-width="2.6" opacity=".4" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${s.ink}" stroke-width=".7" stroke-linejoin="round"/></g>`}
 }
 o+=`<g id="empire"><path d="${empD}" fill="${s.wash}" opacity="${s.washO}" fill-rule="evenodd"/><path d="${empD}" fill="none" stroke="${s.band}" stroke-width="3.2" opacity=".55" stroke-linejoin="round"/><path d="${empD}" fill="none" stroke="${s.ink}" stroke-width="1" stroke-linejoin="round"/></g>`;
 // furniture
 let furn='';const shrink=(start,r,c)=>{if(FS===1){rects.push(r);return}const ax=c[1]==='l'?r.x:r.x+r.w,ay=c[0]==='t'?r.y:r.y+r.h;furn=furn.slice(0,start)+`<g transform="translate(${f2(ax)},${f2(ay)}) scale(${FS}) translate(${f2(-ax)},${f2(-ay)})">`+furn.slice(start)+'</g>';rects.push({x:ax-(c[1]==='l'?0:r.w*FS),y:ay-(c[0]==='t'?0:r.h*FS),w:r.w*FS,h:r.h*FS})};const name=W<500?e.name:(e.full||e.name);const yr=yearOf(e);
 const cw=Math.max(158,name.length*8.6+26),ch=type==='sit'?62:62;
 const[cCompass,cCart,cExtra,cLast]=corners;
 const roseR=46,rB=CRn(cCompass,roseR*2+6,roseR*2+6);const s0=furn.length;furn+=`<g id="compass rose">${rose(rB.x+roseR+3,rB.y+roseR+3,roseR,s,s.darkSea?'#EFE6CF':s.ink)}</g>`;shrink(s0,rB,cCompass);
 const cB=CRn(cCart,cw,ch);const nt=9;const pn=`M${cB.x+nt},${cB.y}H${cB.x+cB.w-nt}Q${cB.x+cB.w-nt},${cB.y+nt} ${cB.x+cB.w},${cB.y+nt}V${cB.y+cB.h-nt}Q${cB.x+cB.w-nt},${cB.y+cB.h-nt} ${cB.x+cB.w-nt},${cB.y+cB.h}H${cB.x+nt}Q${cB.x+nt},${cB.y+cB.h-nt} ${cB.x},${cB.y+cB.h-nt}V${cB.y+nt}Q${cB.x+nt},${cB.y+nt} ${cB.x+nt},${cB.y}Z`;
 const s1=furn.length;furn+=`<g id="cartouche"><path d="${pn}" fill="#F7F1E2" stroke="${s.ink}" stroke-width="1.2"/><rect x="${cB.x+5}" y="${cB.y+5}" width="${cB.w-10}" height="${cB.h-10}" rx="2" fill="none" stroke="${s.gold}" stroke-width=".8"/>`;
 const mx=cB.x+cB.w/2;furn+=txt(mx,cB.y+24,type==='sit'?'The Powers of '+yr:name,{fam:'Marcellus',sz:14,an:'middle',c:s.ink});
 furn+=`<path d="M${mx-34},${cB.y+33}H${mx-5}M${mx+5},${cB.y+33}H${mx+34}" stroke="${s.gold}" stroke-width=".8"/><path d="M${mx},${cB.y+29.5}L${mx+3.4},${cB.y+33}L${mx},${cB.y+36.5}L${mx-3.4},${cB.y+33}Z" fill="${s.gold}"/>`;
 furn+=txt(mx,cB.y+49,type==='sit'?'friends, foes and prizes':'as it stood in '+yr,{it:1,sz:12,an:'middle',c:s.ink});furn+='</g>';shrink(s1,cB,cCart);
 if(type==='main'&&!wide){const gR=50,gB=CRn(cExtra,gR*2+8,gR*2+8),gx=gB.x+gR+4,gy=gB.y+gR+4;const op=d3.geoOrthographic().rotate([-home[0]-(home[0]>60?-15:0),-home[1]*.6]).translate([gx,gy]).scale(gR-1).clipAngle(90),gq=d3.geoPath(op).digits(1);
  const s2=furn.length;furn+=`<g id="globe"><circle cx="${gx}" cy="${gy}" r="${gR+3.4}" fill="#F7F1E2" stroke="${s.ink}" stroke-width="1.1"/><circle cx="${gx}" cy="${gy}" r="${gR}" fill="${s.darkSea?s.sea:s.sea}" stroke="${s.gold}" stroke-width="1"/><path d="${gq(d3.geoGraticule().step([30,30])())}" stroke="${s.grat}" stroke-width=".35" opacity=".5"/><path d="${gq(LAND110)}" fill="${s.land}" stroke="${s.coast}" stroke-width=".35"/><path d="${gq(geo)}" fill="${s.band}" stroke="${s.ink}" stroke-width=".5"/></g>`;shrink(s2,gB,cExtra)}
 if(type==='sit'){const roles=[...new Set(actors.map(a=>a.role))];const lab={ally:'Allies',rival:'Rivals',pressure:'Pressure',prize:'Prizes'};const kw=136,kh=27+(roles.length+1)*16+6;const kB=e.id==='france'?{x:rB.x,y:rB.y+rB.h*FS+6,w:kw,h:kh}:CRn(cExtra,kw,kh);const s3=furn.length;furn+=`<g id="key"><rect x="${kB.x}" y="${kB.y}" width="${kw}" height="${kh}" fill="#F7F1E2" stroke="${s.ink}" stroke-width="1"/><rect x="${kB.x+3.5}" y="${kB.y+3.5}" width="${kw-7}" height="${kh-7}" fill="none" stroke="${s.gold}" stroke-width=".7"/>`;furn+=txt(kB.x+kw/2,kB.y+18,'K E Y',{fam:'Marcellus',sz:9.5,an:'middle',c:s.ink});let y=kB.y+27;const row=(c,fo,t)=>{let q=`<rect x="${kB.x+11}" y="${y}" width="16" height="10" fill="${c}" opacity="${fo}" stroke="${s.ink}" stroke-width=".6"/>`+txt(kB.x+33,y+9,t,{it:1,sz:11.5,c:s.ink});y+=16;return q};furn+=row(s.wash,.8,e.name.replace(/^The /,''));for(const r of roles)furn+=row(s[r],.55,lab[r]);furn+='</g>';shrink(s3,kB,e.id==='france'?'tl':cExtra)}
 // scale bar
 const lat=home[1],a0=proj(home),a1=proj([home[0]+1,lat]);if(a0&&a1){const kmPerDeg=111.32*Math.cos(lat*Math.PI/180)*.621,pxPerDeg=Math.hypot(a1[0]-a0[0],a1[1]-a0[1]);const miPx=pxPerDeg/kmPerDeg;const nice=[50,100,200,250,500,1000,1500,2000,3000].find(n=>n*miPx>=70)||3000;const bw=nice*miPx;if(bw<190){const sc=type==='sit'||wide?cLast:cLast;const sB=CRn(sc,bw+14,26);if(!hit(sB)){const n=4,cw2=bw/n;let q=`<g id="scale"><rect x="${sB.x}" y="${sB.y}" width="${sB.w}" height="${sB.h}" fill="#F7F1E2" opacity=".85"/>`;for(let i=0;i<n;i++)q+=`<rect x="${f2(sB.x+7+i*cw2)}" y="${sB.y+15}" width="${f2(cw2)}" height="4" fill="${i%2?'#F7F1E2':s.ink}" stroke="${s.ink}" stroke-width=".6"/>`;q+=txt(sB.x+sB.w/2,sB.y+11,nice+' miles',{it:1,sz:10,an:'middle',c:s.ink});furn+=q+'</g>';rects.push(sB)}}}
 // arcs and labels
 let labels='',arcs='';
 const place=(xy,t,o,req)=>{const sz=o.sz,tw=t.length*sz*(o.fam==='Marcellus'?.56:.47),th=sz*1.05,cand=[[7,sz*.34,'start'],[-7,sz*.34,'end'],[0,-7,'middle'],[0,sz+5,'middle'],[7,-6,'start'],[7,sz+2,'start'],[-7,-6,'end'],[-7,sz+2,'end']];for(const[dx,dy,an]of cand){const x=xy[0]+dx,y=xy[1]+dy,bx=an==='start'?x:an==='end'?x-tw:x-tw/2,r={x:bx-1,y:y-th,w:tw+2,h:th+3};if(r.x<B+3||r.x+r.w>W-B-3||r.y<B+3||r.y+r.h>H-B-3)continue;if(hit(r))continue;rects.push(r);return txt(x,y,t,{...o,an})}if(req){const x=xy[0]+7,y=xy[1]+sz*.34;return txt(Math.min(x,W-B-tw-4),y,t,{...o,an:'start'})}return ''};
 const mark=(xy,big,col)=>{if(big)return`<circle cx="${f2(xy[0])}" cy="${f2(xy[1])}" r="5" fill="#F7F1E2" stroke="${s.ink}" stroke-width="1"/><path d="M${f2(xy[0])},${f2(xy[1]-3.6)}L${f2(xy[0]+1.05)},${f2(xy[1]-1.1)}L${f2(xy[0]+3.5)},${f2(xy[1]-1.1)}L${f2(xy[0]+1.55)},${f2(xy[1]+.55)}L${f2(xy[0]+2.2)},${f2(xy[1]+3)}L${f2(xy[0])},${f2(xy[1]+1.5)}L${f2(xy[0]-2.2)},${f2(xy[1]+3)}L${f2(xy[0]-1.55)},${f2(xy[1]+.55)}L${f2(xy[0]-3.5)},${f2(xy[1]-1.1)}L${f2(xy[0]-1.05)},${f2(xy[1]-1.1)}Z" fill="${col||s.band}"/>`;return`<circle cx="${f2(xy[0])}" cy="${f2(xy[1])}" r="2.7" fill="#F7F1E2" stroke="${s.ink}" stroke-width=".9"/><circle cx="${f2(xy[0])}" cy="${f2(xy[1])}" r=".9" fill="${s.ink}"/>`};
 const inF=xy=>xy&&xy[0]>B+6&&xy[0]<W-B-6&&xy[1]>B+6&&xy[1]<H-B-6;
 const hp=proj(home);
 if(type==='sit'){if(inF(hp))rects.push({x:hp[0]-6,y:hp[1]-6,w:12,h:12});
  const pl=actors.map(a=>({a,xy:proj(homeOf(a))})).filter(p=>inF(p.xy));for(const p of pl)rects.push({x:p.xy[0]-4,y:p.xy[1]-4,w:8,h:8});
  if(inF(hp))labels+=place(hp,e.name,{fam:'Marcellus',sz:13*MS,c:s.ink,halo:s.cityHalo,hw:3},true);
  for(const p of pl){const c=s[p.a.role],[x1,y1]=hp,[x2,y2]=p.xy,dx=x2-x1,dy=y2-y1,l=Math.hypot(dx,dy)||1;if(inF(hp)&&l>24){const mx=(x1+x2)/2-dy/l*Math.min(46,l*.2),my=(y1+y2)/2+dx/l*Math.min(46,l*.2),ux=(x2-mx),uy=(y2-my),ul=Math.hypot(ux,uy)||1,ex=x2-ux/ul*7,ey=y2-uy/ul*7,sx=x1+(mx-x1)/Math.hypot(mx-x1,my-y1)*8,sy=y1+(my-y1)/Math.hypot(mx-x1,my-y1)*8;const hx=-uy/ul,hy=ux/ul;arcs+=`<path d="M${f2(sx)},${f2(sy)}Q${f2(mx)},${f2(my)} ${f2(ex)},${f2(ey)}" stroke="${c}" stroke-width="1.5" ${p.a.role==='rival'?'':'stroke-dasharray="4 3"'} fill="none"/><path d="M${f2(ex+ux/ul*1)},${f2(ey+uy/ul*1)}L${f2(ex-ux/ul*6+hx*3.2)},${f2(ey-uy/ul*6+hy*3.2)}L${f2(ex-ux/ul*6-hx*3.2)},${f2(ey-uy/ul*6-hy*3.2)}Z" fill="${c}"/>`}
   labels+=mark(p.xy,false)+place(p.xy,p.a.name,{it:1,sz:13*MS,c:s.ink,halo:s.cityHalo,hw:3},true)}
  if(inF(hp))labels+=mark(hp,true);
 }else{const cs=(e.cities||[]).map((c,i)=>({n:c[0],xy:proj([c[1],c[2]]),i})).filter(c=>inF(c.xy));for(const c of cs)rects.push({x:c.xy[0]-4,y:c.xy[1]-4,w:8,h:8});
  for(const c of cs){const t=place(c.xy,c.n,c.i===0?{fam:'Marcellus',sz:13*MS,c:s.ink,halo:s.cityHalo,hw:3}:{it:1,sz:12.5*MS,c:s.ink,halo:s.cityHalo,hw:2.6},c.i===0);if(t)labels+=mark(c.xy,c.i===0)+t}}
 // seas
 let seas='';for(const[n0,lo,la]of SEAS){const n=n0.replace(/   /g,'\u00A0\u00A0\u00A0');const xy=proj([lo,la]);if(!inF(xy))continue;if(d3.geoDistance([lo,la],[proj.rotate()[0]*-1,proj.rotate()[1]*-1])>1.5&&!wide)continue;const sz=9.5,tw=n.length*sz*.44;const r={x:xy[0]-tw/2,y:xy[1]-sz,w:tw,h:sz+3};if(r.x<B+6||r.x+r.w>W-B-6)continue;if(hit(r))continue;let bad=false;for(let i=0;i<=16;i++)if(inRingMP([r.x+r.w*i/16,xy[1]-sz/2],landMP))bad=true;if(bad)continue;rects.push(r);seas+=txt(xy[0],xy[1],n,{it:1,sz,an:'middle',c:s.seaT})}
 o+=`<g id="seas">${seas}</g><g id="routes">${arcs}</g><g id="labels">${labels}</g>${furn}<g id="neatline">${neat(s)}</g></g></svg>`;
 return o}
const[,,ID,TY,SN,OUT]=process.argv;const ids=ID==='all'?E.map(e=>e.id):[ID];const types=TY==='both'?['main','sit']:[TY];
for(const id of ids){const e=E.find(x=>x.id===id);for(const t of types){const svg=build(e,t,SN);const fn=path.join(OUT,`${id}-${t}-${SN}.svg`);fs.writeFileSync(fn,svg);console.log(path.basename(fn),Math.round(svg.length/1024)+'KB')}}
