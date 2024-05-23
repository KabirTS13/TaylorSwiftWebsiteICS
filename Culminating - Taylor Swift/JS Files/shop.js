function result(){
    var item1 = document.getElementById("item-1").value;
    var item2 = document.getElementById("item-2").value;
    var item3 = document.getElementById("item-3").value;
    var item4 = document.getElementById("item-4").value;
    var item5 = document.getElementById("item-5").value;
    var item6 = document.getElementById("item-6").value;
    var item7 = document.getElementById("item-7").value;
    var item8 = document.getElementById("item-8").value;
    var item9 = document.getElementById("item-9").value;
    var item10 = document.getElementById("item-10").value;
    var item11 = document.getElementById("item-11").value;
    var item12 = document.getElementById("item-12").value;
    var item13 = document.getElementById("item-13").value;
    var item14 = document.getElementById("item-14").value;
    var item15 = document.getElementById("item-15").value;
    if(item1===""){
        item1=0
    }
    if(item2===""){
        item2=0
    }
    if(item3===""){
        item3=0
    }
    if(item4===""){
        item4=0
    }
    if(item5===""){
        item5=0
    }
    if(item6===""){
        item6=0
    }
    if(item7===""){
        item7=0
    }
    if(item8===""){
        item8=0
    }
    if(item9===""){
        item9=0
    }
    if(item10===""){
        item10=0
    }
    if(item11===""){
        item11=0
    }
    if(item12===""){
        item12=0
    }
    if(item13===""){
        item13=0
    }
    if(item14===""){
        item14=0
    }
    if(item15===""){
        item15=0
    }

    var total1 = (item1*3999)/100;
    var total2 = (item2*3999)/100;
    var total3 = (item3*3999)/100;
    var total4 = (item4*3999)/100;
    var total5 = (item5*1799)/100;
    var total6 = (item6*2199)/100;
    var total7 = item7*105;
    var total8 = item8*90;
    var total9 = item9*50;
    var total10 = item10*70;
    var total11 = item11*100
    var total12 = item12*85;
    var total13 = item13*50;
    var total14 = item14*35;
    var total15 = item15*35;
    var total = (total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14 + total15);
    alert(
        "Number of Lavender Edition Vinyl bought: "+item1 +'\n'+
        "Number of Jade Green Edition Vinyl bought: "+item2 +'\n'+
        "Number of Mahogany Edition Vinyl bought: "+item3 +'\n'+
        "Number of Blood Moon Edition Vinyl bought: "+item4 +'\n'+
        "Number of Moonstone Blue Edition CD bought: "+item5 +'\n'+
        "Number of Moonstone Blue Edition Cassette bought: "+item6 +'\n'+
        "Number of Taylor Swift Midnights Blanket bought: "+item7 +'\n'+
        "Number of Taylor Swift Midnights Teal Color Block Sweatpants bought: "+item8 +'\n'+
        "Number of Taylor Swift Midnights Lavender Tie Dye Tote Bag bought: "+item9 +'\n'+
        "Number of Taylor Swift Midnights Green Tie Dye Long Sleeve bought: "+item10 +'\n'+
        "Number of Taylor Swift Midnights Blue Tie Dye Hoodie bought: "+item11 +'\n'+
        "Number of Taylor Swift Midnights Lavender Tie Dye Crewneck bought: "+item12 +'\n'+
        "Number of Taylor Swift Midnights Puzzle bought: "+item13 +'\n'+
        "Number of Get It Off My Desk Mug bought: "+item14 +'\n'+
        "Number of Taylor Swift Midnights Poster bought: "+item15 +'\n'+'\n'+
        "Total cost of the items is: $"+total
    );
    
}

