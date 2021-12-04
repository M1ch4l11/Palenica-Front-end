function holdPosition() {
    if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById('up').style.position = "fixed";
         document.getElementById('up').style.zIndex = "100";
         document.getElementById('logo').style.maxWidth = "50px";
         document.getElementById('up').style.width = "100%";
         document.getElementById('up').style.top = "0px";
       } else {
         document.getElementById('up').style.top = "0px"
         document.getElementById('logo').style.maxWidth = "80px";
         document.getElementById('up').style.position = "relative";
       }
}