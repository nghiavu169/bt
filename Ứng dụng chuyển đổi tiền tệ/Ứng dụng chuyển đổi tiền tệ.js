function euroConverter(){
    document.converter.dollar.value = document.converter.euro.value * 1.12
    document.converter.VND.value = document.converter.euro.value * 26189.43
}
function dollarConverter(){
    document.converter.euro.value = document.converter.dollar.value * 0.89
    document.converter.VND.value = document.converter.dollar.value * 23300.93
}
function VNDConverter() {
    document.converter.euro.value = document.converter.VND.value * 0.000038
    document.converter.dollar.value = document.converter.VND.value * 0.000043
}