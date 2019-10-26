


const EL_browse  = document.getElementById('browse');
const EL_preview = document.getElementById('preview');

let arrySrc =[];

let divPreview = $('#preview')

const readImage  = file => {
      if ( !(/^image\/(png|jpe?g|gif)$/).test(file.type) )
        return EL_preview.insertAdjacentHTML('beforeend', `Unsupported format ${file.type}: ${file.name}<br>`);

      const img = new Image();
      
            // img.addEventListener('load', () => {
            //       EL_preview.appendChild(img);
            //       window.URL.revokeObjectURL(img.src); 
            //     });
      
      img.src = window.URL.createObjectURL(file);
      arrySrc.push( img.src)
}

EL_browse.addEventListener('change', ev => {
      EL_preview.innerHTML = ''; // Remove old images and data
      const files = ev.target.files;
      if (!files || !files[0]) return alert('File upload not supported');
      [...files].forEach( readImage );
  
});



function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
             let j = Math.floor(Math.random() * (i + 1));
                 let temp = array[i];
                     array[i] = array[j];
                     array[j] = temp;
      }
}

function render(arrySrc) {
	let content = '';
        content = arrySrc.map((item,index) => {
           return `
                  <div class ='imageDiv'>
                        <a href= ${item}> 
                                    <img src=${item} alt= ${item}> 
                        </a>
                  </div>                  
			 `
	    })
	$('#allImg').html(content)
}

function twoImg () {
      shuffleArray (arrySrc)
      render(arrySrc)
      console.log (arrySrc)
            let oneImg = arrySrc[0];
            let twoImg = arrySrc[1];
            let content ='';
            let countImgResidual = '';
            let plus = arrySrc.length < 2 || arrySrc.length === 2 ? '' : '+'
            if ( arrySrc.length > 2) {
                  countImgResidual = arrySrc.length -2
            }

      if ( arrySrc.length === 0) { 
            content = ` 
            <div class=' twoImg'>
                        <div  class='item1 '> 
                                        
                        </div> 
                        
                        <div class='item2 ' >
                                    
                        
                        </div>
            </div>
            `
          divPreview.html(content) 
      }

       else {
            content = ` 
            <div class='twoImg'>
                        <div  class='item1 '  style = 'background-image: url(${oneImg}); 
                                                            background-size: cover;
                                                            position: relative;
                                                            background-repeat: no-repeat;
                                                            background-position: center;'>   
                                                                   
                        </div> 
                     
                        
                        <div class='item2 '  style = 'background-image: url(${twoImg}); 
                                                            background-size: cover;
                                                            position: relative;
                                                            background-repeat: no-repeat;
                                                            background-position: center;'>
                                          <span class = 'countResidual' > ${plus}${countImgResidual} </span>
                                            
                        
                        </div>
            </div>
            `
           divPreview.html(content)
       }
}


function threeImg () {
      shuffleArray (arrySrc)
            let oneImg = arrySrc[0];
            let twoImg = arrySrc[1];
            let threeImg = arrySrc[2];
            let content ='';
            let countImgResidual = '';
            let plus = arrySrc.length < 3 || arrySrc.length === 3 ? '' : '+'
            if ( arrySrc.length > 3) {
                  countImgResidual = arrySrc.length -3
            }


      if ( arrySrc.length === 0) { 
            content = ` 
            <div class='threeImg'>
                  <div class=" threeImgUp">  
                  </div>
                  
                        <div class='item1' >
                        
                        </div>
                        <div class='item2 '>
                        
                        </div>
                  
            </div>
            `
          divPreview.html(content) 
      }


      else {
            content = `
            <div class=' threeImg'>
                  <div class=" threeImgUp"  style = 'background-image: url(${oneImg}); 
                                                              background-size: cover;
                                                              position: relative;
                                                              background-repeat: no-repeat;
                                                              background-position: center center;
                  '>
                  
                  </div>
             
                  <div class='item1 '  style = 'background-image: url(${twoImg}); 
                                                            background-size: cover;
                                                            position: relative;
                                                            background-repeat: no-repeat;
                                                            background-position: center;'>
                  
                  </div>
                  <div class='item2 '  style = 'background-image: url(${threeImg});  
                                                            background-size: cover;
                                                            position: relative;
                                                            background-repeat: no-repeat;
                                                            background-position: center;'>
                                                            <span class = 'countResidual' > ${plus}${countImgResidual} </span>
                  
                  </div>
                  
            </div>
            `
            divPreview.html(content)
      }
}
  

function fourImg () {
      shuffleArray (arrySrc)
            let oneImg = arrySrc[0];
            let twoImg = arrySrc[1];
            let threeImg = arrySrc[2];
            let fourImg = arrySrc[3];
            let content ='';
            let countImgResidual = '';
            let plus = arrySrc.length < 4 || arrySrc.length === 4 ? '' : '+'
            if ( arrySrc.length > 4) {
                  countImgResidual = arrySrc.length -4;
                  // $('itme3').addClass ('classthemnen')
            }

      if ( arrySrc.length === 0) { 
            content = ` 
            <div class =' fourImg'> 
                  <div class=" fourImgLeft" >

                  </div>
               
                        <div class ='item1'>
                        
                        <!-- <img src ='./anh1.jpg' class = 'img-fluid'> -->
                        </div>
                        <div class ='item2'>
                        
                        <!-- <img src ='./anh8.jpg' class = 'img-fluid'> -->
                        </div>
                        <div class ='item3'>
                        <!-- <img src ='./anh10.jpg' class = 'img-fluid'> -->
                        </div>
              
            
            </div>

            `
          divPreview.html(content) 
      }
      


      else {
            content = `
            <div class =' fourImg'> 
                  <div class=" fourImgLeft" style = 'background-image: url(${oneImg});  
                                                            background-size: cover;
                                                            position: relative;
                                                            background-repeat: no-repeat;
                                                            background-position: center;'
                  >
                 
                  <!-- <img src = './anh5.jpg' class = 'img-fluid'> --> 
                  </div>
                        <div class ='item1' style = 'background-image: url(${twoImg});
                                                      background-size: cover;
                                                      position: relative;
                                                      background-repeat: no-repeat;
                                                      background-position: center;'
                        >
                        <!-- <img src ='./anh1.jpg' class = 'img-fluid'> -->
                        </div>
                        <div class ='item2' style = 'background-image: url(${threeImg});  
                                                      background-size: cover;
                                                      position: relative;
                                                      background-repeat: no-repeat;
                                                      background-position: center;'
                        
                        >
                        <!-- <img src ='./anh8.jpg' class = 'img-fluid'> -->
                        </div>
                        <div class ='item3' style = 'background-image: url(${fourImg});  
                                                      background-size: cover;
                                                      position: relative;
                                                      background-repeat: no-repeat;
                                                      background-position: center;'
                        
                        
                        >
                        <span class = 'countResidual' > ${plus}${countImgResidual} </span>
                        <!-- <img src ='./anh10.jpg' class = 'img-fluid'> -->
                        </div>
                 
                  
            </div>
            `
            divPreview.html(content)
      }
}


function fivImg() {
      shuffleArray (arrySrc)
            let oneImg = arrySrc[0];
            let twoImg = arrySrc[1];
            let threeImg = arrySrc[2];
            let fourImg = arrySrc[3];
            let fiveImg = arrySrc[4];
            let content ='';
            let countImgResidual = '';
            let plus = arrySrc.length < 5 || arrySrc.length === 5 ? '' : '+'
            if ( arrySrc.length > 5) {
                  countImgResidual = arrySrc.length - 5
            }

      if ( arrySrc.length === 0) { 
            content = ` 
            <div class='fivImg'>
                        <div class='item1 '>
                        </div>
                        <div class='item2 ' >
                        </div>
                        <div class='item3 ' >
                        </div>
                        <div class='item4 ' >
                        </div>
                        <div class='item5 ' >
                        </div>
                  
            </div>

            `
          divPreview.html(content) 
      }

      else {
            content = `
            <div class='fivImg'>
      
                <div class='item1 ' style='background-image: url(${oneImg});   
                                                        background-size: cover;
                                                        position: relative;
                                                        background-repeat: no-repeat;
                                                        background-position: center;'>
      
                </div>
                <div class='item2 ' style='background-image: url(${twoImg}); 
                                                        background-size: cover;
                                                        position: relative;
                                                        background-repeat: no-repeat;
                                                        background-position: center;'>
                </div>
                <div class='item3 ' style='background-image: url(${threeImg});   
                                                        background-size: cover;
                                                        position: relative;
                                                        background-repeat: no-repeat;
                                                        background-position: center;'>
                </div>
        
                  <div class='item4 ' style='background-image: url(${fourImg});   
                                                background-size: cover;
                                                position: relative;
                                                background-repeat: no-repeat;
                                                background-position: center;'>

                  </div>
                  <div class='item5 ' style='background-image: url(${fiveImg});    
                                                background-size: cover;
                                                position: relative;
                                                background-repeat: no-repeat;
                                                background-position: center;'>
                                                <span class = 'countResidual' > ${plus}${countImgResidual} </span>
                  <div>                                        
           
            </div>
      
            `
            divPreview.html(content)

      }
}






















































$(function() {
      $('#draggable').draggable();
     
  });






















































//chia ảnh theo facbook
// https://github.com/jerryc-nguyen/ng-photo-grid




// http://ksylvest.github.io/jquery-gridly/

// $('.gridly').gridly({

// });



































































































































































































$(function() {
      $('#draggable').draggable();
     
  });






















































//chia ảnh theo facbook
// https://github.com/jerryc-nguyen/ng-photo-grid




// http://ksylvest.github.io/jquery-gridly/

// $('.gridly').gridly({

// });











































































































































































