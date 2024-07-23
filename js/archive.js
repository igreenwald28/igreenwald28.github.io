function enlargeImage(id){

    const image1 = document.getElementById(id);
    let priorleft = image1.clientLeft;
    let priortop = image1.clientTop;
    let screenw = window.innerWidth;
    let screenh = window.innerHeight;
    const back1 = document.getElementById("background1");
    const body1 = document.getElementById("body1");
    if(image1.classList.contains("landscapes") || image1.classList.contains("portraits")
        || image1.classList.contains("recs") || image1.classList.contains("longs")){

        if(image1.classList.contains("landscapes")){
            image1.classList.remove("landscapes");
            image1.classList.add("landscapeb");
        }
        else if(image1.classList.contains("portraits")) {
            image1.classList.remove("portraits");
            image1.classList.add("portraitb");
        }
        else if(image1.classList.contains("recs")){
            image1.classList.remove("recs");
            image1.classList.add("recb");
        }
        else if(image1.classList.contains("longs")){
            image1.classList.remove("longs");
            image1.classList.add("longb");
        }

        let w= image1.clientWidth;
        let h= image1.clientHeight;
        let midleft= ((screenw-w)/2).toString() + 'px';
        let midtop= ((screenh-h)/2).toString() + 'px';
        image1.style.left = midleft;
        image1.style.top = midtop;
        back1.style.zIndex="2";
        body1.classList.add("scroll");
    }
    else if (image1.classList.contains("landscapeb") || image1.classList.contains("portraitb")
        || image1.classList.contains("recb") || image1.classList.contains("longb")){

        if(image1.classList.contains("landscapeb")){
            image1.classList.remove("landscapeb");
            image1.classList.add("landscapes");
        }
        else if(image1.classList.contains("portraitb")){
            image1.classList.remove("portraitb");
            image1.classList.add("portraits");
        }
        else if(image1.classList.contains("recb")){
            image1.classList.remove("recb");
            image1.classList.add("recs");
        }
        else if(image1.classList.contains("longb")){
            image1.classList.remove("longb");
            image1.classList.add("longs")
        }
        image1.style.left = priorleft.toString() + 'px';
        image1.style.top = priortop.toString() + 'px';
        back1.style.zIndex = "-1";
        body1.classList.remove("scroll");

    }

}