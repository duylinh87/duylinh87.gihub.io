

const EL_browse = document.getElementById('browse');
const EL_preview = document.getElementById('preview');

let arrySrc = [];
let layoutNumberImg = 2; // layout mặc định
let LayoutNumberImgAfter = 2; // layout sau khi chèn ảnh

let divPreview = $('#preview');
let divContentSmall = $('#contentSmall');

let indexDrag = -1;
let indexDrop = -1;

//
$("#Smallbutton button").off('click').on('click', function () {
      layoutNumberImg = parseInt($(this).attr('data-number')); // Gán lại theo attr ở html
      switch (layoutNumberImg) {
            case 2: {
                  showTwoImg();
                  break;
            }
            case 3: {
                  showThreeImg()
                  break;
            }
            case 6: {
                  showThreeImg2();
                  break;
            }
            case 4: {
                  showFourImg()
                  break;
            }
            case 5: {
                  showFivImg();
                  break;
            }
            case 6: {
                  showSix()
            }
      }
})

////

const readImage = file => {
      if (!(/^image\/(png|jpe?g|gif)$/).test(file.type))
            return EL_preview.insertAdjacentHTML('beforeend', `Unsupported format ${file.type}: ${file.name} <br>`);
      const img = new Image();

      // let width = img.width
      // let height = img.height;
      // let maxSize = 544
      // if (width > height) {
      //       if (width > maxSize) {
      //           height *= maxSize / width;
      //           width = maxSize;
      //       }
      //   } else {
      //       if (height > maxSize) {
      //           width *= maxSize / height;
      //           height = maxSize;
      //       }
      //   }


      img.src = window.URL.createObjectURL(file);
      arrySrc.push(img.src)
      console.log(arrySrc)

      switch (layoutNumberImg) {
            case 2: {
                  showTwoImg();
                  break;
            }
            case 3: {
                  showThreeImg();
                  break;
            }
            case 6: {
                  showThreeImg2();
                  break;
            }
            case 4: {
                  showFourImg();
                  break;
            }
            case 5: {
                  showFivImg()
            }
      }

      showTemplateLayout()
}

EL_browse.addEventListener('change', ev => {
      EL_preview.innerHTML = ''; // Remove old images and data
      const files = ev.target.files;
      if (!files || !files[0]) return alert('File upload not supported');
      [...files].forEach(readImage);
});

// 


function showAllImg(arrySrc) {
      let content = '';
      content = arrySrc.map((item, index) => {
            return `
            <div class ='imageDiv' ondrop="drop(event)" ondragover="allowDrop(event)">     
               <img src= ${item} alt= ${item} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" id= "drag ${index}">     
            </div>                  
		`
      })
      $('#allImg').html(content)
}




function showTwoImg() {
      showAllImg(arrySrc)
      let oneImg = arrySrc[0];
      let twoImg = arrySrc[1];
      let content = '';
      let countImgResidual = arrySrc.length > 2 ? (arrySrc.length - 2) : '';
      let plus = arrySrc.length < 2 || arrySrc.length === 2 ? '' : '+';
      let lastImg = arrySrc.length < 2 || arrySrc.length === 2 ? '' : 'lastImg'

      if (arrySrc.length === 0) {
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
            LayoutNumberImgAfter = 2
            content = ` 
                  <div class='twoImg'>
                         <div  class='item1' ondrop="drop(event)" ondragover="allowDrop(event)">  
                              <img src = ${oneImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)">                                                        
                         </div> 
                         <div class='item2  ${lastImg}'  ondrop="drop(event)" ondragover="allowDrop(event)">
                              <img src = ${twoImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" >                                
                              <span class = 'countResidual'  > ${plus}${countImgResidual} </span> 
                         </div>         
                  </div>
            `

            divPreview.html(content)
      }
      $('div').removeClass("active");
      $('div.twoImgSmall').addClass("active");
}


function showThreeImg() {
      showAllImg(arrySrc)
      let oneImg = arrySrc[0];
      let twoImg = arrySrc[1];
      let threeImg = arrySrc[2];
      let content = '';
      let countImgResidual = arrySrc.length > 3 ? (arrySrc.length - 3) : '';
      let plus = arrySrc.length < 3 || arrySrc.length === 3 ? '' : '+';
      let lastImg = arrySrc.length < 3 || arrySrc.length === 3 ? '' : 'lastImg'

      if (arrySrc.length === 0) {
            content = ` 
            <div class='threeImg'>
                        <div class=" threeImgUp ">  
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
            LayoutNumberImgAfter = 3
            content = `
            <div class=' threeImg' >
                  <div class=" threeImgUp "  ondrop="drop(event)" ondragover="allowDrop(event)" >
                       <img src = ${oneImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" > 
                  </div>
                  <div class='item1 ' ondrop="drop(event)" ondragover="allowDrop(event)">
                        <img src = ${twoImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" > 
                  
                  </div>
                  <div class='item2 ${lastImg}'  ondrop="drop(event)" ondragover="allowDrop(event)">
                        <img src = ${threeImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" > 
                        <span class = 'countResidual'  > ${plus}${countImgResidual} </span> 
                  </div>
            </div>
            `
            divPreview.html(content)

      }

      $('div').removeClass("active");
      $('div.threeImgSmall').addClass("active");
}

function showThreeImg2() {
      showAllImg(arrySrc)
      let oneImg = arrySrc[0];
      let twoImg = arrySrc[1];
      let threeImg = arrySrc[2];
      let content = '';
      let countImgResidual = arrySrc.length > 3 ? (arrySrc.length - 3) : '';
      let plus = arrySrc.length < 3 || arrySrc.length === 3 ? '' : '+';
      let lastImg = arrySrc.length < 3 || arrySrc.length === 3 ? '' : 'lastImg'

      if (arrySrc.length === 0) {
            content = ` 
            <div class='threeImg2'>
                        <div class=" threeImgUp ">  
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
            LayoutNumberImgAfter = 6
            content = `
            <div class=' threeImg2' >
                  <div class=" threeImgUp "  ondrop="drop(event)" ondragover="allowDrop(event)" >
                       <img src = ${oneImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" > 
                  </div>
                  <div class='item1 ' ondrop="drop(event)" ondragover="allowDrop(event)">
                        <img src = ${twoImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" > 
                  
                  </div>
                  <div class='item2 ${lastImg}'  ondrop="drop(event)" ondragover="allowDrop(event)">
                        <img src = ${threeImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" > 
                        <span class = 'countResidual'  > ${plus}${countImgResidual} </span> 
                  </div>
            </div>
            `
            divPreview.html(content)

      }

      $('div').removeClass("active");
      $('div.threeImg2Small').addClass("active");
}

function showFourImg() {
      showAllImg(arrySrc)
      let oneImg = arrySrc[0];
      let twoImg = arrySrc[1];
      let threeImg = arrySrc[2];
      let fourImg = arrySrc[3];
      let content = '';
      let countImgResidual = arrySrc.length > 4 ? (arrySrc.length - 4) : '';
      let plus = arrySrc.length < 4 || arrySrc.length === 4 ? '' : '+';
      let lastImg = arrySrc.length < 4 || arrySrc.length === 4 ? '' : 'lastImg'


      if (arrySrc.length === 0) {
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
            LayoutNumberImgAfter = 4
            content = `
            <div class =' fourImg' > 
                  <div class=" fourImgLeft " ondrop="drop(event)" ondragover="allowDrop(event)">
                         <img src = ${oneImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" > 
                  </div>
                  <div class ='item1' ondrop="drop(event)" ondragover="allowDrop(event)"> 
                         <img src = ${twoImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" > 
                  </div>
                  <div class ='item2' ondrop="drop(event)" ondragover="allowDrop(event)"> 
                         <img src = ${threeImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" >
                  </div>
                  <div class ='item3 ${lastImg}' ondrop="drop(event)" ondragover="allowDrop(event)">
                         <img src = ${fourImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" > 
                         <span class = 'countResidual'  > ${plus}${countImgResidual} </span> 
                  </div>
            </div>
            `
            divPreview.html(content)
      }
      $('div').removeClass("active");
      $('div.fourImgSmall').addClass("active");
}


function showFivImg() {
      showAllImg(arrySrc)
      let oneImg = arrySrc[0];
      let twoImg = arrySrc[1];
      let threeImg = arrySrc[2];
      let fourImg = arrySrc[3];
      let fiveImg = arrySrc[4];
      let content = '';
      let countImgResidual = arrySrc.length > 5 ? (arrySrc.length - 5) : '';
      let plus = arrySrc.length < 5 || arrySrc.length === 5 ? '' : '+';
      let lastImg = arrySrc.length < 5 || arrySrc.length === 5 ? '' : 'lastImg'


      if (arrySrc.length === 0) {
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
            LayoutNumberImgAfter = 5
            content = `
                  <div class='fivImg'>
            
                        <div class='item1' ondrop="drop(event)" ondragover= "allowDrop(event)" >
                                    <img src = ${oneImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" >  
                        </div>
                        <div class='item2' ondrop="drop(event)" ondragover="allowDrop(event)">
                                    <img src = ${twoImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" >  
                        </div>
                        <div class='item3' ondrop="drop(event)" ondragover="allowDrop(event)">
                                    <img src = ${threeImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" > 
                        </div>
                        <div class='item4' ondrop="drop(event)" ondragover="allowDrop(event)">
                                    <img src = ${fourImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" >  
                        </div>
                        <div class='item5 ${lastImg}' ondrop="drop(event)" ondragover="allowDrop(event)">
                                    <img src = ${fiveImg} onclick="onClick(this)" class="modal-hover-opacity" draggable="true" ondragstart="drag(event)" >                           
                                    <span class = 'countResidual'  > ${plus}${countImgResidual} </span> 
                        <div>                                        
            
                  </div>
            `
            divPreview.html(content)
      }
      $('div').removeClass("active");
      $('div.fivImgSmall').addClass("active");
}





function showTemplateLayout() {
      $('#Smallbutton').hide()
      let oneImg = arrySrc[0];
      let twoImg = arrySrc[1];
      let threeImg = arrySrc[2];
      let fourImg = arrySrc[3];
      let fiveImg = arrySrc[4];
      let content = '';
      let countImgResidual2 = arrySrc.length > 2 ? (arrySrc.length - 2) : '';
      let plus2 = arrySrc.length < 2 || arrySrc.length === 2 ? '' : '+';
      let lastImg2 = arrySrc.length < 2 || arrySrc.length === 2 ? '' : 'lastImg'
      let countImgResidual3 = arrySrc.length > 3 ? (arrySrc.length - 3) : '';
      let plus3 = arrySrc.length < 3 || arrySrc.length === 3 ? '' : '+';
      let lastImg3 = arrySrc.length < 3 || arrySrc.length === 3 ? '' : 'lastImg'
      let countImgResidual4 = arrySrc.length > 4 ? (arrySrc.length - 4) : '';
      let plus4 = arrySrc.length < 4 || arrySrc.length === 4 ? '' : '+';
      let lastImg4 = arrySrc.length < 4 || arrySrc.length === 4 ? '' : 'lastImg'
      let countImgResidual5 = arrySrc.length > 5 ? (arrySrc.length - 5) : '';
      let plus5 = arrySrc.length < 5 || arrySrc.length === 5 ? '' : '+';
      let lastImg5 = arrySrc.length < 5 || arrySrc.length === 5 ? '' : 'lastImg'


      content = ` 
                  <div class='twoImgSmall small' onclick='showTwoImg()' >
                              <div  class='item1'>  
                              <img src = ${oneImg} >                                                        
                              </div> 
                              <div class='item2  ${lastImg2}'>
                              <img src = ${twoImg} >                                
                              <span class = 'countResidual'> ${plus2}${countImgResidual2} </span> 
                              </div>         
                  </div>
                  <hr>
                  <div class=' threeImgSmall small'  onclick='showThreeImg ()' >
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
                  <div class=' threeImg2Small small'  onclick='showThreeImg2 ()' >
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
                  <div class =' fourImgSmall small' onclick='showFourImg()' > 
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
                 <div class='fivImgSmall small' onclick='showFivImg()' >
            
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



// hàm hiển thị model ảnh
//......................
function onClick(element) {
      console.log(element.src)
      document.getElementById("img01").src = element.src;
      document.getElementById("modal01").style.display = "block";
}

// hàm kéo thả ảnh
//....................
function allowDrop(ev) {
      ev.preventDefault();
}


function drag(ev) {
      console.log($(ev.target.parentNode).index())
      indexDrag = $(ev.target.parentNode).index()
}


function drop(ev) {
      ev.preventDefault();
      console.log($(ev.target.parentNode))
      console.log($(ev.target.parentNode).index())

      indexDrop = $(ev.target.parentNode).index()


      let temp = arrySrc[indexDrag];
          arrySrc[indexDrag] = arrySrc[indexDrop];
          arrySrc[indexDrop] = temp;

      console.log(arrySrc)

      switch (LayoutNumberImgAfter) {
            case 2: {
                  showTwoImg();
                  break;
            }
            case 3: {
                  showThreeImg();
                  break;
            }
            case 6: {
                  showThreeImg2();
                  break;
            }
            case 4: {
                  showFourImg();
                  break;
            }
            case 5: {
                  showFivImg()
            }
      }
      showTemplateLayout()
}



























































































































































































































































































































































































































































