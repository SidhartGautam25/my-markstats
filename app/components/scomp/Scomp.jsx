'use client'

import styles from './styles.module.css'
import Image from 'next/image'
import img1 from '../../../public/img1.jpg'
import img2 from '../../../public/img2.jpg'
import img3 from '../../../public/img3.jpg'
import img4 from '../../../public/img4.jpg'
import { useState } from 'react'


export default function Scomp() {


    const des1="Grand View Research provides off the shelf, syndicated market research studies, publishing over 240 reports each year, covering 45 industries, on a global as well as regional level. We track various industries, identifying key markets and understanding key macro and micro-economic trends. Keeping pace with the business environment, we publish custom, syndicated market research studies."
    const des2="Benchmark against competitors & industry    Explore competitive strategy & market share   Discover regional market opportunities    Identify emerging market trends & dynamics    Market intelligence with quality and accuracy      Deliverable formats include PDF, PPT, Excel & Online Dashboard"
    const des3="Our consulting and advisory services provide a comprehensive, research-based view that is crucial for building business intelligence and overcoming market challenges. With their broad areas of expertise, our team of consultants is united in their commitment to our clients, and passionate about their business goals, which helps foster quick and effective decision-making. Grand View Research also identifies new growth opportunities to help you successfully establish and expand your business."
    const des4="Market research is a multi faceted discipline, where requirements may vary in line with the strategic needs of an organization. At Grand View Research, we have dedicated teams of analysts and domain experts, focusing on specific research functions to ensure that our clients always get the right people to get the job done. Some"
    const [immg,setImmg]=useState(img1);
    const [des,setDes]=useState(des1);
    const [one,setOne]=useState(styles.scompliactive);
    const [two,setTwo]=useState(styles.scomptopli);
    const [three,setThree]=useState(styles.scomptopli);
    const [four,setFour]=useState(styles.scomptopli);
    const [present,setPresent]=useState(1);

    function handleClick(index){
        if(index===1){
            setImmg(img1);
            setDes(des1);
            setOne(styles.scompliactive);
            //setPresent(1);
            if(present===2){
                setTwo(styles.scomptopli);
            }else if(present===3){
                setThree(styles.scomptopli);
            }else if(present===4){
                setFour(styles.scomptopli);
            }
            setPresent(1);
            console.log(index);
        }
        else if(index===2){
            setImmg(img2);
            setDes(des2);
            setTwo(styles.scompliactive);
            if(present===1){
                setOne(styles.scomptopli);
            }else if(present===3){
                setThree(styles.scomptopli);
            }else if(present===4){
                setFour(styles.scomptopli);
            }
            setPresent(2);
            console.log(index);
        }
        else if(index===3){
            setImmg(img3);
            setDes(des3);
            setThree(styles.scompliactive);
            if(present===2){
                setTwo(styles.scomptopli);
            }else if(present===1){
                setOne(styles.scomptopli);
            }else if(present===4){
                setFour(styles.scomptopli);
            }
            setPresent(3);
           console.log(index);
        }
        else if(index===4){
            setImmg(img4);
            setDes(des4);
            setFour(styles.scompliactive);
            if(present===2){
                setTwo(styles.scomptopli);
            }else if(present===3){
                setThree(styles.scomptopli);
            }else if(present===1){
                setOne(styles.scomptopli);
            }
            setPresent(4);
           console.log(index);
        }else{
            return;
        }
    }
    
    return (
        <div className={styles.scompmain}>
            <div className={styles.scomptitle}>Discover how Grand View Research can help your business:</div>
            <div className={styles.scompimp}>
                <div className={styles.scomptop}>
                    <button
                     onClick={()=>{handleClick(1);}}
                     className={one}>Compass</button>
                    <button
                    onClick={()=>{handleClick(2);}} className={two } > Consulting Services</button>
                    <button
                    onClick={()=>{handleClick(3);}} className={three} >Industry Reports</button>
                    <button
                    onClick={()=>{handleClick(4);}} className={four}> custom Research</button>
                </div>
                <div className={styles.scompbottom}>
                    <div className={styles.scompimg}>
                         <Image
                         src={immg}
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: '100%', height: '100%' }}/>
                    </div>
                    <div className={styles.scompdesc}>
                        <div className={styles.destitle}>This is the title of this description</div>
                      <div className={styles.discription}>{des}</div>
                    </div>

                </div>
            </div>
        </div>
    )
}