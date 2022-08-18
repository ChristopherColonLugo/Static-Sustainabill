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

console.log(vendorBillsMap.get(btnRewe))


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




