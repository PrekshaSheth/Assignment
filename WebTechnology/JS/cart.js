
const divimain = document.getElementById("divMain");
const productName = document.getElementById("pname");
const productDesc = document.getElementById("pdesc");
const productQty = document.getElementById("pqty");
const productPrice = document.getElementById("pprice");
const pImg = document.getElementById("pimg");
const cartDiv = document.getElementById("cartdiv");
var randomID;
var prodqty;
var updateqty;
let pQtylbl;

const submitButton = document.querySelector("button");

    submitButton.addEventListener('click',function(){

    randomID="divid" + Math.random().toString(16).slice(2); 

    const newdiv = document.createElement("div");
    newdiv.setAttribute("class","row justify-content-between");
    newdiv.setAttribute("css","margin-bottom: 30px;");
    newdiv.id = randomID;
    console.log(newdiv.id);
    //div for image//
    const divimg = document.createElement("div");
    divimg.setAttribute("class","col-4");

    const divi2 = document.createElement("div");
    divi2.setAttribute("class","container");

    const divi3 = document.createElement("div");
    divi3.setAttribute("class","row justify-content-between");

    const divproductImg = document.createElement("div");
    divproductImg.setAttribute("class","col-12");

    //div for content//
    const divcontent = document.createElement("div");
    divcontent.setAttribute("class","col-8");

    const divright = document.createElement("div");
    divright.setAttribute("class","row justify-content-between");

    const divlist = document.createElement("div");
    divlist.setAttribute("class","col-6");

    const divproductList = document.createElement("div");
    divproductList.setAttribute("class","col-6");

    //div for button
     const divbutton1 = document.createElement("div");
     divbutton1.setAttribute("class","text-center");

     const divbutton2 = document.createElement("div");
     divbutton2.setAttribute("class","form-row");

     const divbutton3 = document.createElement("div");
     divbutton3.setAttribute("class","offset-1 col-lg-10");

     const btn = document.createElement("button");
     btn.setAttribute("class","btn1");
     btn.type = 'submitbutton';
     btn.innerHTML = "Add to Cart";
     btn.setAttribute("onclick","cart(this)");

    const pimg = document.createElement("img");
    var tempPath = window.URL.createObjectURL(pImg.files[0]);
    pimg.setAttribute("src",tempPath);
    pimg.setAttribute("width","140");
    pimg.setAttribute("height","100");
    divproductImg.appendChild(pimg);

    const lblName = document.createElement("label");
    lblName.innerText = "Product Name :";
    //lblName.classList.add("disp");
    divlist.appendChild(lblName);

    const pNamelbl = document.createElement("label");
   // pNamelbl.setAttribute("disply","inline");
    pNamelbl.innerText = productName.value;
    divproductList.appendChild(pNamelbl);

    const brk = document.createElement("br");
    divproductList.appendChild(brk);

    const lblDesc = document.createElement("label");
    lblDesc.innerText = "Product Description :";
    divlist.appendChild(lblDesc);

    const pDesclbl = document.createElement("label");
    pDesclbl.innerText = productDesc.value;
    divproductList.appendChild(pDesclbl);

    const brk2 = document.createElement("br");
    divproductList.appendChild(brk2);

    const lblQty = document.createElement("label");
    lblQty.innerText = "Product Quantity :";
    divlist.appendChild(lblQty);

    pQtylbl = document.createElement("label");
    pQtylbl.innerText = productQty.value;
    pQtylbl.id = "pqty"+randomID;
   // console.log(pQtylbl);
    divproductList.appendChild(pQtylbl);

    const brk3 = document.createElement("br");
    divproductList.appendChild(brk3);

    const lblPrice = document.createElement("label");
    lblPrice.innerText = "Product Price :";
    divlist.appendChild(lblPrice);

    const pPricelbl = document.createElement("label");
    pPricelbl.innerText = productPrice.value;
    divproductList.appendChild(pPricelbl);

    //for img
    divi3.appendChild(divproductImg);
    divi2.appendChild(divi3);
    divimg.appendChild(divi2);
     //for content
    divright.appendChild(divlist);
    divright.appendChild(divproductList);
    divcontent.appendChild(divright);
    newdiv.appendChild(divimg);
    newdiv.appendChild(divcontent);
     //for button
    divbutton3.appendChild(btn);
    divbutton2.appendChild(divbutton3);
    divbutton1.appendChild(divbutton2);
    newdiv.appendChild(divbutton1);
    divimain.appendChild(newdiv);
  
  });            

  function cart(id){

    var parentId = id.parentNode.parentNode.parentNode.parentNode.id;
    var prodname=document.getElementById(parentId).
    getElementsByClassName("col-8")[0].getElementsByClassName("row justify-content-between")[0].
    getElementsByClassName("col-6")[1].getElementsByTagName("label")[0].innerHTML;

    var prodimg=document.getElementById(parentId).
    getElementsByClassName("col-4")[0].getElementsByClassName("container")[0].
    getElementsByClassName("row justify-content-between")[0].getElementsByClassName("col-12")[0].
    getElementsByTagName("img")[0].src;
    
    var proddesc=document.getElementById(parentId).
    getElementsByClassName("col-8")[0].getElementsByClassName("row justify-content-between")[0].
    getElementsByClassName("col-6")[1].getElementsByTagName("label")[1].innerHTML;

    prodqty=document.getElementById(parentId).
    getElementsByClassName("col-8")[0].getElementsByClassName("row justify-content-between")[0].
    getElementsByClassName("col-6")[1].getElementsByTagName("label")[2].innerHTML;

    var prodprice=document.getElementById(parentId).
    getElementsByClassName("col-8")[0].getElementsByClassName("row justify-content-between")[0].
    getElementsByClassName("col-6")[1].getElementsByTagName("label")[3].innerHTML;

    randomID="deletedivid" + Math.random().toString(16).slice(2);
    //update new Qty
    updateqty = pQtylbl1.innerText;
    updateqty = Number(prompt("Enter Quantity you want :"));
    console.log("update qty : "+updateqty);
    
    if(updateqty>prodqty){
      alert("Please, enter correct Quantity!");
    }
    else{
        pQtylbl.innerText = prodqty - updateqty;
        console.log("productQTY :::" + pQtylbl.innerText);
        prodqty = pQtylbl.innerText;
        console.log("product Quantity ==== :::" + prodqty);
    
        const newdiv = document.createElement("div");
        newdiv.setAttribute("class","row justify-content-between");
        newdiv.setAttribute("css","margin-bottom: 30px;");
        newdiv.id = randomID;

        //div for image//
        const divimg = document.createElement("div");
        divimg.setAttribute("class","col-4");

        const divi2 = document.createElement("div");
        divi2.setAttribute("class","container");

        const divi3 = document.createElement("div");
        divi3.setAttribute("class","row justify-content-between");

        const divproductImg = document.createElement("div");
        divproductImg.setAttribute("class","col-12");
        
        const pimg = document.createElement("img");
        var tempPath = window.URL.createObjectURL(pImg.files[0]);
        pimg.setAttribute("src",prodimg);
        pimg.setAttribute("width","140");
        pimg.setAttribute("height","100");
        divproductImg.appendChild(pimg);

        //div for content//
        const divcontent = document.createElement("div");
        divcontent.setAttribute("class","col-8");

        const divright = document.createElement("div");
        divright.setAttribute("class","row justify-content-between");

        const divlist = document.createElement("div");
        divlist.setAttribute("class","col-6");

        const divproductList = document.createElement("div");
        divproductList.setAttribute("class","col-6");

        const lblName = document.createElement("label");
        lblName.innerText = "Product Name :";
        //lblName.classList.add("disp");
        divlist.appendChild(lblName);

        const pNamelbl = document.createElement("label");
        pNamelbl.innerText = prodname;
        divproductList.appendChild(pNamelbl);

        const brk = document.createElement("br");
        divproductList.appendChild(brk);

        const lblDesc = document.createElement("label");
        lblDesc.innerText = "Product Description :";
        divlist.appendChild(lblDesc);

        const pDesclbl = document.createElement("label");
        pDesclbl.innerText = proddesc;
        divproductList.appendChild(pDesclbl);


        const brk2 = document.createElement("br");
        divproductList.appendChild(brk2);

        const lblQty = document.createElement("label");
        lblQty.innerText = "Product Quantity :";
        divlist.appendChild(lblQty);

        const pQtylbl1 = document.createElement("label");
        pQtylbl1.innerText = updateqty;
        divproductList.appendChild(pQtylbl1);

        const brk3 = document.createElement("br");
        divproductList.appendChild(brk3);

        const lblPrice = document.createElement("label");
        lblPrice.innerText = "Product Price :";
        divlist.appendChild(lblPrice);

        const pPricelbl = document.createElement("label");
        pPricelbl.innerText = updateqty * prodprice;
        divproductList.appendChild(pPricelbl);

        //div for button
        const divbutton1 = document.createElement("div");
        divbutton1.setAttribute("class","text-center");

        const divbutton2 = document.createElement("div");
        divbutton2.setAttribute("class","form-row");

        const divbutton3 = document.createElement("div");
        divbutton3.setAttribute("class","offset-1 col-lg-10");

        const btndel = document.createElement("button");
        btndel.setAttribute("class","btn1");
        btndel.type = 'submitbutton';
        btndel.innerHTML = "Delete";
        btndel.setAttribute("onclick","deleteProduct(this)");

        //append all childs
        //for img
        divi3.appendChild(divproductImg);
        divi2.appendChild(divi3);
        divimg.appendChild(divi2);
        newdiv.appendChild(divimg);
        //for content
        divright.appendChild(divlist);
        divright.appendChild(divproductList);
        divcontent.appendChild(divright);
        newdiv.appendChild(divimg);
        newdiv.appendChild(divcontent);
        //for button
        divbutton3.appendChild(btndel);
        divbutton2.appendChild(divbutton3);
        divbutton1.appendChild(divbutton2);
        newdiv.appendChild(divbutton1);
        cartDiv.appendChild(newdiv);

    }
    // console.log("product img : " + prodimg);
    // console.log("product Name : " + prodname);
    // console.log("product desc : " + proddesc);
    // console.log("product qty : " + prodqty);
    // console.log("product price : " + prodprice);
    // console.log("Parentid  :  " +parentId);
  }

  function deleteProduct(value){
   // console.log("val : "+value);
   //   alert("delete");
   var parentdivId=value.parentNode.parentNode.parentNode.parentNode.parentNode;
   var childdiv=value.parentNode.parentNode.parentNode.parentNode;
  //  console.log("prodid : "+ parentdivId);
  //  console.log("childdiv : "+childdiv);
   parentdivId.removeChild(childdiv);
   pQtylbl.innerText = Number(prodqty) + updateqty;
  }