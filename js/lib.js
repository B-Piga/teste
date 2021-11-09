function doShowInputs()
{
    const name = document.getElementById("name")
    const contact = document.getElementById("contact")
    const address = document.getElementById("address")

    document.getElementById("nome").innerHTML = "Nome:" + name.value
    document.getElementById("nmr").innerHTML = "Numero:" + contact.value
    document.getElementById("end").innerHTML = "Endereço:" + address.value
}