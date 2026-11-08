import { useEffect, useState } from 'react';
import Arrow from './Arrow';
const links = ['Home','Projects','Skills','Contact'];
export default function Navbar(){
 const [open,setOpen]=useState(false); const [active,setActive]=useState('Home');
 useEffect(()=>{ const sections=links.map(id=>document.getElementById(id)).filter((s):s is HTMLElement=>!!s); const observer=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);if(visible[0])setActive(visible[0].target.id);},{rootMargin:'-15% 0px -45% 0px',threshold:0});sections.forEach(s=>observer.observe(s));return()=>observer.disconnect();},[]);
 useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false)};window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey)},[]);
 return <header className="site-header"><div className="nav-inner"><a href="#Home" className="wordmark" onClick={()=>setOpen(false)} aria-label="Nataly Tuong home">nataly tuong<span>.</span></a><button className="menu-toggle" aria-expanded={open} aria-controls="site-nav" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'} <span aria-hidden="true">{open?'−':'+'}</span></button><nav id="site-nav" className={open?'navigation open':'navigation'} aria-label="Main navigation">{links.slice(1).map(link=><a key={link} href={`#${link}`} aria-current={active===link?'location':undefined} onClick={()=>setOpen(false)}>{link}</a>)}<a className="button nav-cta" href="mailto:ntuong1117@gmail.com">Let’s talk <Arrow/></a></nav></div></header>
}
