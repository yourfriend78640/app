var taxRate;
var taxAmount;
var baseTax;
var taxableAmount;
var slabLevel;
var incomeAfterTax;


/*Actual Function*/

function calculate(){
var x=document.getElementById("income").value;
var annualIncome=x * 12;

if(annualIncome<=0){
   alert('Enter correct income');
    return false;
   }
    
if(annualIncome<400000){
taxRate=0;
taxAmount="No Tax Applied";
slabLevel="Below 4 Lakh Rupees";
incomeAfterTax=annualIncome;
}

else if((annualIncome>400000)&&(annualIncome<500000)){

taxableAmount=annualIncome-400000;
taxAmount=taxableAmount*.02;
incomeAfterTax=annualIncome-taxAmount;
baseTax=0;
slabLevel="400000-500000 Rupees";
taxRate=2;
taxAmount=taxAmount+" Rupees";
}

else if((annualIncome>500000)&&(annualIncome<750000)){
baseTax=2000;
taxableAmount=annualIncome-500000;
taxAmount=baseTax+taxableAmount*.05;
incomeAfterTax=annualIncome-taxAmount;
slabLevel="500000-750000 Rupees";
taxRate="2000 Rupees + 5";
taxAmount=taxAmount+" Rupees";
}

else if((annualIncome>750000)&&(annualIncome<1400000)){
baseTax=14500;
taxableAmount=annualIncome-750000;
taxAmount=baseTax+taxableAmount*.10;
incomeAfterTax=annualIncome-taxAmount;
slabLevel="750000-1400000 Rupees";
taxRate="14500 Rupees + 10";
taxAmount=taxAmount+" Rupees";
}

else if((annualIncome>1400000)&&(annualIncome<1500000)){
baseTax=79500;
taxableAmount=annualIncome-1400000;
taxAmount=baseTax+taxableAmount*.125;
incomeAfterTax=annualIncome-taxAmount;
slabLevel="1400000-1500000 Rupees";
taxRate="79500 Rupees + 12.5";
taxAmount=taxAmount+" Rupees";
}

else if((annualIncome>1500000)&&(annualIncome<1800000)){
baseTax=92000;
taxableAmount=annualIncome-1500000;
taxAmount=baseTax+taxableAmount*.15;
incomeAfterTax=annualIncome-taxAmount;
slabLevel="1500000-1800000 Rupees";
taxRate="92000 Rupees + 15";
taxAmount=taxAmount+" Rupees";
}

else if((annualIncome>1800000)&&(annualIncome<2500000)){
baseTax=137000;
taxableAmount=annualIncome-1800000;
taxAmount=baseTax+taxableAmount*.175;
incomeAfterTax=annualIncome-taxAmount;
slabLevel="1800000-2500000 Rupees";
taxRate="137000 Rupees + 17.5";
taxAmount=taxAmount+" Rupees";
}

else if((annualIncome>2500000)&&(annualIncome<3000000)){
baseTax=259500;
taxableAmount=annualIncome-2500000;
taxAmount=baseTax+taxableAmount*.20;
incomeAfterTax=annualIncome-taxAmount;
slabLevel="2500000-3000000 Rupees";
taxRate="259500 Rupees + 20";
taxAmount=taxAmount+" Rupees";
}

else if((annualIncome>3000000)&&(annualIncome<3500000)){
baseTax=359500;
taxableAmount=annualIncome-3000000;
taxAmount=baseTax+taxableAmount*.225;
incomeAfterTax=annualIncome-taxAmount;
slabLevel="3000000-3500000 Rupees";
taxRate="359500 Rupees + 22.5";
taxAmount=taxAmount+" Rupees";
}

else if((annualIncome>3500000)&&(annualIncome<4000000)){
baseTax=472000;
taxableAmount=annualIncome-3500000;
taxAmount=baseTax+taxableAmount*.25;
incomeAfterTax=annualIncome-taxAmount;
slabLevel="3500000-4000000 Rupees";
taxRate="472000 Rupees + 25";
taxAmount=taxAmount+" Rupees";
}

else if((annualIncome>4000000)&&(annualIncome<7000000)){
baseTax=597000;
taxableAmount=annualIncome-4000000;
taxAmount=baseTax+taxableAmount*.275;
incomeAfterTax=annualIncome-taxAmount;
slabLevel="4000000-7000000 Rupees";
taxRate="597000 Rupees + 27.5";
taxAmount=taxAmount+" Rupees";
}

if(annualIncome>7000000){
baseTax=1422000;
taxableAmount=annualIncome-7000000;
taxAmount=baseTax+taxableAmount*.30;
incomeAfterTax=annualIncome-taxAmount;
slabLevel="Above 70 Lakh Rupees";
taxRate="1422000 Rupees + 30";
taxAmount=taxAmount+" Rupees";
}

/*Displaying Result*/
document.getElementById("annualIncome").innerHTML=annualIncome+" Rupees";
document.getElementById("taxRate").innerHTML=taxRate+" %";
document.getElementById("slabLevel").innerHTML=slabLevel;
document.getElementById("taxAmount").innerHTML=taxAmount;
document.getElementById("incomeAfterTax").innerHTML=incomeAfterTax+" Rupees";

/*Making the elements Visible*/

var elements = document.getElementsByClassName("values");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.visibility="visible";

    }

var elements = document.getElementsByClassName("formElement");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display="block";

    }

}
