const form1 = document.querySelector(".formulario1");
const form2 = document.querySelector(".formulario2");
const form3 = document.querySelector(".formulario3");
const form4 = document.querySelector(".formulario4");
const step1 = document.querySelector(".step_num1");
const step2 = document.querySelector(".step_num2");
const step3 = document.querySelector(".step_num3");
const step4 = document.querySelector(".step_num4");
const pasoFinal = document.querySelector(".formulario5");
const botonSeguir1 = document.querySelector("#button_seguir1");
const cajasTexto = document.querySelectorAll(".input_text");
const mensajeError = document.querySelectorAll(".mensaje_error");
const emailInput = document.querySelector("#email");
const mensaje_error_email = document.querySelector(".email_error_email");
const numberInput = document.querySelector("#number");
const mensaje_error_number = document.querySelector(".menaje_error_number");
const nameInput = document.querySelector("#name");
const mensajeErrorName = document.querySelector(".mensaje_error_name");

function validarNombre(nombre) {
  // Expresión regular para validar el formato del nombre
  const re = /^[a-zA-Z\s]*$/;
  return re.test(nombre);
}

function validarEmail(email) {
  // Expresión regular para validar el formato del correo electrónico
  var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return re.test(email);
}

function validarTelefono(telefono) {
  var re = /^\d{10}$/;
  return re.test(telefono);
}

function borderColorError(elemento) {
  elemento.style.border = "1px solid hsl(354, 84%, 57%)";
}

function siguienteStep(elemento1, elemento2) {
  elemento1.classList.add("efecto_formulario");
  elemento2.classList.remove("efecto_formulario");
}
function siguenteNumPaso(element1, element2) {
  element1.classList.add("efecto_step");
  element2.classList.remove("efecto_step");
}

step1.classList.add("efecto_step");

botonSeguir1.addEventListener("click", function (event) {
  event.preventDefault();
  let hayErrores = false;
  for (let p = 0; p < cajasTexto.length; p++) {
    if (cajasTexto[p].value == "") {
      mensajeError[p].textContent = "This Field is required";
      cajasTexto[p].style.border = "1px solid  hsl(354, 84%, 57%)";
      hayErrores = true;
    } else {
      mensajeError[p].textContent = "";
      cajasTexto[p].style.border = "";
    }
  }

  if (nameInput.value !== "" && !validarNombre(nameInput.value)) {
    mensajeErrorName.style.display = "flex";
    borderColorError(nameInput);
    hayErrores = true;
  } else {
    mensajeErrorName.style.display = "none";
  }

  if (emailInput.value != "" && !validarEmail(emailInput.value)) {
    mensaje_error_email.style.display = "flex";
    borderColorError(emailInput);
    hayErrores = true;
  } else {
    mensaje_error_email.style.display = "none";
  }

  if (numberInput.value != "" && !validarTelefono(numberInput.value)) {
    mensaje_error_number.style.display = "flex";
    borderColorError(numberInput);
    hayErrores = true;
  } else {
    mensaje_error_number.style.display = "none";
  }

  if (hayErrores !== true) {
    form1.style.transform = "scale(0)";
    siguienteStep(form2, form1);
    siguenteNumPaso(step2, step1);
  }
});

//step 2//

const planesContainer = document.querySelectorAll(".plan");
const botonSeguir2 = document.querySelector("#button_seguir2");
const butonStwich = document.querySelector("#btn-switch");
const seleccionMonthly = document.querySelector(".monthly");
const selecionYearly = document.querySelector(".yearly");
const precioPlanes = document.querySelectorAll(".precio_plan");
const botonVolver1 = document.querySelector("#button_back1");
const precioTiempoPagar = document.querySelector(".precio_arcade");
const namePlan = document.querySelectorAll(".nom_plan");

planesContainer[0].classList.add("efecto_plan");

for (let ñ = 0; ñ < planesContainer.length; ñ++) {
  planesContainer[ñ].addEventListener("click", function () {
    for (let l = 0; l < planesContainer.length; l++) {
      planesContainer[l].classList.toggle(
        "efecto_plan",
        planesContainer[l] == this
      );
    }
    tiempoPagar.textContent = namePlan[ñ].textContent;
    precioTiempoPagar.textContent = precioPlanes[ñ].textContent;
    calcularTotal();
  });
}

seleccionMonthly.classList.toggle("efecto_switch_yearly");
precioTiempoPagar.textContent = precioPlanes[0].textContent;

butonStwich.addEventListener("change", function () {
  if (butonStwich.checked) {
    selecionYearly.classList.add("efecto_switch_yearly");
    seleccionMonthly.classList.remove("efecto_switch_yearly");

    totalPer.textContent = "Total (per Year)";

    precioPlanes[0].textContent = "$90 /yr";
    precioPlanes[1].textContent = "$120 /yr";
    precioPlanes[2].textContent = "$150 /yr";

    precioComplemento[0].textContent = "+$10/yr";
    precioComplemento[1].textContent = "+$20/yr";
    precioComplemento[2].textContent = "+$20/yr";
    mesOaño.textContent = "(Yearly)";
  } else {
    seleccionMonthly.classList.add("efecto_switch_yearly");
    selecionYearly.classList.remove("efecto_switch_yearly");

    totalPer.textContent = "Total (per Month)";

    precioPlanes[0].textContent = "$9/mo";
    precioPlanes[1].textContent = "$12/mo";
    precioPlanes[2].textContent = "$15/mo";

    precioComplemento[0].textContent = "+$1/mo";
    precioComplemento[1].textContent = "+$2/mo";
    precioComplemento[2].textContent = "+$2/mo";
    mesOaño.textContent = "(Monthly)";
  }

  precioOnline.textContent = precioComplemento[0].textContent;
  precioLarger.textContent = precioComplemento[1].textContent;
  precioProfile.textContent = precioComplemento[2].textContent;

  let planSeleccionado = document.querySelector(".efecto_plan");

  if (planSeleccionado) {
    planSeleccionado.click();
  }
  calcularTotal();
});

botonVolver1.addEventListener("click", function () {
  form1.style.transform = "scale(1)";
  siguienteStep(form1, form2);
  siguenteNumPaso(step1, step2);
});

botonSeguir2.addEventListener("click", function () {
  siguienteStep(form3, form2);
  siguenteNumPaso(step3, step2);
});

//step 3//

const contenedorComplemento = document.querySelectorAll(".complemento");
const checkboxService = document.querySelectorAll(".checkbox");
const precioComplemento = document.querySelectorAll(".precio_complemento");
const botonSeguir3 = document.querySelector("#button_seguir3");
const botonVolver2 = document.querySelector("#button_back2");
const checkbox1 = document.querySelector(".checkbox1");
const checkbox2 = document.querySelector(".checkbox2");
const checkbox3 = document.querySelector(".checkbox3");
const precioOnline = document.querySelector(".precio_online");
const precioLarger = document.querySelector(".precio_larger");
const precioProfile = document.querySelector(".precio_profile");

for (let a = 0; a < contenedorComplemento.length; a++) {
  contenedorComplemento[a].addEventListener("click", function () {
    if (!checkboxService[a].checked) {
      contenedorComplemento[a].style.border = "1px solid hsl(243, 100%, 62%)";
      checkboxService[a].checked = true;
    } else {
      checkboxService[a].checked = false;
      contenedorComplemento[a].style.border = "1px solid hsl(229, 24%, 87%)";
    }
    if (checkbox1.checked) {
      contOnline.style.display = "flex";
      ComplementosFinales[0].textContent = precioComplemento[0].textContent;
    } else {
      contOnline.style.display = "none";
    }
    if (checkbox2.checked) {
      ComplementosFinales[1].textContent = precioComplemento[1].textContent;
      contLarger.style.display = "flex";
    } else {
      contLarger.style.display = "none";
    }
    if (checkbox3.checked) {
      ComplementosFinales[2].textContent = precioComplemento[2].textContent;
      contProfile.style.display = "flex";
    } else {
      contProfile.style.display = "none";
    }

    // if (checkboxService.checked) {
    // }
    calcularTotal();
  });
}

botonVolver2.addEventListener("click", function () {
  siguienteStep(form2, form3);
  siguenteNumPaso(step2, step3);
});
botonSeguir3.addEventListener("click", function () {
  siguienteStep(form4, form3);
  siguenteNumPaso(step4, step3);
});

// step4 //

const botonSeguir4 = document.querySelector("#button_seguir4");
const botonVolver3 = document.querySelector("#button_back3");
const contOnline = document.querySelector(".cont_Online_service");
const contLarger = document.querySelector(".cont_larger");
const contProfile = document.querySelector(".cont_profile");

const tiempoPagar = document.querySelector(".tiempo");
const mesOaño = document.querySelector(".mes");

const ComplementosFinales = document.querySelectorAll(".precios_finales");
const totalPer = document.querySelector(".tipo_total");

const extraerNumero = (str) => {
  const matches = str.match(/\d+(\.\d+)?/);
  if (matches) {
    return parseFloat(matches[0]);
  }
  return 0;
};

function calcularTotal() {
  const precio_arcadesumar = extraerNumero(
    document.querySelector(".precio_arcade").textContent
  );

  let sumar_online = 0;
  let sumar_larger = 0;
  let sumar_profile = 0;

  if (checkbox1.checked) {
    sumar_online = extraerNumero(
      document.querySelector(".precio_online").textContent
    );
  }

  if (checkbox2.checked) {
    sumar_larger = extraerNumero(
      document.querySelector(".precio_larger").textContent
    );
  }
  if (checkbox3.checked) {
    sumar_profile = extraerNumero(
      document.querySelector(".precio_profile").textContent
    );
  }
  const totalElement = document.querySelector(".total");
  let total = 0;

  if (totalElement) {
    total = precio_arcadesumar + sumar_online + sumar_larger + sumar_profile;
    if (butonStwich.checked) {
      totalElement.textContent = "+$" + total + "/yr";
    } else {
      totalElement.textContent = "+$" + total + "/mo";
    }
  }
}

botonVolver3.addEventListener("click", function () {
  siguienteStep(form3, form4);
  siguenteNumPaso(step3, step4);
});
botonSeguir4.addEventListener("click", function () {
  siguienteStep(pasoFinal, form4);
  step4.classList.remove("efecto_step");
});
