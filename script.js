function soushin(){
    let name = document.getElementById("abcdef").value;
    if(name === "password"){
        document.getElementById("den").src = "https://1.bp.blogspot.com/-abtG2HYMsA8/UU--5kLFD0I/AAAAAAAAO_w/ta20nlofB6Y/s1600/kaizoku_takara.png";
        document.getElementById('hyouji').style.visibility = 'hidden';
        document.getElementById("h1").textContent = "Great job!!";
    }else{
        alert("no!!")
    }
    return;
}
