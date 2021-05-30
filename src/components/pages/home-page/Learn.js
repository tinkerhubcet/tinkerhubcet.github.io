import React from 'react';
import {learnData} from './data';
import 'react-responsive-modal/styles.css';


function Learn(){

    return (
     
             <div className="learn-main">
            <div className="page-title" > Learning Stories</div>
            <div className="menu-list">
            {learnData.map((data,key) =>{
                        
                        return(
                            <div >
                                <div className="st-box myDIV">
                                    <img className="st-img"  
                                        src={data.img[Object.keys(data.img)[0]]} 
                                        alt="im"></img>

                                    <div className="text-wrap" style={{padding:10}}>
                                        <h4 className="font-weight-bold">{data.title}</h4>
                                        <p>
                                            {data.names }
                                        </p>
                                    </div>
                                    <div class="overlay">
                                        <div className="text-wrap" style={{textAlign:"left",color:"white", padding:14}}>
                                            <h4 className="font-weight-bold" style={{fontSize: 20}} >{data.title}</h4>
                                            <p className="data-desc" style={{fontSize: 14, paddingTop: 5}}>{data.desc}</p>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        )})}
            </div>
            
        </div>
        // <div className="learn-main">
        //     <div className="page-title" > Learning Stories</div>
        //     <div className="menu-list">
        //     {learnData.map((data,key) =>{
                        
        //                 return(
        //                     <div className="hvrbox">
        //                         <div
        //                             className="st-box myDIV"
        //                             data-toggle="modal" 
        //                             data-target='#exampleModalCenter'
        //                             onClick={onOpenModal}
                                   
        //                         >
        //                             <img className="st-img"  
        //                                 src={data.img[Object.keys(data.img)[0]]} 
        //                                 alt="im"></img>

        //                             <div className="text-wrap" style={{padding:10}}>
        //                                 <h4 className="font-weight-bold">{data.title}</h4>
        //                                 <p>
        //                                     {data.names }
        //                                 </p>
        //                             </div>
        //                             <div className="overlay" >
        //                                 <h4 className="font-weight-bold">{data.title}</h4>
        //                                 <p>
        //                                     {data.names }
        //                                 </p>
        //                             </div>
                                
        //                         </div>
        //                         <div className="text-wrap hide" style={{textAlign:"left",color:"white"}}>
        //                             <h4 className="font-weight-bold">{data.title}</h4>
        //                             <p className="data-desc">{data.desc}</p>
        //                         </div>
        //                         {/* <Modal open={open} onClose={onCloseModal}>
        //                             <h4 className="font-weight-bold">{data.title}</h4>
        //                             <p>
        //                                     {data.names }
        //                             </p>
        //                             <p>{data.desc}</p>
        //                         </Modal> */}
        //                     </div>
        //                 )})}
        //     </div>
            
        //     {/* <div className="st-caro-box" style={{ padding: `0 ${chevronWidth}px` }}>
        //         <ItemsCarousel
        //             requestToChangeActive={setActiveItemIndex}
        //             activeItemIndex={activeItemIndex}
        //             numberOfCards={1}
        //             gutter={5}
        //             leftChevron={<button className="st-btn">{'<'}</button>}
        //             rightChevron={<button className="st-btn">{'>'}</button>}
        //             outsideChevron
        //             chevronWidth={chevronWidth}
        //         >
        //             {learnData.map((data,key) =>{
        //                 console.log(data.img);
                    
        //                 return(
        //                     <div>
        //                         <div
        //                             className="st-box"
        //                             data-toggle="modal" 
        //                             data-target='#exampleModalCenter'
                                   
        //                         >
        //                             <img className="st-img"  src={data.img[Object.keys(data.img)[0]]} alt="im"></img>
        //                             <div style={{padding:10}}>
        //                                 <h4 className="font-weight-bold">{data.title}</h4>
        //                                 <p>
        //                                     {data.names }
        //                                 </p>
        //                             </div>
                                    
        //                         <div style={{textAlign:"left"}}>{data.desc}</div>
        //                         </div>
        //                         <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        //                             <div class="modal-dialog modal-dialog-centered" role="document">
        //                                 <div class="modal-content">
        //                                     <Modal title={data.title} name={data.names} desc={data.desc}/>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 )})}
        //         </ItemsCarousel>
                
        //     </div> */}
            
            
        // </div>
    );
}


export default Learn;