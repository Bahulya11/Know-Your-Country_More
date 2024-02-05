var States = [  "Andhra Pradesh","Arunachal Pradesh","Assam"    ,"Bihar","Chhattisgarh", "Delhi"    ,    "Goa",      "Gujarat",      "Haryana",      "Himachal Pradesh", "Jharkhand","Karnataka",    "Kerala",               "Madhya Pradesh",   "Maharashtra",  "Manipur",  "Meghalaya",    "Mizoram",      "Nagaland", "Odisha",       "Punjab",       "Rajasthan",    "Sikkim",   "Tamil Nadu",   "Telangana",    "Tripura",  "Uttar Pradesh",    "Uttarakhand",  "West Bengal"];
var Capitals = ["Amaravati"     ,"Itanagar"         ,"Dispur"   ,"Patna","Raipur",      "New Delhi",    "Panaji",   "Gandhinagar",  "Chandigarh",   "Shimla",           "Ranchi",   "Banglore",     "Thiruvananthapuram",   "Bhopal",           "Mumbai",       "Imphal",   "Shilong",      "Aizawl",       "Kohima",   "Bhubaneswar",  "Chadigarh",    "Jaipur",       "Gangtok",  "Chennai",      "Hyderabad",    "Agartala", "Lucknow",          "Dehradun",     "Kolkata"];
var Animals = ['Blackbuck ','Mithun','Indian rhinoceros','Gaur','Wild buffalo','Nilgai','Gaur','Asiatic Lion','Blackbuck','Snow Leopard','Elephant','Elephant','Elephant','Swamp Deer (Barasingha)','Giant Squirrel','Sangai','Clouded Leopard','Serow','Mithun','Sambhar deer','Blackbuck','Chinkara','Red Panda','Nilgiri Tahr','Spotted Deer (Jinka)','Phayre’sLangur','Musk Deer','Swamp Deer (Barasingha)','Fishing cat'];
var Flowers = ['Jasmine','Foxtail Orchid','	Foxtail Orchid','	Orchid Tree (Kachnar)','Marrygold','Alfalfa','	Frangipani','	African Marigold','	Lotus','	Pink rhododendron','Palash','Lotus','Golden shower tree','Parrot tree','Jarul','	Siroi lily','Gambar','Red Vanda','	Rhododendron','Ashoka','	Gladiolus','Rohira','Noble orchid','Glory lily','Tangedu Puvvu','Nag Kesar','Palash','Brahma Kamal','Night flowering jasmine'];
var Birds = ['Indian Roller','Great Hornbill','White-winged Wood Duck','Indian Roller','Hill Myna','House sparrow','Black Crested Bulbul','Greater Flamingo','Black Francolin','Western Tragopan','Koel','Indian Roller','Great Hornbill','Paradise Fly catcher','Green Imperial Pigeon',"Mrs. Hume's Pheasant",'Hill Myna',"Mrs. Hume's Pheasant","Blyth's Tragopan",'Peacock','Northern Goshawk','Indian Bustard','Blood Pheasant','Emerald Dove','Indian Roller','Green Imperial Pigeon','Himalayan Monal','Sarus Crane','White-throated King Fisher'];
var Fruits = ['Mango','Jackfruit','None','Mango','Watermelon','Cashew','	Mango','None','Apple','None','Mango','Jackfruit','Mango','Mango','Pineapple','Sohphie','sapthei','None','None','None','None','Cucumber','Jackfruit','Mango','Queen Pineapple','	Kaphal','None','Mango'];
var Trees = ['Neem','Hollong','Hollong','Sacred fig','Sal','Flamboyant','Coconut','Banyan','Sacred fig','Deodar','Sal','Sandalwood','Coconut','Banyan','Mango','Uningthou','White teak','Iron wood','Alder','Sacred fig',	'Indian rosewood','Khejri','Rhododendron','Palmyra palm','Jammi','Agar','Ashoka','Burans','Alstonia'];
var Images = ['https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Neem_%28Azadirachta_indica%29_in_Hyderabad_W_IMG_6976.jpg/150px-Neem_%28Azadirachta_indica%29_in_Hyderabad_W_IMG_6976.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Sapling_of_Hollong_tree_%28Dipterocarpus_macrocarpus%29%2C_the_state_tree_of_Assam.jpg/150px-Sapling_of_Hollong_tree_%28Dipterocarpus_macrocarpus%29%2C_the_state_tree_of_Assam.jpg','https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Sapling_of_Hollong_tree_%28Dipterocarpus_macrocarpus%29%2C_the_state_tree_of_Assam.jpg/150px-Sapling_of_Hollong_tree_%28Dipterocarpus_macrocarpus%29%2C_the_state_tree_of_Assam.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ficus_religiosa_Bo.jpg/150px-Ficus_religiosa_Bo.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Sal_%28Shorea_robusta%29-_old_leaf_at_Jayanti%2C_Duars_W_Picture_122.jpg/150px-Sal_%28Shorea_robusta%29-_old_leaf_at_Jayanti%2C_Duars_W_Picture_122.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Royal_Poinciana.jpg/150px-Royal_Poinciana.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Starr_031209-0059_Cocos_nucifera.jpg/150px-Starr_031209-0059_Cocos_nucifera.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ficus-Benghalensis-Coral-Gables.JPG/150px-Ficus-Benghalensis-Coral-Gables.JPG',
'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ficus_religiosa_Bo.jpg/150px-Ficus_religiosa_Bo.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Cedrus_deodara_Himalajazeder.JPG/150px-Cedrus_deodara_Himalajazeder.JPG',
'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Sal_%28Shorea_robusta%29-_old_leaf_at_Jayanti%2C_Duars_W_Picture_122.jpg/150px-Sal_%28Shorea_robusta%29-_old_leaf_at_Jayanti%2C_Duars_W_Picture_122.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Sandal_leaf.jpg/150px-Sandal_leaf.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Starr_031209-0059_Cocos_nucifera.jpg/150px-Starr_031209-0059_Cocos_nucifera.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ficus-Benghalensis-Coral-Gables.JPG/150px-Ficus-Benghalensis-Coral-Gables.JPG',
'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Mangifera_indica._Tropical_Brazil.JPG/150px-Mangifera_indica._Tropical_Brazil.JPG',
'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Phoebe_hainesiana_north_Bengal_AJTJ.JPG/150px-Phoebe_hainesiana_north_Bengal_AJTJ.JPG',
'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Gmelina_arborea_bark_I_IMG_3543.jpg/150px-Gmelina_arborea_bark_I_IMG_3543.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/MesuaFerrea_IronWood.jpg/150px-MesuaFerrea_IronWood.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Alnus_incana_rugosa_leaves.jpg/150px-Alnus_incana_rugosa_leaves.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ficus_religiosa_Bo.jpg/150px-Ficus_religiosa_Bo.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Dalbergia_sissoo.jpg/150px-Dalbergia_sissoo.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jhand_%28Prosopis_cineraria%29_at_Hodal_W_IMG_1191.jpg/150px-Jhand_%28Prosopis_cineraria%29_at_Hodal_W_IMG_1191.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Rhododendron_niveum_-_University_of_Copenhagen_Botanical_Garden_-_DSC07606.JPG/150px-Rhododendron_niveum_-_University_of_Copenhagen_Botanical_Garden_-_DSC07606.JPG',
'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Borassus_flabellifer.jpg/150px-Borassus_flabellifer.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jhand_%28Prosopis_cineraria%29_at_Hodal_W_IMG_1191.jpg/150px-Jhand_%28Prosopis_cineraria%29_at_Hodal_W_IMG_1191.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Agarwood.jpg/150px-Agarwood.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Sita-Ashok_%28Saraca_asoca%29_leaves_%26_flowers_in_Kolkata_W_IMG_2272.jpg/150px-Sita-Ashok_%28Saraca_asoca%29_leaves_%26_flowers_in_Kolkata_W_IMG_2272.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Rhododendron_in_full_bloom%21_%288620051426%29.jpg/150px-Rhododendron_in_full_bloom%21_%288620051426%29.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Alstonia_scholaris.jpg/150px-Alstonia_scholaris.jpg'];

document.querySelector(window).load(function() {
    document.querySelector('.post-module').hover(function() {
      document.querySelector(this).querySelector('.description').stop().animate({
        height: "toggle",
        opacity: "toggle"
      }, 300);
    });
  });

function run(){
    var randomIndex = Math.ceil((Math.random() * 100) % States.length - 1);
    document.getElementById("key").textContent = States[randomIndex];
    document.getElementById("value").textContent = Trees[randomIndex];
    // document.getElementById("trees").textContent = Trees[randomIndex];

    document.getElementsByClassName("card")[0].style.backgroundImage = "url('"+Images[randomIndex]+"')";

    console.log(States[randomIndex]);
    console.log(Capitals[randomIndex]);
    console.log(Animals[randomIndex]);
    console.log(Flowers[randomIndex]);
    console.log(Birds[randomIndex]);
    console.log(Fruits[randomIndex]);
    console.log(Trees[randomIndex]);
    
};

