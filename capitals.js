var States = [  "Andhra Pradesh","Arunachal Pradesh","Assam"    ,"Bihar","Chhattisgarh", "Delhi"    ,    "Goa",      "Gujarat",      "Haryana",      "Himachal Pradesh", "Jharkhand","Karnataka",    "Kerala",               "Madhya Pradesh",   "Maharashtra",  "Manipur",  "Meghalaya",    "Mizoram",      "Nagaland", "Odisha",       "Punjab",       "Rajasthan",    "Sikkim",   "Tamil Nadu",   "Telangana",    "Tripura",  "Uttar Pradesh",    "Uttarakhand",  "West Bengal"];
var Capitals = ["Amaravati"     ,"Itanagar"         ,"Dispur"   ,"Patna","Raipur",      "New Delhi",    "Panaji",   "Gandhinagar",  "Chandigarh",   "Shimla",           "Ranchi",   "Banglore",     "Thiruvananthapuram",   "Bhopal",           "Mumbai",       "Imphal",   "Shilong",      "Aizawl",       "Kohima",   "Bhubaneswar",  "Chadigarh",    "Jaipur",       "Gangtok",  "Chennai",      "Hyderabad",    "Agartala", "Lucknow",          "Dehradun",     "Kolkata"];
var Animals = ['Blackbuck ','Mithun','Indian rhinoceros','Gaur','Wild buffalo','Nilgai','Gaur','Asiatic Lion','Blackbuck','Snow Leopard','Elephant','Elephant','Elephant','Swamp Deer (Barasingha)','Giant Squirrel','Sangai','Clouded Leopard','Serow','Mithun','Sambhar deer','Blackbuck','Chinkara','Red Panda','Nilgiri Tahr','Spotted Deer (Jinka)','Phayre’sLangur','Musk Deer','Swamp Deer (Barasingha)','Fishing cat'];
var Flowers = ['Jasmine','Foxtail Orchid','	Foxtail Orchid','	Orchid Tree (Kachnar)','Marrygold','Alfalfa','	Frangipani','	African Marigold','	Lotus','	Pink rhododendron','Palash','Lotus','Golden shower tree','Parrot tree','Jarul','	Siroi lily','Gambar','Red Vanda','	Rhododendron','Ashoka','	Gladiolus','Rohira','Noble orchid','Glory lily','Tangedu Puvvu','Nag Kesar','Palash','Brahma Kamal','Night flowering jasmine'];
var Birds = ['Indian Roller','Great Hornbill','White-winged Wood Duck','Indian Roller','Hill Myna','House sparrow','Black Crested Bulbul','Greater Flamingo','Black Francolin','Western Tragopan','Koel','Indian Roller','Great Hornbill','Paradise Fly catcher','Green Imperial Pigeon',"Mrs. Hume's Pheasant",'Hill Myna',"Mrs. Hume's Pheasant","Blyth's Tragopan",'Peacock','Northern Goshawk','Indian Bustard','Blood Pheasant','Emerald Dove','Indian Roller','Green Imperial Pigeon','Himalayan Monal','Sarus Crane','White-throated King Fisher'];
var Fruits = ['Mango','Jackfruit','None','Mango','Watermelon','Cashew','	Mango','None','Apple','None','Mango','Jackfruit','Mango','Mango','Pineapple','Sohphie','sapthei','None','None','None','None','Cucumber','Jackfruit','Mango','Queen Pineapple','	Kaphal','None','Mango'];
var Trees = ['Neem','Hollong','Hollong','Sacred fig','Sal','Flamboyant','Coconut','Banyan','Sacred fig','Deodar','Sal','Sandalwood','Coconut','Banyan','Mango','Uningthou','White teak','Iron wood','Alder','Sacred fig',	'Indian rosewood','Khejri','Rhododendron','Palmyra palm','Jammi','Agar','Ashoka','Burans','Alstonia'];
var Images = ['https://www.holidify.com/images/cmsuploads/compressed/shutterstock_11162494701_20200130180527_20200130180558.png',
'https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180705165626/AP-FI-1.jpg',
'https://imgcld.yatra.com/ytimages/image/upload/v1517482087/AdvNation/ANN_DES71/ann_top_Assam_c49hzx.jpg',
'https://www.nationsonline.org/gallery/India/Great-Buddha-Statue-Bodh-Gaya-India.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/The_ravishing_beauty_of_Chitrakote_falls.jpg/1920px-The_ravishing_beauty_of_Chitrakote_falls.jpg',
'https://www.thelalit.com/wp-content/uploads/2017/01/City-Attraction1-New-Delhi-e1493635162496-760-320.jpg',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=700&h=500&s=1',
'https://images.news18.com/ibnlive/uploads/2021/07/1626099034_statue-of-unity-.jpg?impolicy=website&width=510&height=356',
'https://cdnbbsr.s3waas.gov.in/s37b7a53e239400a13bd6be6c91c4f6c4e/uploads/bfi_thumb/2020051468-ophznubmvxwg4dgf10i3hrmih1vrsv94ycjcqpxfhq.jpg',
'https://www.trawell.in/admin/images/upload/487035497Shimla_Main.jpg',
'https://www.transindiatravels.com/wp-content/uploads/deoghar.jpg',
'https://clubmahindra.gumlet.io/blog/media/section_images/coverimage-f846b10831cf739.jpg?w=1920&dpr=1.0',
'https://www.financialexpress.com/wp-content/uploads/2021/01/Kottayam-houseboats-kerala-tourism.jpg',
'https://images.unsplash.com/photo-1585744944048-846da0c3054c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
'https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Gateway-Of-India_600.jpg',
'https://www.transindiatravels.com/wp-content/uploads/bishnupur2.jpg',
'https://ihplb.b-cdn.net/wp-content/uploads/2017/07/nohkalikai-falls.jpg',
'https://media.tripinvites.com/places/aizawl/solomon-temple/solomon-temple-featured.jpg',
'https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/cover-places-to-visit-in-kohima.jpg',
'https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180803145213/Jagannath-Puri-Rath-Yatra-Orissa.jpg',
'https://assets.traveltriangle.com/blog/wp-content/uploads/2018/07/amritsar-3083693_960_720.jpg',
'https://img.traveltriangle.com/blog/wp-content/uploads/2019/02/Hawa-Mahal_24th-oct.jpg',
'https://www.tourmyindia.com/socialimg/top-travel-destinations-sikkim.jpg',
'https://www.transindiatravels.com/wp-content/uploads/kanyakumari-2.jpg',
'https://www.transindiatravels.com/wp-content/uploads/charminar-2.jpg',
'https://www.tourmyindia.com/socialimg/tripura-touris.jpg',
'https://img.theculturetrip.com/wp-content/uploads/2018/03/taj-mahal.jpg',
'https://hikerwolf.com/wp-content/uploads/2020/04/Dehradun.jpg',
'https://www.ngtraveller.com/uploads/2021/07/a9c34fde66097d1d72e2122c517f9e81.webp'];

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
    document.getElementById("value").textContent = Capitals[randomIndex];
    // document.getElementById("capital").textContent = Capitals[randomIndex];

    document.getElementsByClassName("card")[0].style.backgroundImage = "url('"+Images[randomIndex]+"')";

    console.log(States[randomIndex]);
    console.log(Capitals[randomIndex]);
    console.log(Animals[randomIndex]);
    console.log(Flowers[randomIndex]);
    console.log(Birds[randomIndex]);
    console.log(Fruits[randomIndex]);
    console.log(Trees[randomIndex]);
    
};

