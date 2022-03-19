var users = [
{
     "id": 1,
     "first_name": "Dulcinea",
     "last_name": "Beeton",
     "email": "dbeeton0@google.co.uk"
}, 
{
     "id": 2,
     "first_name": "Shoshanna",
     "last_name": "Eymer",
     "email": "seymer1@behance.net"
}, 
{
     "id": 3,
     "first_name": "Cull",
     "last_name": "Nazareth",
     "email": "cnazareth2@squidoo.com"
}, 
{
     "id": 4,
     "first_name": "Dorella",
     "last_name": "Damerell",
     "email": "ddamerell3@taobao.com"
}, 
{
     "id": 5,
     "first_name": "Robena",
     "last_name": "Jankovic",
     "email": "rjankovic4@youtube.com"
}, 
{
     "id": 6,
     "first_name": "Jarret",
     "last_name": "Guitton",
     "email": "jguitton5@ucoz.ru"
}, 
{
     "id": 7,
     "first_name": "Elias",
     "last_name": "Hanson",
     "email": "ehanson6@aol.com"
}, 
{
     "id": 8,
     "first_name": "Corby",
     "last_name": "Gartrell",
     "email": "cgartrell7@sogou.com"
}, 
{
     "id": 9,
     "first_name": "Scarlet",
     "last_name": "Eilhertsen",
     "email": "seilhertsen8@reverbnation.com"
}, 
{
     "id": 10,
     "first_name": "Merv",
     "last_name": "Lequeux",
     "email": "mlequeux9@sohu.com"

}]

var table = document.querySelector('#table');

for(var i = 0; i < users.length; i++){
     table.innerHTML += 
     `<tr class='tr'>
          <td>${users[i].id}</td>
          <td>${users[i].first_name}</td>
          <td>${users[i].last_name}</td>
          <td>${users[i].email}</td>
     </tr>`
}

var row = document.querySelectorAll('.tr');

row.forEach((element, index)=>{
     element.addEventListener('click', function(){
          console.log(users[index].first_name)
          element.classList.toggle('green')
     })
})
console.log(row);