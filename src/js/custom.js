var km = null;
var gas = null;
var pass = null;


function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -33.4696089, lng: -70.7153597},
          scrollwheel: false,
          zoom: 12
        });
      }

$(document).ready(function () {
    cargarLista()
    opciones()
});

function blocke() {
    if ($('#num')[0].value.length > 0) {
        $('#check_car')[0].disabled = false;
    } else {
        $('#check_car')[0].disabled = true;
    }
}

function cargarLista() {
    for (var i = 0; i < ciudades.length; i++) {
        var liText = '<option value=' + ciudades[i].distance + ' >' + ciudades[i].name + '</option>';
        //console.log(ciudades[i].name);
        $("#list1").append(liText);
        $("#list2").append(liText);
    }
    $("#check_city").click(function () {
        $("#calculator").show();
        
        var list1 = $("#list1 option:selected").val();
        var list2 = $("#list2 option:selected").val();
        console.log(parseInt(list2));
        km = parseInt(list2) - parseInt(list1);
    })
};

$('.dropdown-toggle').hover(function(){
    $('.dropdown-menu').show();
},function(){
    $('.dropdown-menu').hide();
});

function opciones() {
    $('#check_car').click(function () {
        var person = null;
        var kilogas = null;
        var ma = $("input[name='optionsRadios']:checked").val();
        var num = $("#num").val();

        var auto = {
            pass: 5,
            gas: 12
        }
        var moto = {
            pass: 2,
            gas: 21
        }

        var mini = {
            pass: 8,
            gas: 7
        }

        var camion = {
            pass: 3,
            gas: 6
        }

        if (ma == "auto") {
            console.log("esto " + auto.pass);
            person = auto.pass;
            kilogas = auto.gas;
        }

        if (ma == "moto") {
            console.log("esto " + moto.pass);
            person = moto.pass;
            kilogas = moto.gas;
        }

        if (ma == "mini") {
            console.log("esto " + mini.pass);
            person = mini.pass;
            kilogas = mini.gas;
        }

        if (ma == "camion") {
            console.log("esto " + camion.pass);
            person = camion.pass;
            kilogas = camion.gas;
        }

        if (parseInt(num) > 0) {
            if (parseInt(num) <= person) {
                pass = parseInt(num);
                gas = kilogas;
            }
        }
        calcular();
    });
};

function calcular() {
    console.log("es: " + Math.abs(km) + "pass: " + pass + "gas " + gas);
    var multi = Math.abs(km) * gas;
    var total = multi / pass;
    console.log("total " + total);
    swal("Costo total: $" + total.toFixed(2)+" CLP", "Por persona");
}


//----------------map
