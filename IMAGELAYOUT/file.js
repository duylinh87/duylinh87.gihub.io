

const EL_browse  = document.getElementById('browse');
const EL_preview = document.getElementById('preview');

let arrySrc =[];

let divPreview = $('#preview')
let divContentSmall = $('#contentSmall')

const readImage  = file => {
      if ( !(/^image\/(png|jpe?g|gif)$/).test(file.type) )
        return EL_preview.insertAdjacentHTML('beforeend', `Unsupported format ${file.type}: ${file.name}<br>`);
      const img = new Image();
      img.src = window.URL.createObjectURL(file);
      arrySrc.push( img.src)
      showTwoImg ()
      showTemplateLayout ()
}

EL_browse.addEventListener('change', ev => {
      EL_preview.innerHTML = ''; // Remove old images and data
      const files = ev.target.files;
      if (!files || !files[0]) return alert('File upload not supported');
      [...files].forEach( readImage );
  
});
 

// function shuffleArray(array) {
//       for (let i = array.length - 1; i > 0; i--) {
//              let j = Math.floor(Math.random() * (i + 1));
//                  let temp = array[i];
//                      array[i] = array[j];
//                      array[j] = temp;
//       }
// }

//
function showAllImg(arrySrc) {
	let content = '';
        content = arrySrc.map((item,index) => {
         return `
            <div class ='imageDiv' ondrop="drop(event)" ondragover="allowDrop(event)">     
               <img src= ${item} alt= ${item} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" id= "drag ${index}">     
            </div>                  
		`
	    })
	$('#allImg').html(content)
}
 

function showTwoImg () {
      // shuffleArray (arrySrc)
      showAllImg(arrySrc)
            let oneImg = arrySrc[0];
            let twoImg = arrySrc[1];
            let content ='';
            let countImgResidual = arrySrc.length > 2 ? (arrySrc.length -2) : '';
            let plus = arrySrc.length < 2 || arrySrc.length === 2 ? '' : '+';
            let lastImg = arrySrc.length < 2 || arrySrc.length === 2 ? '' : 'lastImg'

      if ( arrySrc.length === 0) { 
            content = ` 
                  <div class='twoImg'>
                        <div  class='item1'>                   
                        </div> 
                        <div class='item2'>         
                        </div>
                  </div>
            `
          divPreview.html(content) 
      }

      else {
            content = ` 
                  <div class='twoImg'>
                              <div  class='item1' ondrop="drop(event)" ondragover="allowDrop(event)">  
                              <img src = ${oneImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" id="drag1">                                                        
                              </div> 
                              <div class='item2  ${lastImg}'  ondrop="drop(event)" ondragover="allowDrop(event)">
                              <img src = ${twoImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" id="drag2">                                
                              <span class = 'countResidual' > ${plus}${countImgResidual} </span> 
                              </div>         
                  </div>
            `

           divPreview.html(content)
      }

            $('div').removeClass("active");
            $('div.twoImgSmall').addClass("active");
}


function showThreeImg () {
      // shuffleArray (arrySrc)
      // showAllImg(arrySrc)
            let oneImg = arrySrc[0];
            let twoImg = arrySrc[1];
            let threeImg = arrySrc[2];
            let content ='';
            let countImgResidual = arrySrc.length > 3 ? (arrySrc.length -3) : '';
            let plus = arrySrc.length < 3 || arrySrc.length === 3 ? '' : '+';
            let lastImg = arrySrc.length < 3 ||  arrySrc.length === 3 ? '' : 'lastImg'


      if ( arrySrc.length === 0) { 
            content = ` 
            <div class='threeImg'>
                        <div class=" threeImgUp">  
                        </div>
                        <div class='item1'>
                        </div>
                        <div class='item2'>
                        </div>
            </div>
            `
          divPreview.html(content) 
      }
      else {      
            content = `
            <div class=' threeImg' >
                  <div class=" threeImgUp "  ondrop="drop(event)" ondragover="allowDrop(event)" >
                       <img src = ${oneImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" id="drag1 "> 
                  </div>
                  <div class='item1 ' ondrop="drop(event)" ondragover="allowDrop(event)">
                        <img src = ${twoImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" id="drag2"> 
                  
                  </div>
                  <div class='item2 ${lastImg}'  ondrop="drop(event)" ondragover="allowDrop(event)">
                        <img src = ${threeImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" id="drag3"> 
                        <span class = 'countResidual'> ${plus}${countImgResidual} </span>
                  </div>
            </div>
            `
            divPreview.html(content)
      
      }
      $('div').removeClass("active");
      $('div.threeImgSmall').addClass("active");
}

// 
function showFourImg () {
      // shuffleArray (arrySrc)
      // showAllImg(arrySrc)
            let oneImg = arrySrc[0];
            let twoImg = arrySrc[1];
            let threeImg = arrySrc[2];
            let fourImg = arrySrc[3];
            let content ='';
            let countImgResidual = arrySrc.length > 4 ? (arrySrc.length - 4) : '';
            let plus = arrySrc.length < 4 || arrySrc.length === 4 ? '' : '+';
            let lastImg = arrySrc.length < 4 || arrySrc.length === 4 ? '' : 'lastImg'


      if ( arrySrc.length === 0) { 
            content = ` 
                  <div class =' fourImg'> 
                              <div class= "fourImgLeft">
                              </div>
                              <div class ='item1'>
                              </div>
                              <div class ='item2'>
                              </div>
                              <div class ='item3'>
                              </div>
                   </div>

            `
          divPreview.html(content) 
      }
      
      else {
            content = `
            <div class =' fourImg' > 
                  <div class=" fourImgLeft " ondrop="drop(event)" ondragover="allowDrop(event)">
                         <img src = ${oneImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" id="drag1"> 
                  </div>
                  <div class ='item1' ondrop="drop(event)" ondragover="allowDrop(event)"> 
                         <img src = ${twoImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" id="drag2"> 
                  </div>
                  <div class ='item2' ondrop="drop(event)" ondragover="allowDrop(event)"> 
                         <img src = ${threeImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" id="drag3">
                  </div>
                  <div class ='item3 ${lastImg}' ondrop="drop(event)" ondragover="allowDrop(event)">
                         <img src = ${fourImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" id="drag4"> 
                        <span class = 'countResidual'> ${plus}${countImgResidual} </span>
                  </div>
            </div>
            `
            divPreview.html(content)
      }
      $('div').removeClass("active");
      $('div.fourImgSmall').addClass("active");
}


function showFivImg () {
      // shuffleArray (arrySrc)
      // showAllImg(arrySrc)
            let oneImg = arrySrc[0];
            let twoImg = arrySrc[1];
            let threeImg = arrySrc[2];
            let fourImg = arrySrc[3];
            let fiveImg = arrySrc[4];
            let content ='';
            let countImgResidual = arrySrc.length > 5 ? (arrySrc.length - 5) : '';
            let plus = arrySrc.length < 5 || arrySrc.length === 5 ? '' : '+'
            let lastImg = arrySrc.length < 5 ||arrySrc.length === 5 ? '' : 'lastImg'
            if ( arrySrc.length > 5) {
                  countImgResidual = arrySrc.length - 5
            }

      if ( arrySrc.length === 0) { 
            content = ` 
            <div class='fivImg'>
                        <div class='item1'>
                        </div>
                        <div class='item2'>
                        </div>
                        <div class='item3'>
                        </div>
                        <div class='item4'>
                        </div>
                        <div class='item5'>
                        </div>   
            </div>
            `
          divPreview.html(content) 
      }
      else {
            content = `
                  <div class='fivImg'>
            
                        <div class='item1' ondrop="drop(event)" ondragover="allowDrop(event)">
                                    <img src = ${oneImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" id="drag1">  
                        </div>
                        <div class='item2' ondrop="drop(event)" ondragover="allowDrop(event)">
                                    <img src = ${twoImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" id="drag2">  
                        </div>
                        <div class='item3' ondrop="drop(event)" ondragover="allowDrop(event)">
                                    <img src = ${threeImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" id="drag3"> 
                        </div>
                        <div class='item4' ondrop="drop(event)" ondragover="allowDrop(event)">
                                    <img src = ${fourImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" id="drag4">  
                        </div>
                        <div class='item5 ${lastImg}' ondrop="drop(event)" ondragover="allowDrop(event)">
                                    <img src = ${fiveImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" id="drag5">                           
                              <span class = 'countResidual' > ${plus}${countImgResidual} </span>
                        <div>                                        
            
                  </div>
            `
            divPreview.html(content)
      }
      $('div').removeClass("active");
      $('div.fivImgSmall').addClass("active");
}
// 

function showTemplateLayout () {
      $('#Smallbutton').hide()
      let oneImg = arrySrc[0];
      let twoImg = arrySrc[1];
      let threeImg = arrySrc[2];
      let fourImg = arrySrc[3];
      let fiveImg = arrySrc[4];
      let content ='';
            let countImgResidual2 = arrySrc.length > 2 ? (arrySrc.length -2) : '';
            let plus2 = arrySrc.length < 2 || arrySrc.length === 2 ? '' : '+';
            let lastImg2 = arrySrc.length < 2 ||arrySrc.length === 2 ? '' : 'lastImg'
                  let countImgResidual3 = arrySrc.length > 3 ? (arrySrc.length -3) : '';
                  let plus3 = arrySrc.length < 3 || arrySrc.length === 3 ? '' : '+';
                  let lastImg3 = arrySrc.length < 3 ||arrySrc.length === 3 ? '' : 'lastImg'
            let countImgResidual4 = arrySrc.length > 4 ? (arrySrc.length -4) : '';
            let plus4 = arrySrc.length < 4 || arrySrc.length === 4 ? '' : '+';
            let lastImg4 = arrySrc.length < 4 ||arrySrc.length === 4 ? '' : 'lastImg'
                  let countImgResidual5 = arrySrc.length > 5 ? (arrySrc.length -5) : '';
                  let plus5 = arrySrc.length < 5 || arrySrc.length === 5 ? '' : '+';
                  let lastImg5 = arrySrc.length < 5 ||arrySrc.length === 5 ? '' : 'lastImg'
        

            content = ` 
                  <div class='twoImgSmall active' onclick='showTwoImg()'>
                              <div  class='item1'>  
                              <img src = ${oneImg} >                                                        
                              </div> 
                              <div class='item2  ${lastImg2}'>
                              <img src = ${twoImg} >                                
                              <span class = 'countResidual'> ${plus2}${countImgResidual2} </span> 
                              </div>         
                  </div>
                  <hr>
                  <div class=' threeImgSmall '  onclick='showThreeImg ()'>
                        <div class=" threeImgUp " >
                            <img src = ${oneImg}> 
                        </div>
                        <div class='item1'>
                              <img src = ${twoImg}> 
                        </div>
                        <div class='item2 ${lastImg3}'>
                              <img src = ${threeImg}> 
                              <span class = 'countResidual'> ${plus3}${countImgResidual3} </span>
                        </div>
                  </div>
                  <hr>
                  <div class =' fourImgSmall ' onclick='showFourImg()'> 
                        <div class=" fourImgLeft " >
                              <img src = ${oneImg} > 
                        </div>
                        <div class ='item1' > 
                              <img src = ${twoImg} > 
                        </div>
                        <div class ='item2' > 
                              <img src = ${threeImg} >
                        </div>
                        <div class ='item3 ${lastImg4}' >
                              <img src = ${fourImg} > 
                              <span class = 'countResidual'> ${plus4}${countImgResidual4} </span>
                        </div>
                 </div>
                 <hr>
                 <div class='fivImgSmall ' onclick='showFivImg()'>
            
                        <div class='item1'>
                                    <img src = ${oneImg}>  
                        </div>
                        <div class='item2'>
                                    <img src = ${twoImg}>  
                        </div>
                        <div class='item3'>
                                    <img src = ${threeImg}> 
                        </div>
                        <div class='item4' >
                                    <img src = ${fourImg}>  
                        </div>
                        <div class='item5 ${lastImg5}'>
                                    <img src = ${fiveImg}>                           
                              <span class = 'countResidual' > ${plus5}${countImgResidual5} </span>
                        <div>                                        
     
                </div>
            `  
  
           divContentSmall.html(content)   
}



// 





// hàm hiển thị model ảnh
//...............................
function onClick(element) {
      console.log (element.src)
      document.getElementById("img01").src = element.src;
      document.getElementById("modal01").style.display = "block";
}

// hàm kéo thả ảnh
//...........................
function allowDrop(ev) {
      ev.preventDefault();
}
 

function drag(ev) {
      ev.dataTransfer.setData("src", ev.target.id);  
}
  

function drop(ev) {
      ev.preventDefault();
      let src = document.getElementById(ev.dataTransfer.getData("src"));
      let srcParent = src.parentNode;
      let tgt = ev.currentTarget.firstElementChild;
      ev.currentTarget.replaceChild(src, tgt);
      srcParent.appendChild(tgt);
}




 


 






















































//drag swap dom javascript

//http://jsfiddle.net/jstoolsmith/TJKmh/

////////////////////////////////////////////////////////////////////////////////////////////////////
// drag : kéo ; drop : thả
// allowDrop : cho phép thả
// draggable : có thể kéo






















































































































































































































































































































































































































































































//http://jsfiddle.net/jstoolsmith/TJKmh/

////////////////////////////////////////////////////////////////////////////////////////////////////
// drag : kéo ; drop : thả
// allowDrop : cho phép thả








































































































































































































































































































































































































































































































































































































































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











































































































































































