var States = [  "Andhra Pradesh","Arunachal Pradesh","Assam"    ,"Bihar","Chhattisgarh", "Delhi"    ,    "Goa",      "Gujarat",      "Haryana",      "Himachal Pradesh", "Jharkhand","Karnataka",    "Kerala",               "Madhya Pradesh",   "Maharashtra",  "Manipur",  "Meghalaya",    "Mizoram",      "Nagaland", "Odisha",       "Punjab",       "Rajasthan",    "Sikkim",   "Tamil Nadu",   "Telangana",    "Tripura",  "Uttar Pradesh",    "Uttarakhand",  "West Bengal"];
var Capitals = ["Amaravati"     ,"Itanagar"         ,"Dispur"   ,"Patna","Raipur",      "New Delhi",    "Panaji",   "Gandhinagar",  "Chandigarh",   "Shimla",           "Ranchi",   "Banglore",     "Thiruvananthapuram",   "Bhopal",           "Mumbai",       "Imphal",   "Shilong",      "Aizawl",       "Kohima",   "Bhubaneswar",  "Chadigarh",    "Jaipur",       "Gangtok",  "Chennai",      "Hyderabad",    "Agartala", "Lucknow",          "Dehradun",     "Kolkata"];
var Animals = ['Blackbuck ','Mithun','Indian rhinoceros','Gaur','Wild buffalo','Nilgai','Gaur','Asiatic Lion','Blackbuck','Snow Leopard','Elephant','Elephant','Elephant','Swamp Deer (Barasingha)','Giant Squirrel','Sangai','Clouded Leopard','Serow','Mithun','Sambhar deer','Blackbuck','Chinkara','Red Panda','Nilgiri Tahr','Spotted Deer (Jinka)','Phayre’sLangur','Musk Deer','Swamp Deer (Barasingha)','Fishing cat'];
var Flowers = ['Jasmine','Foxtail Orchid','	Foxtail Orchid','	Orchid Tree (Kachnar)','Marrygold','Alfalfa','	Frangipani','	African Marigold','	Lotus','	Pink rhododendron','Palash','Lotus','Golden shower tree','Parrot tree','Jarul','	Siroi lily','Gambar','Red Vanda','	Rhododendron','Ashoka','	Gladiolus','Rohira','Noble orchid','Glory lily','Tangedu Puvvu','Nag Kesar','Palash','Brahma Kamal','Night flowering jasmine'];
var Birds = ['Indian Roller','Great Hornbill','White-winged Wood Duck','Indian Roller','Hill Myna','House sparrow','Black Crested Bulbul','Greater Flamingo','Black Francolin','Western Tragopan','Koel','Indian Roller','Great Hornbill','Paradise Fly catcher','Green Imperial Pigeon',"Mrs. Hume's Pheasant",'Hill Myna',"Mrs. Hume's Pheasant","Blyth's Tragopan",'Peacock','Northern Goshawk','Indian Bustard','Blood Pheasant','Emerald Dove','Indian Roller','Green Imperial Pigeon','Himalayan Monal','Sarus Crane','White-throated King Fisher'];
var Fruits = ['Mango','Jackfruit','None','Mango','Watermelon','Cashew','	Mango','None','Apple','None','Mango','Jackfruit','Mango','Mango','Pineapple','Sohphie','sapthei','None','None','None','None','Cucumber','Jackfruit','Mango','Queen Pineapple','	Kaphal','None','Mango'];
var Trees = ['Neem','Hollong','Hollong','Sacred fig','Sal','Flamboyant','Coconut','Banyan','Sacred fig','Deodar','Sal','Sandalwood','Coconut','Banyan','Mango','Uningthou','White teak','Iron wood','Alder','Sacred fig',	'Indian rosewood','Khejri','Rhododendron','Palmyra palm','Jammi','Agar','Ashoka','Burans','Alstonia'];
var Images = ['https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Antilope_cervicapra_from_velavadar.JPG/800px-Antilope_cervicapra_from_velavadar.JPG',
'https://www.outlookindia.com/outlooktraveller//public/uploads/filemanager/images/Mithun-Arunachal-Pradesh-India.jpg',
'https://cdn.britannica.com/56/135856-050-158A1BE2/Indian-rhinoceros.jpg',
'https://animals.net/wp-content/uploads/2019/04/Gaur-5.jpg',
'https://i.pinimg.com/736x/b5/70/21/b5702120de32f0c035dcce0693dabd10.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Nilgai_at_Ranthambore.jpg/220px-Nilgai_at_Ranthambore.jpg',
'https://animals.net/wp-content/uploads/2019/04/Gaur-5.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Asiatic_Male_Lion_in_Gir_Forest_National_Park.jpg/200px-Asiatic_Male_Lion_in_Gir_Forest_National_Park.jpg',
'https://upload.wikimedia.org/wikipedia/commons/2/2c/Antilope_cervicapra_from_velavadar.JPG',
'https://cdn.britannica.com/52/170952-050-A545E35D/carnivore-Snow-leopard-regions-subcontinent-Asia-Indian.jpg',
'https://universalproperty.com/static/elephant-facts-you-may-not-know.1819cadc.jpg',
'https://universalproperty.com/static/elephant-facts-you-may-not-know.1819cadc.jpg',
'https://universalproperty.com/static/elephant-facts-you-may-not-know.1819cadc.jpg',
'https://www.thehindu.com/news/national/other-states/p6ha6h/article34092870.ece/alternates/LANDSCAPE_1200/17THSwampDeer',
'https://www.animalspot.net/wp-content/uploads/2016/10/Indian-Giant-Squirrel.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Sangai_%28Rucervus_eldii_eldii%29.JPG/220px-Sangai_%28Rucervus_eldii_eldii%29.JPG',
'https://a-z-animals.com/media/animals/images/original/clouded_leopard.jpg',
'https://cdn.britannica.com/12/139812-050-10BF2F34/Japanese-serow.jpg',
'https://www.outlookindia.com/outlooktraveller//public/uploads/filemanager/images/Mithun-Arunachal-Pradesh-India.jpg',
'https://static.wikia.nocookie.net/wildkratts/images/2/21/Sambar_deer_LA.PNG/revision/latest?cb=20190308171949',
'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Antilope_cervicapra_from_velavadar.JPG/800px-Antilope_cervicapra_from_velavadar.JPG',
'https://iranicaonline.org/uploads/files/Animals/chinkara-fig1.jpg',
'https://upload.wikimedia.org/wikipedia/commons/e/e6/Red_Panda_%2824986761703%29.jpg',
'https://www.drishtiias.com/images/uploads/1568016805_image1.jpg',
'https://lh5.ggpht.com/ULavg07d9FpAiVM8qQu74kgR8ExxR7x7mLVTosYj4vvpzhKL8i4TZZcJjHNuqAy1wWTm6I76twgpvLG2CC9aXA=s600',
'https://www.conservationindia.org/wp-content/files_mf/phayres4.jpg',
'https://cdn.britannica.com/20/2920-050-D086E528/Musk-deer.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSDc8FnfoQI3VfIIRZCI4DOFVEn6tuveu7Eg&usqp=CAU',
'https://wildcatconservation.org/wp-content/uploads/2012/12/fishing-catBenWilliams75.jpg'];
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
    document.getElementById("value").textContent = Animals[randomIndex];
     // document.getElementById("animal").textContent = Animals[randomIndex];

    document.getElementsByClassName("card")[0].style.backgroundImage = "url('"+Images[randomIndex]+"')";

    console.log(States[randomIndex]);
    console.log(Capitals[randomIndex]);
    console.log(Animals[randomIndex]);
    console.log(Flowers[randomIndex]);
    console.log(Birds[randomIndex]);
    console.log(Fruits[randomIndex]);
    console.log(Trees[randomIndex]);
    
};

