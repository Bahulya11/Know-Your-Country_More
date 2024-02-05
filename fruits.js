var States = [  "Andhra Pradesh","Arunachal Pradesh","Assam"    ,"Bihar","Chhattisgarh", "Delhi"    ,    "Goa",      "Gujarat",      "Haryana",      "Himachal Pradesh", "Jharkhand","Karnataka",    "Kerala",               "Madhya Pradesh",   "Maharashtra",  "Manipur",  "Meghalaya",    "Mizoram",      "Nagaland", "Odisha",       "Punjab",       "Rajasthan",    "Sikkim",   "Tamil Nadu",   "Telangana",    "Tripura",  "Uttar Pradesh",    "Uttarakhand",  "West Bengal"];
var Capitals = ["Amaravati"     ,"Itanagar"         ,"Dispur"   ,"Patna","Raipur",      "New Delhi",    "Panaji",   "Gandhinagar",  "Chandigarh",   "Shimla",           "Ranchi",   "Banglore",     "Thiruvananthapuram",   "Bhopal",           "Mumbai",       "Imphal",   "Shilong",      "Aizawl",       "Kohima",   "Bhubaneswar",  "Chadigarh",    "Jaipur",       "Gangtok",  "Chennai",      "Hyderabad",    "Agartala", "Lucknow",          "Dehradun",     "Kolkata"];
var Animals = ['Blackbuck ','Mithun','Indian rhinoceros','Gaur','Wild buffalo','Nilgai','Gaur','Asiatic Lion','Blackbuck','Snow Leopard','Elephant','Elephant','Elephant','Swamp Deer (Barasingha)','Giant Squirrel','Sangai','Clouded Leopard','Serow','Mithun','Sambhar deer','Blackbuck','Chinkara','Red Panda','Nilgiri Tahr','Spotted Deer (Jinka)','Phayre’sLangur','Musk Deer','Swamp Deer (Barasingha)','Fishing cat'];
var Flowers = ['Jasmine','Foxtail Orchid','	Foxtail Orchid','	Orchid Tree (Kachnar)','Marrygold','Alfalfa','	Frangipani','	African Marigold','	Lotus','	Pink rhododendron','Palash','Lotus','Golden shower tree','Parrot tree','Jarul','	Siroi lily','Gambar','Red Vanda','	Rhododendron','Ashoka','	Gladiolus','Rohira','Noble orchid','Glory lily','Tangedu Puvvu','Nag Kesar','Palash','Brahma Kamal','Night flowering jasmine'];
var Birds = ['Indian Roller','Great Hornbill','White-winged Wood Duck','Indian Roller','Hill Myna','House sparrow','Black Crested Bulbul','Greater Flamingo','Black Francolin','Western Tragopan','Koel','Indian Roller','Great Hornbill','Paradise Fly catcher','Green Imperial Pigeon',"Mrs. Hume's Pheasant",'Hill Myna',"Mrs. Hume's Pheasant","Blyth's Tragopan",'Peacock','Northern Goshawk','Indian Bustard','Blood Pheasant','Emerald Dove','Indian Roller','Green Imperial Pigeon','Himalayan Monal','Sarus Crane','White-throated King Fisher'];
var Fruits = ['Mango','Jackfruit','None','Mango','Watermelon','Mango','Cashew	','Mango','Mango','Apple','None','Mango','Jackfruit','Mango','Mango','Pineapple','Sohphie','sapthei','None','None','None','None','Cucumber','Jackfruit','Mango','Queen Pineapple','	Kaphal','None','Mango'];
var Trees = ['Neem','Hollong','Hollong','Sacred fig','Sal','Flamboyant','Coconut','Banyan','Sacred fig','Deodar','Sal','Sandalwood','Coconut','Banyan','Mango','Uningthou','White teak','Iron wood','Alder','Sacred fig',	'Indian rosewood','Khejri','Rhododendron','Palmyra palm','Jammi','Agar','Ashoka','Burans','Alstonia'];
var Images = ['https://5.imimg.com/data5/YD/PM/MY-40752733/fresh-mango-500x500.jpg',
'https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/05/jackfruit-tree-1296x728-header.jpg?w=1155&h=1528',
'NONE',
'https://5.imimg.com/data5/YD/PM/MY-40752733/fresh-mango-500x500.jpg',
'https://thumbs.dreamstime.com/b/big-watermelon-slice-white-background-as-package-design-element-44517200.jpg',
'https://5.imimg.com/data5/YD/PM/MY-40752733/fresh-mango-500x500.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH0CluYyuxkcmqDWKcakHWyO5E9WbQ4__JKg&usqp=CAU',
'https://5.imimg.com/data5/YD/PM/MY-40752733/fresh-mango-500x500.jpg',
'https://5.imimg.com/data5/YD/PM/MY-40752733/fresh-mango-500x500.jpg',
'https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g=',
'NONE',
'https://5.imimg.com/data5/YD/PM/MY-40752733/fresh-mango-500x500.jpg',
'https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/05/jackfruit-tree-1296x728-header.jpg?w=1155&h=1528',
'https://5.imimg.com/data5/YD/PM/MY-40752733/fresh-mango-500x500.jpg',
'https://5.imimg.com/data5/YD/PM/MY-40752733/fresh-mango-500x500.jpg',
'https://upload.wikimedia.org/wikipedia/commons/7/74/%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg',
'https://www.outlookindia.com/outlooktraveller//public/uploads/filemanager/images/IMG_2415_5cded3a089774.jpg',
'https://sahasahobbyistmagazine.files.wordpress.com/2021/09/mizo-passion-fruit.jpg',
'NONE',
'NONE',
'NONE',
'NONE',
'https://m.media-amazon.com/images/I/71xkI-PIE5L._SL1500_.jpg',
'https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/05/jackfruit-tree-1296x728-header.jpg?w=1155&h=1528',
'https://5.imimg.com/data5/YD/PM/MY-40752733/fresh-mango-500x500.jpg',
'https://www.jiomart.com/images/product/original/590000070/pineapple-queen-1-pc-approx-700-g-1200-g-product-images-o590000070-p590000070-0-202203170357.jpg',
'https://spiderimg.amarujala.com/assets/images/2020/05/17/l-l-l_1589729585.jpeg',
'NONE',
'https://5.imimg.com/data5/YD/PM/MY-40752733/fresh-mango-500x500.jpg'];

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
    document.getElementById("value").textContent = Fruits[randomIndex];
    // document.getElementById("fruits").textContent = Fruits[randomIndex];

    document.getElementsByClassName("card")[0].style.backgroundImage = "url('"+Images[randomIndex]+"')";

    console.log(States[randomIndex]);
    console.log(Capitals[randomIndex]);
    console.log(Animals[randomIndex]);
    console.log(Flowers[randomIndex]);
    console.log(Birds[randomIndex]);
    console.log(Fruits[randomIndex]);
    console.log(Trees[randomIndex]);
   
};

