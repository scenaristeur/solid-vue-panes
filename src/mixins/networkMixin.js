import ToastMixin from '@/mixins/ToastMixin'
import ActivityMixin from '@/mixins/ActivityMixin'


export default {
  mixins: [ToastMixin, ActivityMixin],
  data: function () {
    return {
      //    tension : {privacy:"public"}
    }
  },
  created(){

  },
  methods: {
    colorize(str) {
         var col = ""
         for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));
         col = Math.floor(Math.abs((Math.sin(hash) * 10000) % 1 * 16777216)).toString(16);
         //return '#' + Array(6 - col.length + 1).join('0') + col;
         var ret = this.hexToRgb('#' + Array(6 - col.length + 1).join('0') + col);
         if( ret.blue  > 200 && ret.green > 200 && ret.red > 200){
           // couleur trop claire
           ret.green =  100
         }

         return ret

       },
       hexToRgb(hex) {
         var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

         return result ? {
           red: parseInt(result[1], 16),
           green: parseInt(result[2], 16),
           blue: parseInt(result[3], 16)
         } : null;
       },
       takePicture(canvas, name){
         //  let params = JSON.parse(localStorage.getItem('params'));
         //var name = $('#toggleSourceBtn').text()+' sur '+params.ip+' de '+$('#datetimepicker2 input')[0].value+" à " +$('#datetimepicker3 input')[0].value+".png";
         name = name+".png";

         //var canvas = document.getElementById(chartId);
         var dataURI = this.canvasToImage(canvas, "white")
         /*<a href="%dataURI%" download>download</a>*/
         var downloadLink = document.createElement("a");
         downloadLink.download = name;
         downloadLink.innerHTML = "Download File";
         if(navigator.userAgent.indexOf("Chrome") != -1)
         {
           // Chrome allows the link to be clicked
           // without actually adding it to the DOM.
           console.log("CHROME");
           downloadLink.href = window.URL.createObjectURL(dataURI);
         } else
         {
           // Firefox requires the link to be added to the DOM
           // before it can be clicked.
           console.log("FF");
           downloadLink.href = dataURI;
           downloadLink.target="_blank";
           //downloadLink.onclick = destroyClickedElement;
           //downloadLink.onclick = window.URL.revokeObjectURL(downloadLink);
           downloadLink.style.display = "none";
           document.body.appendChild(downloadLink);
           //  console.log(app.$.popupTtl);
         }
         console.log(downloadLink);
         /*downloadLink.click();*/
         /* creation d'un event car download.click() ne fonctionne pas sous Firefox */
         var event = document.createEvent("MouseEvents");
         event.initMouseEvent(
           "click", true, false, window, 0, 0, 0, 0, 0
           , false, false, false, false, 0, null
         );
         downloadLink.dispatchEvent(event);
         //var app = this;
         setTimeout(function(){
           console.log(downloadLink.parentNode);
           document.body.removeChild(downloadLink);
           window.URL.revokeObjectURL(downloadLink);
         }, 1000);
       },
       canvasToImage(canvas, backgroundColor){
         //cache height and width
         var w = canvas.width;
         var h = canvas.height;
         var context = canvas.getContext("2d");
         var data;

         if(backgroundColor)
         {
           //get the current ImageData for the canvas.
           data = context.getImageData(0, 0, w, h);

           //store the current globalCompositeOperation
           var compositeOperation = context.globalCompositeOperation;

           //set to draw behind current content
           context.globalCompositeOperation = "destination-over";

           //set background color
           context.fillStyle = backgroundColor;

           //draw background / rect on entire canvas
           context.fillRect(0,0,w,h);
         }

         //get the image data from the canvas
         var imageData = canvas.toDataURL("image/png");

         if(backgroundColor)
         {
           //clear the canvas
           context.clearRect (0,0,w,h);

           //restore it with original / cached ImageData
           context.putImageData(data, 0,0);

           //reset the globalCompositeOperation to what it was
           context.globalCompositeOperation = compositeOperation;
         }

         //return the Base64 encoded data url string
         return imageData;
       },
       random_rgba() {
         var o = Math.round, r = Math.random, s = 255;
         return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
       },
    }
  }
