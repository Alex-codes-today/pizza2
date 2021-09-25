menu_list_array = ["Veg Margherita Pizza",
 "decent pizza","bla pizza","pizza what else is new?"                 ];

function getmenu(){
var htmldata;
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
    
}

function add_item(){
    var item=document.getElementById("add_item").value;
var htmldata;
var item=document.getElementById("menu_list_array").value;
function sorting() {
    menu_list_array.sort();
    console.log(menu_list_array);
    document.getElementById("display_name").innerHTML=menu_list_array.sort();
}
        
        htmldata=""
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    menu_list_array.push(item);
	add_item();
}

menu_list_array = ["Veg Margherita Pizza",
"lol pizza",
"fun pizza",
"fusion reactor pizza" 
];