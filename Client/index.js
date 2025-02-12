window.addEventListener('DOMContentLoaded', function() {
    const imageUpload = document.getElementById('imageUpload');
    const previewImage = document.getElementById('preview');

    imageUpload.addEventListener('change', function() {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function() {
          previewImage.src = reader.result;
        });

        reader.readAsDataURL(file);
      }
    });
  });
window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.getElementById('testing');
    if (el) {
      el.addEventListener('click',postImg);
    }
})
async function postImg(){
    const uploadedImage =document.getElementById('leafImage').files[0]
    const formData = new FormData();
    formData.append('formIMAGE', uploadedImage);
    
    if (uploadedImage){  
        const response = await fetch("http://127.0.0.1:5000/predict", {     
            method: "POST",
            body: formData
        });
        const result = await response.json();
        console.log(result)
    }
    else{
        console.log("Image not uploaded")
        return
    }
}
  
