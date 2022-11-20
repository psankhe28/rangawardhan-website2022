import React,{useState} from 'react';
import './gallery.css'
import {FaTimes}from 'react-icons/fa';
import rang from './img/rangoli.jpg';
import abhang from './img/abhang.JPG';
import abc from './img/abc.JPG';
import ias from './img/ias.JPG';
import jija from './img/jija.JPG';
import anchor from './img/anchor.JPG';
import audi from './img/audi.JPG';
import audi4 from './img/audi4.JPG';
import audi5 from './img/audi5.JPG';
import audi6 from './img/audi6.JPG';
import d3 from './img/d3.JPG';
import consti from './img/consti.JPG';
import can from './img/can.JPG';
import ncc from './img/ncc.jpg';
import bhav from './img/bhav.JPG';
import dhol from './img/dhol.JPG';
import dj1 from './img/dj1.JPG';
import dj3 from './img/dj3.JPG';
import dj4 from './img/dj4.JPG';
import tyteam from './img/tyteam.JPG';
import team from './img/team.JPG';
import s1 from './img/s1.JPG';
import s2 from './img/s2.JPG';
import s3 from './img/s3.JPG';
import s4 from './img/s4.JPG';
import spran1 from './img/spran1.jpg';
import spr from './img/spr.JPG';
import saudi from './img/saudi.JPG';
import sahil from './img/sahil.JPG';
import sar from './img/sarswati.JPG';
import sq1 from './img/sq1.jpg';
import sq2 from './img/sq2.jpg';
import sq3 from './img/stage.jpg';
import sq4 from './img/sq4.jpg';
import sq5 from './img/sq5.jpg';
import sq6 from './img/sq6.jpg';
import lag from './img/lagori.JPG';
import open from './img/open.JPG';
import n1 from './img/n1.JPG';
import n2 from './img/squid.jpg';
import n3 from './img/n3.JPG';
import n4 from './img/n4.JPG';
import n5 from './img/n5.JPG';
import n6 from './img/n6.JPG';
import n7 from './img/n7.JPG';
import n8 from './img/n8.JPG';
import n10 from './img/n10.JPG';
import yoda from './img/yoda.jpeg';
import yoda2 from './img/yoda2.jpeg';
import dk from './img/dk.jpeg';
import kdance from './img/kdance.jpg';
import tabala from './img/tabala.jpg';
import white from './img/white.JPG';
import tshirt from './img/tshirt.JPG';
import cant from './img/canteen.jpg'
import treasure1 from './img/treasure1.jpg'
import treasure2 from './img/treasure2.jpg'
import treasure3 from './img/treasure3.jpg'




const Gallery = () => {


const[model,setModel] = useState(false);
const[tempimgSrc, setTempImgSrc] = useState('');

const getImg=(imgSrc)=>{
   // console.warn(imgSrc);
   setTempImgSrc(imgSrc);
   setModel(true);

}
  return (
    <>
    
    <div className={model? "model open" : "model"}>
        <img src={tempimgSrc} alt=''/>
       <FaTimes  onClick={()=> setModel(false)}/>
    </div>

    {/* <div className="header_content">
    <img src={cant} style={{width: '100%',height:'600px'}} alt=''/>
        <div className="scroll-container">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
          <span className="text1" style={{color: 'black',fontWeight: 'bold',fontSize: '30px'}}>Scroll down</span>
        </div>
      </div> */}
    
   
    <div className="gallery" >
        {/* {data.map((item,index)=>{ */}

                <div className="pics"  onClick={()=>getImg(rang)} >
                     <img src={rang} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(abc)} >
                     <img src={abc} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(yoda)} >
                     <img src={yoda} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(kdance)} >
                     <img src={kdance} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(tyteam)}>
                     <img src={tyteam} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(treasure1)}>
                     <img src={treasure1} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(treasure2)}>
                     <img src={treasure2} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(yoda2)} >
                     <img src={yoda2} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(dhol)}>
                     <img src={dhol} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(open)}>
                     <img src={open} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(ncc)}>
                     <img src={ncc} style={{width: '100%'}} alt=''/>
                </div>

                <div className="pics"  onClick={()=>getImg(ias)}>
                     <img src={ias} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(n2)}>
                     <img src={n2} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(tabala)}>
                     <img src={tabala} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(abhang)}>
                     <img src={abhang} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(jija)}>
                     <img src={jija} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(tshirt)}>
                     <img src={tshirt} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(white)}>
                     <img src={white} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(anchor)}>
                     <img src={anchor} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(audi)}>
                     <img src={audi} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(d3)}>
                     <img src={d3} style={{width: '100%'}} alt=''/>
                </div>
                
                <div className="pics"  onClick={()=>getImg(consti)}>
                     <img src={consti} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(can)}>
                     <img src={can} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(dj1)}>
                     <img src={dj1} style={{width: '100%'}} alt=''/>
                </div>                      
                <div className="pics"  onClick={()=>getImg(dj4)}>
                     <img src={dj4} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(dk)}>
                     <img src={dk} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(dj3)}>
                     <img src={dj3} style={{width: '100%'}} alt=''/>
                </div>
                           
                <div className="pics"  onClick={()=>getImg(audi4)}>
                     <img src={audi4} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(audi5)}>
                     <img src={audi5} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(audi6)}>
                     <img src={audi6} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(team)}>
                     <img src={team} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(s1)}>
                     <img src={s1} style={{width: '100%'}} alt=''/>
                </div>                      
                <div className="pics"  onClick={()=>getImg(s2)}>
                     <img src={s2} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(s3)}>
                     <img src={s3} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(s4)}>
                     <img src={s4} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(spr)}>
                     <img src={spr} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(spran1)}>
                     <img src={spran1} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(saudi)}>
                     <img src={saudi} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(sahil)}>
                     <img src={sahil} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(sar)}>
                     <img src={sar} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(sq1)}>
                     <img src={sq1} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(sq2)}>
                     <img src={sq2} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(sq3)}>
                     <img src={sq3} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(bhav)}>
                     <img src={bhav} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(sq4)}>
                     <img src={sq4} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(sq5)}>
                     <img src={sq5} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(sq6)}>
                     <img src={sq6} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(lag)}>
                     <img src={lag} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(n1)}>
                     <img src={n1} style={{width: '100%'}} alt=''/>
                </div>
               
                <div className="pics"  onClick={()=>getImg(n3)}>
                     <img src={n3} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(n4)}>
                     <img src={n4} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(n5)}>
                     <img src={n5} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(n6)}>
                     <img src={n6} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(n7)}>
                     <img src={n7} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(n8)}>
                     <img src={n8} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(n10)}>
                     <img src={n10} style={{width: '100%'}} alt=''/>
                </div>
                <div className="pics"  onClick={()=>getImg(treasure3)}>
                     <img src={treasure3} style={{width: '100%'}} alt=''/>
                </div>

            {/* )
         }) } */}
    </div> 
    
    </>
  )
}

export default Gallery
