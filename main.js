function startClassification()
{
navigator.mediaDevices.getUserMedia({audio: true});
classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/rOU6c_oe9/model.json',modelReady)
}

function modelReady(){
classifier.classify(gotResults);
}
function gotResults(error,results){
if (error) {
  console.error(error);
} else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
    document.getElementById("result_label").innerHTML =  'Escucho - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisión - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color= "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    
    img = document.getElementById('pusheen1') 
        img1 = document.getElementById('pusheen2')
        img2 = document.getElementById('pusheen3')
        img3 = document.getElementById('pusheen4')
    
        if (results[0].label == "comer") {
          img.src = 'pusheen gif.gif';
          img1.src = 'Captura de pantalla 2022-04-12 145153.png';
          img2.src = 'Captura de pantalla 2022-04-12 145307.png';
          img3.src = 'Captura de pantalla 2022-04-12 145843.png';
        } else if (results[0].label == "miau") {
          img.src = 'Captura de pantalla 2022-04-12 144928.png';
          img1.src = 'tumblr_p7tdo3tjSM1qhy6c9o1_500.gif';
          img2.src = 'Captura de pantalla 2022-04-12 145307.png';
          img3.src = 'Captura de pantalla 2022-04-12 145843.png';
        } else if (results[0].label == "chasquido") {
          img.src = 'Captura de pantalla 2022-04-12 144928.png';
          img1.src = 'Captura de pantalla 2022-04-12 145153.png';
          img2.src = 'b501c35fb9dd93018ee30e8a6a29726a.gif';
          img3.src = 'Captura de pantalla 2022-04-12 145843.png';
        }else{
          img.src = 'Captura de pantalla 2022-04-12 144928.png';
          img1.src = 'Captura de pantalla 2022-04-12 145153.png';
          img2.src = 'Captura de pantalla 2022-04-12 145307.pn';
          img3.src = 'tumblr_p8xztmoJLV1qhy6c9o1_1280.gif';
        }

}  
}