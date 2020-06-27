function takeInp(id){
          // console.log(id + 'sdfwef')

          var inpBox = document.getElementById('inputBox');
          inpBox.value += id;
}

function takeResult(){
          var inpBox1 = document.getElementById("inputBox");

          inpBox1.value = eval(inpBox1.value)
           
}

function clearInp() {
          var inpBox1 = document.getElementById('inputBox');
          inpBox1.value = ''
}
