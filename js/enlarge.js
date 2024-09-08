
function enlargeImage(id){

    const image1 = document.getElementById(id);
    const back1 = document.getElementById("background1");
    const body1 = document.getElementById("body1");
    let w = image1.clientWidth;
    let h = image1.clientHeight;
    let left = image1.clientLeft;
    let top = image1.clientTop;

    if (image1.classList.contains("small")){
        let screenw = window.innerWidth;
        let screenh = window.innerHeight;
        image1.classList.remove("small");
        image1.classList.add("big");
        let doubleh = h*2;
        let doublew = w*2;
        image1.style.height = doubleh.toString() + 'px';
        image1.style.width = doublew.toString() + 'px';
        image1.style.position = "fixed";
        image1.style.left = (screenw/2 - w).toString() + 'px';
        image1.style.top = (screenh/2 - h).toString() + 'px';
        back1.style.zIndex="1";
        image1.style.zIndex="2";
        body1.classList.add("scroll");
    }
    else if (image1.classList.contains("big")) {
        image1.classList.remove("big");
        image1.classList.add("small")
        let halfh = h/2;
        let halfw = w/2;
        image1.style.height = halfh.toString() + 'px';
        image1.style.width = halfw.toString() + 'px';
        image1.style.zIndex = "0";
        image1.style.left=left.toString() + 'px';
        image1.style.top=top.toString() + 'px';
        image1.style.position = "relative";
        image1.style.zIndex="0";
        back1.style.zIndex="-1";
        body1.classList.remove("scroll");
    }


}
