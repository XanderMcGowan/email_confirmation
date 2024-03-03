function showCustomConfirm() {
    document.getElementById("customConfirm").style.display = "flex";
}

function closeCustomConfirm() {
    document.getElementById("customConfirm").style.display = "none";
}

function closeSendConfirm() {
    document.getElementById("sendConfirm").style.display = "none";
}

function showSendConfirm() {
    document.getElementById("customConfirm").style.display = "flex";
}


function confirmAction() {
    // Gravity Form Submit code goes here
    document.getElementById("modal-text").innerHTML="Email Sent";
    document.getElementById("modal-confirm").style.display = "none";
    document.getElementById("modal-close").innerHTML="Continue";

}
