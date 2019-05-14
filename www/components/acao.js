// This is a JavaScript file

$(document).on("click","#camera",function(){
    navigator.camera.getPicture(onSuccess, onFail, { 
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL,
    saveToPhotoAlbum:true, 
    });

    function onSuccess(imageData) {
        var image = document.getElementById('imagem');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
});

function scanBarcode() {
        window.plugins.barcodeScanner.scan( function(result) {
                alert("Código de Barra\n" +
                          "Resultado: " + result.text + "\n" +
                          "Formato: " + result.format + "\n" +
                          "Cancelado: " + result.cancelled);
            }, function(error) {
                alert("Erro: " + error);
            }
        );
  }
$(document).on("click","#scan",function(){
    scanBarcode();
});