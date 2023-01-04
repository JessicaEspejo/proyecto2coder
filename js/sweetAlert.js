//funcio que se ejecuta al iuniciode la pagina

(async () => {
    const {value : pais} = await Swal.fire({
        title:'Bienvenido',
       text:'selecciona tu pais',
       //html:<h1 class="">hola!</h1>
       icon:'question',
    confirmButtonText:'Seleccionar',
        footer:'<span class="">Esta informacion es importante!</span>',
       // width:'90%'
       // padding:0
       // background:'#000'
       // grow: 'fullscreen
        backdrop:true,
       // timer:
       // timerProgressBar:true
       // toast:true,
    position:'center',
       allowOutsideClick: true,
       allowEscapeKey: false,
       allowEnterKey:false,
       stopKeydownPropagation:true,
   
       input:'select',
       inputPlaceholder:'Pais',
       inputValue:'',
       inputOptions:{
           
           Bogota: 'Bogota d.c',
           Manizales : 'Medellin',
           Antioquia:'Medellin',
           Boyaca:'tunja'
       },
       
        //  customClass:{
            // container:
            // popup:
            // header:
            // title:
            // closeButton:
            // icon:
            // image:
            // content:
            // input:
            // actions:
            // confirmButton:
            // cancelButton:
            // footer:	
    
     //  }
    
       // showConfirmButton:
       // confirmButtonColor:
       // confirmButtonAriaLabel:
   
       // showCancelButton:
       // cancelButtonText:
       // cancelButtonColor:
       // cancelButtonAriaLabel:
       
       // buttonsStyling:
       // showCloseButton:
       // closeButtonAriaLabel:
   
   
       imageUrl:'/metodofrances.png',
       imageWidth:'200px',
       //imageHeight:
       imageAlt:'prestamo'
   });


   if (pais) {
    Swal.fire({
        title: `seleccionaste ${pais}`
    })
}
})()


