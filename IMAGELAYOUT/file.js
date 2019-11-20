


const EL_browse = document.getElementById('browse');
const EL_preview = document.getElementById('preview');

let arrySrc = [];
let layoutNumberImg = 2; // layout mặc định
let LayoutNumberImgAfter = 2; // layout sau khi chèn ảnh

let divPreview = $('#preview');
let divContentSmall = $('#contentSmall');

let indexDrag = -1;
let indexDrop = -1;

let countOnclickIput = 0  // để xét trường hợp ít ảnh hơn layout và tải ảnh lên thì ảnh sẽ phi vào layout đang chọn



$("#Smallbutton button").off('click').on('click', function () {
      layoutNumberImg = parseInt($(this).attr('data-number')); // Gán lại theo attr ở html 
      switch (layoutNumberImg) {
            case 2: {
                  showTwoImg();
                  break;
            }
            case 3: {
                  showThreeImg(); // có ảnh mới xét tỷ lệ
                        let HeightImg1 = $('#testone').height()
                        let WidthImg1 = $('#testone').width()
                        let ratioImg1 = HeightImg1 / WidthImg1 

                        if ( ratioImg1 < 1 )  {
                              $('#testone').css( 'height',"100%")
                        }
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



function onClickinput() {
      countOnclickIput += 1
}


const readImage = file => {
      if (!(/^image\/(png|jpe?g|gif)$/).test(file.type))
            return EL_preview.insertAdjacentHTML('beforeend', `Unsupported format ${file.type}: ${file.name} <br>`);
      const img = new Image();
      img.src = window.URL.createObjectURL(file);

      arrySrc.push(img.src)


          if (countOnclickIput === 1 ) {
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
          }

          else {

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

          }


     
          showTemplateLayout()
          showAllImg(arrySrc)

}


EL_browse.addEventListener('change', ev => {
      EL_preview.innerHTML = ''; // Remove old images and data
      const files = ev.target.files;
      if (!files || !files[0]) return alert('File upload not supported');
      [...files].forEach(readImage);
});

function showAllImg(arrySrc) {
      let content = '';

      content = arrySrc.map((item, index) => {
            return `
            <div class ='imageDiv' ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)"  >     
               <img src= ${item} alt= ${item} onclick="onClick(this)" class="modal-hover-opacity" >     
            </div>                  
		`
      })
      $('#allImg').html(content)
}


// lấy tỷ lệ của ảnh  





function showTwoImg() {
     
      let oneImg = arrySrc[0];

      let twoImg =  arrySrc[1];
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
                         <div  class='item1 img-wrap' ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)">  
                              <img src = ${oneImg} onclick="onClick(this)" class="modal-hover-opacity "  >   
                             <span class="closeImg"  onclick = RemoveImg(event)> &times;</span> 
                                                                 
                         </div> 
                         <div class='item2  ${lastImg} img-wrap'  ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)">
                             <span class="closeImg" onclick = RemoveImg(event)> &times;</span> 
                              <img class ='imgtwo' src = ${twoImg} onclick="onClick(this)" class="modal-hover-opacity " >                                
                              <span class = 'countResidual'  > ${plus}${countImgResidual} </span> 
                         </div>         
                  </div>
            `
            divPreview.html(content)
      }

          switch (arrySrc.length ) {
            case 1: {
                  $('.imgtwo').hide()
            }
          }
         



      $('div').removeClass("active");
      $('div.twoImgSmall').addClass("active");
}

function showThreeImg() {
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
                   <div class=" threeImgUp img-wrap contentContainer2"  ondrop="drop(event)" ondragover="allowDrop(event)"  ondragstart="drag(event)" 
                      onclick="SetPosition(event)"
                    
                  >
                       <img src = ${oneImg}  class="modal-hover-opacity testone"   style = "height:auto" >
                       <span class="closeImg"  onclick = RemoveImg(event)> &times;</span>  
                  </div>
                  <div class='item1 img-wrap' ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)" id = 'contentContainer'
                     onclick="SetPosition2(event)"
                  > 
                        <img src = ${twoImg} class = 'imgtwo'  class="modal-hover-opacity "  style = "height:auto" id ='testtwo'> 
                        <span class="closeImg"  onclick = RemoveImg(event)> &times;</span> 
                  
                  </div>
                  <div class='item2 ${lastImg} img-wrap'  ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)"
                      onclick="SetPosition3(event)"
                  >
                        <span class="closeImg"  onclick = RemoveImg(event)> &times;</span> 
                        <img src = ${threeImg} class = 'imgthree'  class="modal-hover-opacity " style = "height:auto" id ='testthree'> 
                        <span class = 'countResidual' > ${plus}${countImgResidual} </span> 
                  </div>
            </div>
            `
            divPreview.html(content)
      }

      let HeightImg2 = $('#testtwo').height()
      let HeightImg3 = $('#testthree').height()

     
      let WidthImg2 = $('#testtwo').width()
      let WidthImg3 = $('#testthree').width()

    
      let ratioImg2 = HeightImg2 / WidthImg2
      let ratioImg3 = HeightImg3 / WidthImg3


      if ( ratioImg2 < 1 ) {
            $('#testtwo').css( 'height',"100%")
      }
      if ( ratioImg3 < 1 ) {
            $('#testthree').css( 'height',"100%")
      }

      switch (arrySrc.length ) {
            case 1: {
                  $('.imgtwo').hide();
                  $('.imgthree').hide();
                  break;
            }
            case 2: {
                  $('.imgthree').hide();
                  break;
            }
      }

      $('div').removeClass("active");
      $('div.threeImgSmall').addClass("active");
}

function SetPosition(event) {
      var theThing2 = document.querySelector(".testone");
      var container2 = document.querySelector(".contentContainer2");
      console.log ( container2)
      let yPosition = event.clientY - container2.getBoundingClientRect().top - (theThing2.clientHeight / 2);
      theThing2.style.top = yPosition + "px";
}

function SetPosition2(event) {
      var theThing = document.querySelector("#testtwo");
      var container = document.querySelector("#contentContainer");
      
      let yPosition = event.clientY - container.getBoundingClientRect().top - (theThing.clientHeight / 2);
      theThing.style.top = yPosition + "px";
}



function showThreeImg2() {
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
                  <div class=" threeImgUp img-wrap"  ondrop="drop(event)" ondragover="allowDrop(event)"  ondragstart="drag(event)">
                      <span class="closeImg" onclick = RemoveImg(event)> &times;</span> 
                       <img src = ${oneImg} onclick="onClick(this)" class="modal-hover-opacity"   > 
                  </div>
                  <div class='item1 img-wrap' ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)">
                      <span class="closeImg" onclick = RemoveImg(event)> &times;</span> 
                        <img src = ${twoImg} class = 'imgtwo' onclick="onClick(this)" class="modal-hover-opacity"  > 
                  
                  </div>
                  <div class='item2 ${lastImg} img-wrap'  ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)">
                       <span class="closeImg" onclick = RemoveImg(event)> &times;</span> 
                        <img src = ${threeImg} class = 'imgthree' onclick="onClick(this)" class="modal-hover-opacity"   > 
                        <span class = 'countResidual'  > ${plus}${countImgResidual} </span> 
                  </div>
            </div>
            `
            divPreview.html(content)
      }

      switch (arrySrc.length ) {
            case 1: {
                  $('.imgtwo').hide();
                  $('.imgthree').hide();
                  break;
            }
            case 2: {
                  $('.imgthree').hide();
                  break;
            }
      }

      $('div').removeClass("active");
      $('div.threeImg2Small').addClass("active");
}

function showFourImg() {
      
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
            <div class =' fourImg'> 
                  <div class=" fourImgLeft img-wrap" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)">
                         <span class="closeImg"  onclick = RemoveImg(event)> &times;</span>  
                         <img src = ${oneImg} onclick="onClick(this)" class="modal-hover-opacity"   > 
                  </div>
                  <div class ='item1 img-wrap' ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)"> 
                  <span class="closeImg"  onclick = RemoveImg(event)> &times;</span>  
                         <img src = ${twoImg} class = 'imgtwo' onclick="onClick(this)" class="modal-hover-opacity"   > 
                  </div>
                  <div class ='item2 img-wrap' ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)"> 
                  <span class="closeImg"  onclick = RemoveImg(event)> &times;</span>  
                         <img src = ${threeImg} class = 'imgthree' onclick="onClick(this)" class="modal-hover-opacity"   >
                  </div>
                  <div class ='item3 ${lastImg} img-wrap' ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)">
                  <span class="closeImg"  onclick = RemoveImg(event)> &times;</span>  
                         <img src = ${fourImg}  class = 'imgfour'  onclick="onClick(this)" class="modal-hover-opacity"   > 
                         <span class = 'countResidual'  > ${plus}${countImgResidual} </span> 
                  </div>
            </div>
            `
            divPreview.html(content)
      }

      switch (arrySrc.length ) {
            case 1: {
                  $('.imgtwo').hide();
                  $('.imgthree').hide();
                  $('.imgfour').hide();
                  break;
            }
            case 2: {
                  $('.imgthree').hide();
                  $('.imgfour').hide();
                  break;
            }
            case 3 : {
                  $('.imgfour').hide();
                  break;
            }
      }

      $('div').removeClass("active");
      $('div.fourImgSmall').addClass("active");
}

function showFivImg() {
     
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
            
                        <div class='item1 img-wrap' ondrop="drop(event)" ondragover= "allowDrop(event)" ondragstart="drag(event)" >
                                  <span class="closeImg"  onclick = RemoveImg(event)> &times;</span>  
                                    <img src = ${oneImg} onclick="onClick(this)" class="modal-hover-opacity"  >  
                        </div>
                        <div class='item2 img-wrap' ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)" >
                                 <span class="closeImg"  onclick = RemoveImg(event)> &times;</span>  
                                    <img src = ${twoImg} class = 'imgtwo' onclick="onClick(this)" class="modal-hover-opacity"  >  
                        </div>
                        <div class='item3 img-wrap' ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)" >
                                 <span class="closeImg"  onclick = RemoveImg(event)> &times;</span>  
                                    <img src = ${threeImg} class = 'imgthree' onclick="onClick(this)" class="modal-hover-opacity"   > 
                        </div>
                        <div class='item4 img-wrap' ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)" >
                                 <span class="closeImg"  onclick = RemoveImg(event)> &times;</span>  
                                    <img src = ${fourImg} class = 'imgfour' onclick="onClick(this)" class="modal-hover-opacity"  >  
                        </div>
                        <div class='item5 ${lastImg} img-wrap' ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)" >
                                    <span class="closeImg"  onclick = RemoveImg(event)> &times;</span>  
                                    <img src = ${fiveImg} class = 'imgfive' onclick="onClick(this)" class="modal-hover-opacity"   >                           
                                    <span class = 'countResidual'  > ${plus}${countImgResidual} </span> 
                        <div>                                        
                  </div>
            `
            divPreview.html(content)
      }

      switch (arrySrc.length ) {
            case 1: {
                  $('.imgtwo').hide();
                  $('.imgthree').hide();
                  $('.imgfour').hide();
                  $('.imgfive').hide();

                  break;
            }
            case 2: {
                  $('.imgthree').hide();
                  $('.imgfour').hide();
                  $('.imgfive').hide();
                  break;
            }
            case 3 : {
                  $('.imgfour').hide();
                  $('.imgfive').hide();
                  break;
            }
            case 4 : {
                  $('.imgfive').hide();
                  break;
            }
      }

      $('div').removeClass("active");
      $('div.fivImgSmall').addClass("active");
}


function showTemplateLayout() {
      $('#Smallbutton').css('display', 'none')
      let widhWindow = $(window).width()
       
      console.log ( widhWindow )
            if ( widhWindow > 600) {
                  $('#contentSmall').css('display', 'block')
            }
            else {
                  $('#contentSmall').css('display', 'flex')
            }

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
      let lastImg4 = arrySrc.length < 4 || arrySrc.length === 4 ? '' : 'lastImg';
      let countImgResidual5 = arrySrc.length > 5 ? (arrySrc.length - 5) : '';
      let plus5 = arrySrc.length < 5 || arrySrc.length === 5 ? '' : '+';
      let lastImg5 = arrySrc.length < 5 || arrySrc.length === 5 ? '' : 'lastImg'


      content = ` 
                  <div class='twoImgSmall small' onclick='showTwoImg()' data-number ="2" >
                              <div  class='item1'>  
                              <img src = ${oneImg} class = 'imgone'>                                                        
                              </div> 
                              <div class='item2  ${lastImg2}'>
                              <img src = ${twoImg} class = 'imgtwo' >                                
                              <span class = 'countResidual'> ${plus2}${countImgResidual2} </span> 
                              </div>         
                  </div>
                 
                  <div class=' threeImgSmall small'  onclick='showThreeImg ()' data-number ="3">
                        <div class=" threeImgUp " >
                            <img src = ${oneImg} class = 'imgone' style= "height:auto"> 
                        </div>
                        <div class='item1'>
                              <img src = ${twoImg} class = 'imgtwo' style= "height:auto"> 
                        </div>
                        <div class='item2 ${lastImg3}'>
                              <img src = ${threeImg} class = 'imgthree' style= "height:auto"> 
                              <span class = 'countResidual'> ${plus3}${countImgResidual3} </span>
                        </div>
                  </div>
                  
                  <div class=' threeImg2Small small'  onclick='showThreeImg2 ()' data-number ="6">
                        <div class=" threeImgUp " >
                              <img src = ${oneImg} class = 'imgone'>  
                        </div>
                        <div class='item1'>
                              <img src = ${twoImg} class = 'imgtwo'> 
                        </div>
                        <div class='item2 ${lastImg3}'>
                              <img src = ${threeImg} class = 'imgthree'> 
                              <span class = 'countResidual'> ${plus3}${countImgResidual3} </span>
                        </div>
                   </div>
                 
                  <div class =' fourImgSmall small' onclick='showFourImg()' data-number ="4"> 
                        <div class=" fourImgLeft " >
                              <img src = ${oneImg} class = 'imgone'> 
                        </div>
                        <div class ='item1' > 
                              <img src = ${twoImg} class = 'imgtwo'> 
                        </div>
                        <div class ='item2' > 
                              <img src = ${threeImg}  class = 'imgthree'>
                        </div>
                        <div class ='item3 ${lastImg4}' >
                              <img src = ${fourImg} class = 'imgfour'> 
                              <span class = 'countResidual'> ${plus4}${countImgResidual4} </span>
                        </div>
                 </div>
                 
                 <div class='fivImgSmall small' onclick='showFivImg()' data-number ="5">
            
                        <div class='item1' >
                                    <img src = ${oneImg} class = 'imgone'>  
                        </div>
                        <div class='item2'>
                                    <img src = ${twoImg} class = 'imgtwo'>  
                        </div>
                        <div class='item3'>
                                    <img src = ${threeImg} class = 'imgthree'> 
                        </div>
                        <div class='item4' >
                                    <img src = ${fourImg} class = 'imgfour'>  
                        </div>
                        <div class='item5 ${lastImg5}'>
                                    <img src = ${fiveImg} class = 'imgfive'>                           
                              <span class = 'countResidual' > ${plus5}${countImgResidual5} </span>
                        <div>                                        
                </div>
            `
      divContentSmall.html(content)


      switch (layoutNumberImg) {
            case 2: {
                  $('div').removeClass("active");
                  $('div.twoImgSmall').addClass("active");
                  break;
            }
            case 3: {
                  $('div').removeClass("active");
                  $('div.threeImgSmall').addClass("active");
                  break;
            }
            case 6: {
                  $('div').removeClass("active");
                  $('div.threeImg2Small').addClass("active");
                  break;
            }
            case 4: {
                  $('div').removeClass("active");
                  $('div.fourImgSmall').addClass("active");
                  break;
            }
            case 5: {
                  $('div').removeClass("active");
                  $('div.fivImgSmall').addClass("active");
            }
      }

      switch (LayoutNumberImgAfter) {
            case 2: {
                  $('div').removeClass("active");
                  $('div.twoImgSmall').addClass("active");
                  break;
            }
            case 3: {
                  $('div').removeClass("active");
                  $('div.threeImgSmall').addClass("active");
                  break;
            }
            case 6: {
                  $('div').removeClass("active");
                  $('div.threeImg2Small').addClass("active");
                  break;
            }
            case 4: {
                  $('div').removeClass("active");
                  $('div.fourImgSmall').addClass("active");
                  break;
            }
            case 5: {
                  $('div').removeClass("active");
                  $('div.fivImgSmall').addClass("active");
            }
      }


      switch (arrySrc.length ) {
            case 0: {
                  $('.imgthree').hide();
                  $('.imgone').hide();
                  $('.imgtwo').hide();
                  $('.imgfour').hide();
                  $('.imgfive').hide();
                  break;
            }


            case 1: {
                  $('.imgtwo').hide();
                  $('.imgthree').hide();
                  $('.imgfour').hide();
                  $('.imgfive').hide();
                  break;
            }
            case 2: {
                  $('.imgthree').hide();
                  $('.imgfour').hide();
                  $('.imgfive').hide();
                  break;
            }
            case 3 : {
                  $('.imgfour').hide();
                  $('.imgfive').hide();
                  break;
            }
            case 4 : {
                  $('.imgfive').hide();
                  break;
            }
      }
}



// hàm hiển thị model ảnh 
//......................
function onClick(element) {
      console.log(element.src)
      document.getElementById("img01").src = element.src;
      document.getElementById("modal01").style.display = "block";
}


function RemoveImg (ev) {
      let indexRemove = 100;
      indexRemove  = $(ev.target.parentNode).index()
                        // alert('dfsfd');
                        console.log(indexRemove)

      arrySrc.splice(indexRemove,1)
      
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

      showAllImg(arrySrc)
      showTemplateLayout()
}


// hàm kéo thả ảnh
//....................
function allowDrop(ev) {
      ev.preventDefault();
}


function drag(ev) {
      // console.log($(ev.target.parentNode).index())
      indexDrag = $(ev.target.parentNode).index()
}


function drop(ev) {
      ev.preventDefault();
      // console.log($(ev.target.parentNode))
      // console.log($(ev.target.parentNode).index())

      indexDrop = $(ev.target.parentNode).index()
      let temp = arrySrc[indexDrag];
          arrySrc[indexDrag] = arrySrc[indexDrop];
          arrySrc[indexDrop] = temp;

      // console.log(arrySrc)
      showAllImg(arrySrc)

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





















// thêm xóa kéo thả hiển thị 




      // $("#contentSmall  .small").off('click').on('click', function () {
      //       LayoutNumberImgAfter = parseInt($(this).attr('data-number')); // Gán lại theo attr ở html 
      //       switch (LayoutNumberImgAfter) {
      //             case 2: {
      //                   showTwoImg();
      //                   break;
      //             }
      //             case 3: {
      //                   showThreeImg()
      //                   break;
      //             }
      //             case 6: {
      //                   showThreeImg2();
      //                   break;
      //             }
      //             case 4: {
      //                   showFourImg()
      //                   break;
      //             }
      //             case 5: {
      //                   showFivImg();
      //                   break;
      //             }
      //             case 6: {
      //                   showSix()
      //             }
      //       }
      // })
      



// hàm nén ảnh chưa biết cách sử dụng 

// function downscaleImage(dataUrl, newWidth, imageType, imageArguments) {
//       "use strict";
//       var image, oldWidth, oldHeight, newHeight, canvas, ctx, newDataUrl;
  
//       // Provide default values
//       imageType = imageType || "image/jpeg";
//       imageArguments = imageArguments || 0.7;
  
//       // Create a temporary image so that we can compute the height of the downscaled image.
//       image = new Image();
//       image.src = dataUrl;
//       oldWidth = image.width;
//       oldHeight = image.height;
//       newHeight = Math.floor(oldHeight / oldWidth * newWidth)
  
//       // Create a temporary canvas to draw the downscaled image on.
//       canvas = document.createElement("canvas");
//       canvas.width = newWidth;
//       canvas.height = newHeight;
  
//       // Draw the downscaled image on the canvas and return the new data URL.
//       ctx = canvas.getContext("2d");
//       ctx.drawImage(image, 0, 0, newWidth, newHeight);
//       newDataUrl = canvas.toDataURL(imageType, imageArguments);
//       return newDataUrl;
// }


















// các phương thức thường sử dụng trong jQuery      https://www.codehub.vn/Diem-Danh-Cac-Method-Pho-Bien-Trong-jQuery-Khi-Lam-Viec-Voi-Phan-Tu-HTML
            // 1. addClass() , removeClass()
            //2. Kiểm Tra Sự Tồn Tại Của CSS Class Trong Phần Tử Cho Trước Sử Dụng
            //      + jQuery.hasClass()

                              // Phương thức .hasClass() của jQuery được dùng để kiểm tra sự tồn tại của một hoặc nhiều CSS class trong phần tử.
                                    // Ví dụ với một trang HTML có chứa đoạn mã như sau:
                                    // <div id="test-div"" class="test-class test-class-1 test-class-2"></div>
                                    // Để kiểm tra sự tồn tại của một class trong một phần tử:
                                    // var exists = $("#test-div").hasClass("test-class");
                                    // console.log(exists);
                                    // // hiển thị "true"

                              // Để kiểm tra sự tồn tại của nhiều class trong một phần tử cùng một lúc, chúng ta sẽ cần tách biệt mỗi class bởi khoảng trắng:
                                    // $("#test-div").hasClass("test-class-1 test-class-2");
                                    // console.log(exists);
                                    // // hiển thị "true"

            // 3. Gán Giá Trị Thuộc Tính Của Phần Tử Sử Dụng jQuery.attr() Ngoài ra, chúng ta cũng hoàn toàn có thể sử dụng phương thức .attr() 
             //để đặt lại CSS class cho phần tử.
                  //  $("#my-image").attr("title", "Test image");
                  // 3a. Lấy Về Giá Trị Thuộc Tính Sử Dụng jQuery.attr()
                  //      ( Để lấy về giá trị của một thuộc tính của phần từ cho trước chúng ta cũng vẫn sử dụng phương thức .attr() 
                  //      của jQuery tuy nhiên sẽ không truyền vào đối số truyền.)
                                    // Ví dụ một trang có chứa đoạn mã HTML như sau:

                                    // <img id="my-image" src="test.jpg" title="Test image">
                                    // Thì để lấy về giá trị của thuộc tính title của phần tử img#my-image ở trên như sau:
                                    
                                    // var imgSource = $("#my-image").attr("src");
                                    // console.log(imgSource); // test.jpg
             // 4 .  Xoá Thuộc Tính Sử Dụng jQuery.removeAttr()
             
             // 5. Gán Nội Dung HTML Cho Phần Tử Sử Dụng jQuery.html()
                         //  $("#my-div").html("<strong>New</strong> HTML");
                     //5a.  Lấy Về Nội Dung HTML Của Phần Tử Sử Dụng jQuery.html()
                                   //  var divHTML = $("#my-div").html();
                                   //  console.log(divHTML);
                                   //  Hiển thị: <strong>New</strong> HTML

              // 6 .Gán Nội Dung Văn Bản Cho Phần Tử Sử Dụng jQuery.text()
                                    // Ví dụ với một trang có chữa đoạn mã HTML như sau:

                                    // <div id="my-div">Sample text</div>
                                    // Thì để gán nội dung HTML cho phần tử div#my-div ở trên chúng ta có thể làm như sau:
                                    
                                    // $("#my-div").text("New text");
                                    // Mã HTML sau khi chạy đoạn câu lệnh trên:
                                    
                                    // <div id="my-div">New text</div>                     
                        // 6a. Lấy Về Nội Dung Văn Bản Của Phần Tử Sử Dụng jQuery.text()
                                                // Ví dụ với một trang có chữa đoạn mã HTML như sau:

                                                // <div id="my-div"><strong>New</strong> HTML</div>
                                                // Thì để lấy về nội dung dạng văn bản của phần tử div#my-div ở trên chúng ta có thể làm như sau:
                                                
                                                // var divText = $("#my-div").text();
                                                // console.log(divText);
                                                // // Hiển thị: New HTML 95,24







































































































































































































































































































































































































