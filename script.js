var btnSection = document.getElementById("btn-section");

var btnRewe = document.getElementById("btn-rewe");
var btnAldi = document.getElementById("btn-aldi");
var btnEdeka = document.getElementById("btn-edeka");

var vendorArray = [btnRewe, btnAldi, btnEdeka];

var vendorColorMap = new Map();
vendorColorMap.set(btnRewe, "rgb(211,32,39)");
vendorColorMap.set(btnEdeka, "rgb(0,123,192)");
vendorColorMap.set(btnAldi, "rgb(6,2,153)");

var vendorBillsMap = new Map();

var reweBills = document.getElementsByClassName("rewe-bill");
vendorBillsMap.set(btnRewe, reweBills);
var edekaBills = document.getElementsByClassName("edeka-bill");
vendorBillsMap.set(btnEdeka, edekaBills);
var aldiBills = document.getElementsByClassName("aldi-bill");
vendorBillsMap.set(btnAldi, aldiBills);


vendorArray.forEach(vendor => {
    vendor.style.backgroundColor = vendorColorMap.get(vendor);
    vendor.onclick = function changecolor(){
        document.getElementById("midsection").style.backgroundColor = vendorColorMap.get(vendor);
        btnSection.removeChild(vendor);
        btnSection.prepend(vendor);
        if(vendor == btnRewe){
        vendorBillsMap.get(btnRewe).item(0).style.display = "block";
        vendorBillsMap.get(btnRewe).item(1).style.display = "block";
        vendorBillsMap.get(btnAldi).item(0).style.display = "none";
        vendorBillsMap.get(btnEdeka).item(0).style.display = "none";
        for (let index = 0; index < 3; index++) {
            document.getElementById("rightimg"+index).setAttribute("src", "images/reweAdd"+index+".jpg");  
        }
        }
        else if(vendor == btnEdeka){
            vendorBillsMap.get(btnRewe).item(0).style.display = "none";
            vendorBillsMap.get(btnRewe).item(1).style.display = "none";
            vendorBillsMap.get(btnAldi).item(0).style.display = "none";
            vendorBillsMap.get(btnEdeka).item(0).style.display = "block";
            for (let index = 0; index < 3; index++) {
                document.getElementById("rightimg"+index).setAttribute("src", "images/EdekaAd"+index+".png");  
            }
        }else if(vendor == btnAldi){
            vendorBillsMap.get(btnRewe).item(0).style.display = "none";
            vendorBillsMap.get(btnRewe).item(1).style.display = "none";
            vendorBillsMap.get(btnAldi).item(0).style.display = "block";
            vendorBillsMap.get(btnEdeka).item(0).style.display = "none";
            for (let index = 0; index < 3; index++) {
                document.getElementById("rightimg"+index).setAttribute("src", "images/AldiAd"+index+".png");  
            }
        }

    }
});


const SScore = document.querySelectorAll("td:nth-child(4)");
for (let index = 0; index < SScore.length; index++) {
    console.log(parseInt(SScore.item(index).innerHTML));

    //linear interpolating between rgb(152,0,0) and rgb(0,152,0)
    const fraction = parseInt(SScore.item(index).innerHTML)/1000.0;
    const R = parseInt((-240) * fraction + 240);
    const G = parseInt((240) * fraction);
    SScore.item(index).style.color = "rgb("+R+","+G+",0)";
}




