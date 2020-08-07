let skinForm=document.getElementById('skinForm');
skinForm.addEventListener('change', skinColorPicker)

function skinColorPicker(){
    console.log(this.value)
}