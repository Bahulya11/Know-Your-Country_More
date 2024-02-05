var States = [  "Andhra Pradesh","Arunachal Pradesh","Assam"    ,"Bihar","Chhattisgarh", "Delhi"    ,    "Goa",      "Gujarat",      "Haryana",      "Himachal Pradesh", "Jharkhand","Karnataka",    "Kerala",               "Madhya Pradesh",   "Maharashtra",  "Manipur",  "Meghalaya",    "Mizoram",      "Nagaland", "Odisha",       "Punjab",       "Rajasthan",    "Sikkim",   "Tamil Nadu",   "Telangana",    "Tripura",  "Uttar Pradesh",    "Uttarakhand",  "West Bengal"];
var Capitals = ["Amaravati"     ,"Itanagar"         ,"Dispur"   ,"Patna","Raipur",      "New Delhi",    "Panaji",   "Gandhinagar",  "Chandigarh",   "Shimla",           "Ranchi",   "Banglore",     "Thiruvananthapuram",   "Bhopal",           "Mumbai",       "Imphal",   "Shilong",      "Aizawl",       "Kohima",   "Bhubaneswar",  "Chadigarh",    "Jaipur",       "Gangtok",  "Chennai",      "Hyderabad",    "Agartala", "Lucknow",          "Dehradun",     "Kolkata"];
var Animals = ['Blackbuck ','Mithun','Indian rhinoceros','Gaur','Wild buffalo','Nilgai','Gaur','Asiatic Lion','Blackbuck','Snow Leopard','Elephant','Elephant','Elephant','Swamp Deer (Barasingha)','Giant Squirrel','Sangai','Clouded Leopard','Serow','Mithun','Sambhar deer','Blackbuck','Chinkara','Red Panda','Nilgiri Tahr','Spotted Deer (Jinka)','Phayre’sLangur','Musk Deer','Swamp Deer (Barasingha)','Fishing cat'];
var Flowers = ['Jasmine','Foxtail Orchid','	Foxtail Orchid','	Orchid Tree (Kachnar)','Marrygold','Alfalfa','	Frangipani','	African Marigold','	Lotus','	Pink rhododendron','Palash','Lotus','Golden shower tree','Parrot tree','Jarul','	Siroi lily','Gambar','Red Vanda','	Rhododendron','Ashoka','	Gladiolus','Rohira','Noble orchid','Glory lily','Tangedu Puvvu','Nag Kesar','Palash','Brahma Kamal','Night flowering jasmine'];
var Birds = ['Indian Roller','Great Hornbill','White-winged Wood Duck','Indian Roller','Hill Myna','House sparrow','Black Crested Bulbul','Greater Flamingo','Black Francolin','Western Tragopan','Koel','Indian Roller','Great Hornbill','Paradise Fly catcher','Green Imperial Pigeon',"Mrs. Hume's Pheasant",'Hill Myna',"Mrs. Hume's Pheasant","Blyth's Tragopan",'Peacock','Northern Goshawk','Indian Bustard','Blood Pheasant','Emerald Dove','Indian Roller','Green Imperial Pigeon','Himalayan Monal','Sarus Crane','White-throated King Fisher'];
var Fruits = ['Mango','Jackfruit','None','Mango','Watermelon','Cashew','	Mango','None','Apple','None','Mango','Jackfruit','Mango','Mango','Pineapple','Sohphie','sapthei','None','None','None','None','Cucumber','Jackfruit','Mango','Queen Pineapple','	Kaphal','None','Mango'];
var Trees = ['Neem','Hollong','Hollong','Sacred fig','Sal','Flamboyant','Coconut','Banyan','Sacred fig','Deodar','Sal','Sandalwood','Coconut','Banyan','Mango','Uningthou','White teak','Iron wood','Alder','Sacred fig',	'Indian rosewood','Khejri','Rhododendron','Palmyra palm','Jammi','Agar','Ashoka','Burans','Alstonia'];
var Images = ['https://cdn.download.ams.birds.cornell.edu/api/v1/asset/126556231/1800',
' https://cdn.download.ams.birds.cornell.edu/api/v1/asset/146172731/1800',
'https://i.pinimg.com/736x/be/3b/fb/be3bfbeceba2955b11a0f32f5b99f2b0--the-duck-ducks.jpg',
'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/126556231/1800',
'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/156750301/1800',
'https://www.allaboutbirds.org/guide/assets/photo/305874101-480px.jpg',
'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/150143241/1800',
'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/54167691/1800',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRP8UoZsUcoWkZObJCpXqWlLlWUjEsPDHBpg&usqp=CAU',
'https://upload.wikimedia.org/wikipedia/commons/e/e7/WesternTragopan.jpg',
'https://th-i.thgim.com/public/sci-tech/energy-and-environment/kv6tax/article31640870.ece/alternates/FREE_435/800px-AsianKoelKHariKrishnan',
'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/126556231/1800',
'https://i.ytimg.com/vi/p07tOfMK03o/maxresdefault.jpg',
'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/133740211/1800',
'https://3.bp.blogspot.com/-scVnV7FbsW0/WuKTEEyIanI/AAAAAAAAVIA/Yn1rLuocw-4pqCLvavGwZmWpEmuXfWi8QCLcBGAs/s1600/Green%2Bimperial%2Bpigeon%2B-%2BDucula%2Baenea-2.jpg',
'https://upload.wikimedia.org/wikipedia/commons/5/5a/Syrmaticus_humiae.jpg',
'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/156750301/1800',
'https://upload.wikimedia.org/wikipedia/commons/5/5a/Syrmaticus_humiae.jpg',
'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/159975801/1800',
'https://i.guim.co.uk/img/media/80f866674f2a6d03dfbbcddff7475aeec325951e/0_158_2000_1200/master/2000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=dd55996fbafe3383299e0022f04e7ed9',
'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/306058801/1800',
'https://upload.wikimedia.org/wikipedia/commons/8/80/Great_Indian_bustard.jpg',
'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/176741571/640',
'https://upload.wikimedia.org/wikipedia/commons/c/c1/Pacific_Emerald_Dove_-akes_National_Park_.jpg',
'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/126556231/1800',
'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/222378441/1800',
'https://www.ststworld.com/wp-content/uploads/2019/05/Himalayan_Monal.jpg',
'https://www.thehindu.com/news/national/4flm5u/article26100841.ece/alternates/FREE_435/TH27KRACRANE',
'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/126564081/1800'];

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
    document.getElementById("value").textContent = Birds[randomIndex];
     // document.getElementById("birds").textContent = Birds[randomIndex];

    document.getElementsByClassName("card")[0].style.backgroundImage = "url('"+Images[randomIndex]+"')";

    console.log(States[randomIndex]);
    console.log(Capitals[randomIndex]);
    console.log(Animals[randomIndex]);
    console.log(Flowers[randomIndex]);
    console.log(Birds[randomIndex]);
    console.log(Fruits[randomIndex]);
    console.log(Trees[randomIndex]);
   
};

