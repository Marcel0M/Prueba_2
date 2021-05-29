$(document).ready(function(){


    function validarEnteroEnCampo(identificadorDelCampo) {
        let field = document.getElementById(identificadorDelCampo);
        let valueInt = parseInt(field.value);
        if (!Number.isInteger(valueInt)) {
          return false;
        } else {
          field.value = valueInt;
          return true;
        }
      }
    

    // ocultar todos los div que tengan class "alert" y se encuentren
    // dentro de un elemento cuyo id es "formulario-contacto".
    $("#registro span.alert").hide();
    $("#login span.alert").hide();

    

    // función encargada de verificar si el valor del parámetro fieldValue
    // es vacío y mostrar o esconder, según corresponda, el mensaje en el
    // div de alerta asociado al campo indicado en el parámetro fieldName.
    function validarCampoVacio(fieldValue, fieldId) {
        
        if (fieldValue.trim().length == 0) {
            $("#"+fieldId).addClass("error-campo-formulario");
            $("label[for='"+fieldId+"'] span.alert").html("El campo no puede ser vacío");
            $("label[for='"+fieldId+"'] span.alert").show();
            $("label[for='"+fieldId+"'] span.alert").fadeOut( 5000 )

            return false;
        } else {
            $("#"+fieldId).removeClass("error-campo-formulario");
            $("label[for='"+fieldId+"'] span.alert").hide();

            return true;
        }
    }


    // asocia en el evento blur del elemento de formulario con id "fieldNombre" la llamada a la
    // función de validar si el campo es vacío.
    $("#fieldNombreCompleto").blur(function(){
        valorIngresado = $(this).val();
        console.log("El usuario ha dejado el campo nombre con el valor: '"+valorIngresado+"'");

        validarCampoVacio(valorIngresado, "fieldNombreCompleto");
    });

    // asocia en el evento blur del elemento de formulario con id "fieldRut" la llamada a la
    // función de validar si el campo es vacío.
    $("#fieldRut").blur(function(){
        valorIngresado = $(this).val();
        console.log("El usuario ha dejado el campo RUT vacío: + '"+valorIngresado+"'");

        validarCampoVacio(valorIngresado, "fieldRut");
    });
   
    // asocia en el evento blur del elemento de formulario con id "fieldEmail" la llamada a la
    // función de validar si el campo es vacío.
    $("#fieldEmail").blur(function(){
        valorIngresado = $(this).val();
        console.log("El usuario ha dejado el campo e-mail con el valor: '"+valorIngresado+"'");

        validarCampoVacio(valorIngresado, "fieldEmail");
    });

    // asocia en el evento blur del elemento de formulario con id "fieldUsuario" la llamada a la
    // función de validar si el campo es vacío.
    $("#fieldUsuario").blur(function(){
        valorIngresado = $(this).val();
        console.log("El usuario ha dejado el campo usuario con el valor: '"+valorIngresado+"'");

        validarCampoVacio(valorIngresado, "fieldUsuario");
    });

    // asocia en el evento blur del elemento de formulario con id "fieldContraseña" la llamada a la
    // función de validar si el campo es vacío.
    $("#fieldContraseña").blur(function(){
        valorIngresado = $(this).val();
        console.log("El usuario ha dejado el campo nombre con el valor: '"+valorIngresado+"'");

        validarCampoVacio(valorIngresado, "fieldContraseña");
    });


    $(":submit").click(function(event) {
        error = false;

        $("input, textarea, select").each(function() {
            value = $(this).val();
            fieldId = $(this).attr("id");

            if (!validarCampoVacio(value, fieldId)) {
                error = true;
            }
        })

        if (error) {
            event.preventDefault();
            return false;
        }

        return true;
    })
});


