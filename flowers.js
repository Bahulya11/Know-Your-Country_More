var States = [  "Andhra Pradesh","Arunachal Pradesh","Assam"    ,"Bihar","Chhattisgarh", "Delhi"    ,    "Goa",      "Gujarat",      "Haryana",      "Himachal Pradesh", "Jharkhand","Karnataka",    "Kerala",               "Madhya Pradesh",   "Maharashtra",  "Manipur",  "Meghalaya",    "Mizoram",      "Nagaland", "Odisha",       "Punjab",       "Rajasthan",    "Sikkim",   "Tamil Nadu",   "Telangana",    "Tripura",  "Uttar Pradesh",    "Uttarakhand",  "West Bengal"];
var Capitals = ["Amaravati"     ,"Itanagar"         ,"Dispur"   ,"Patna","Raipur",      "New Delhi",    "Panaji",   "Gandhinagar",  "Chandigarh",   "Shimla",           "Ranchi",   "Banglore",     "Thiruvananthapuram",   "Bhopal",           "Mumbai",       "Imphal",   "Shilong",      "Aizawl",       "Kohima",   "Bhubaneswar",  "Chadigarh",    "Jaipur",       "Gangtok",  "Chennai",      "Hyderabad",    "Agartala", "Lucknow",          "Dehradun",     "Kolkata"];
var Animals = ['Blackbuck ','Mithun','Indian rhinoceros','Gaur','Wild buffalo','Nilgai','Gaur','Asiatic Lion','Blackbuck','Snow Leopard','Elephant','Elephant','Elephant','Swamp Deer (Barasingha)','Giant Squirrel','Sangai','Clouded Leopard','Serow','Mithun','Sambhar deer','Blackbuck','Chinkara','Red Panda','Nilgiri Tahr','Spotted Deer (Jinka)','Phayre’sLangur','Musk Deer','Swamp Deer (Barasingha)','Fishing cat'];
var Flowers = ['Jasmine','Foxtail Orchid','	Foxtail Orchid','	Orchid Tree (Kachnar)','Marrygold','Alfalfa','	Frangipani','	African Marigold','	Lotus','	Pink rhododendron','Palash','Lotus','Golden shower tree','Parrot tree','Jarul','	Siroi lily','Gambar','Red Vanda','	Rhododendron','Ashoka','	Gladiolus','Rohira','Noble orchid','Glory lily','Tangedu Puvvu','Nag Kesar','Palash','Brahma Kamal','Night flowering jasmine'];
var Birds = ['Indian Roller','Great Hornbill','White-winged Wood Duck','Indian Roller','Hill Myna','House sparrow','Black Crested Bulbul','Greater Flamingo','Black Francolin','Western Tragopan','Koel','Indian Roller','Great Hornbill','Paradise Fly catcher','Green Imperial Pigeon',"Mrs. Hume's Pheasant",'Hill Myna',"Mrs. Hume's Pheasant","Blyth's Tragopan",'Peacock','Northern Goshawk','Indian Bustard','Blood Pheasant','Emerald Dove','Indian Roller','Green Imperial Pigeon','Himalayan Monal','Sarus Crane','White-throated King Fisher'];
var Fruits = ['Mango','Jackfruit','None','Mango','Watermelon','Cashew','	Mango','None','Apple','None','Mango','Jackfruit','Mango','Mango','Pineapple','Sohphie','sapthei','None','None','None','None','Cucumber','Jackfruit','Mango','Queen Pineapple','	Kaphal','None','Mango'];
var Trees = ['Neem','Hollong','Hollong','Sacred fig','Sal','Flamboyant','Coconut','Banyan','Sacred fig','Deodar','Sal','Sandalwood','Coconut','Banyan','Mango','Uningthou','White teak','Iron wood','Alder','Sacred fig',	'Indian rosewood','Khejri','Rhododendron','Palmyra palm','Jammi','Agar','Ashoka','Burans','Alstonia'];
var Images = ['https://www.petalrepublic.com/wp-content/uploads/2021/04/Ultimate-Guide-to-Jasmine-Flower-Meaning-Types-and-Uses.jpeg',
'https://www.gardeningknowhow.com/wp-content/uploads/2015/06/foxtail-orchid.jpg',
'https://www.gardeningknowhow.com/wp-content/uploads/2015/06/foxtail-orchid.jpg',
'https://i.pinimg.com/originals/cc/12/34/cc12345917ca44f49c759764fc32a7a4.jpg',
'https://www.getatoz.com/media/small/1634169430Marigold.jpg',
'https://www.friendsofthewildflowergarden.org/generaljpegs/Seasons/local/alfalfaflw300.jpg',
'https://www.homestratosphere.com/wp-content/uploads/2021/10/frangipani-feature-23102021.jpg',
'https://m.media-amazon.com/images/I/71idNjwx7QL._SL1000_.jpg',
'https://www.thoughtco.com/thmb/mik7Z00SAYN786BQbieXWOzZmc8=/2121x1414/filters:fill(auto,1)/lotus-flower-828457262-5c6334b646e0fb0001dcd75a.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFn4hQY850BlhC4SYbu6uFBjE3iS1nONvSWQ&usqp=CAU',
'http://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-palash-butea-plant-16969156100236.jpg?v=1634225393',
'https://images.unsplash.com/photo-1616435577207-ca90abc6b732?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG90dXMlMjBmbG93ZXJ8ZW58MHx8MHx8&w=1000&q=80',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV2ocZcY1_w6Drfj4I-pUZO1-hCkBbQ112Rg&usqp=CAU',
'https://aumhimalaya.com//wp-content/uploads/2019/11/Parrot-Tree-101800AA26.jpg',
'https://nestreeo.com/wp-content/uploads/2019/09/JarulPride-of-India-2.jpg',
'https://i.pinimg.com/736x/b7/72/a6/b772a6260c183877073c960abaa39e5a--indian-flowers-lilies.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixoMaZCeQuIkedlbxzPqL0gupgnHD4V7G5A&usqp=CAU',
'http://www.flowersofindia.net/catalog/slides/Red%20Vanda.jpg',
'https://images.saymedia-content.com/.image/t_share/MTc0MjYyNjgzNzA3NjQ3NDg0/rhododendrons-photos-facts-and-care-tips.jpg',
'https://t3.ftcdn.net/jpg/03/80/01/78/360_F_380017855_R6TkhNJ4VnPp8KYwNyfRUUfHG9jg6L6O.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOzWVndD_y3awwOnITLxD8youUSyJUJZHbNQ&usqp=CAU',
'https://thumbs.dreamstime.com/b/closeup-beautiful-view-blossoming-flowers-tecomella-undulata-rohida-tree-244288813.jpg',
'https://thumbs.dreamstime.com/b/dendrobium-nobile-flower-center-focus-rest-image-blurred-dendrobium-nobile-orchid-flower-center-focus-rest-231467097.jpg',
'https://m.media-amazon.com/images/I/41VwFA5jp6L.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-ZTl3L_TJPfKgAAHij8I2HdmhiRAt9rGDA&usqp=CAU',
'https://www.forestessentialsindia.com/blog/wp-content/uploads/feimg/upload/4/7/475063150b1fcfab81a55f792045656b.jpg',
'https://upload.wikimedia.org/wikipedia/commons/3/38/STS_001_Butea_monosperma.jpg',
'https://m.media-amazon.com/images/I/61+5KdZMnWL._SX466_.jpg',
'https://media.plantinstructions.com/wp-content/uploads/2017/03/night-blooming-jasmine-in-garden.jpg'];

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
    document.getElementById("value").textContent = Flowers[randomIndex];
     // document.getElementById("flowers").textContent = Flowers[randomIndex];

    document.getElementsByClassName("card")[0].style.backgroundImage = "url('"+Images[randomIndex]+"')";

    console.log(States[randomIndex]);
    console.log(Capitals[randomIndex]);
    console.log(Animals[randomIndex]);
    console.log(Flowers[randomIndex]);
    console.log(Birds[randomIndex]);
    console.log(Fruits[randomIndex]);
    console.log(Trees[randomIndex]);
   
};

