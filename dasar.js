var name;
name = "HMTI";
console.log("pelatihan HMTI");

var angka1 = 10;
var angka2 = 5.5;


var sudahNikah = true;

console.log(name + angka1);
console.log(angka1 + angka2);
console.log(sudahNikah);

// Array
var names = ["jois","fardan","ibnu","egi","asep"];

console.log(names);
console.log(names[2]);
console.log("Data terakhir", names[names.length -1]);
console.log("Total: ",names.length);

// Tipe Data Object
var biodata = {
	name : "fardan",
	age : 25,
	address : "Bekasi",
	"sudah nikah" : false,
	hobbies : ["coding", "singing", "sepak bola", "nyuci baju"],
	ucapkata : function () {
		console.log("Ada ibu ibu guys!");
	}
};
console.log(biodata);
console.log("Nama nya :", biodata.name);
console.log("Umurnya :", biodata.age);
console.log("Hobi ke 2", biodata.hobbies[1]);
console.log("Hobi ke 3", biodata["hobbies"][2]);
console.log("Hobi Terakhir", biodata.hobbies[biodata.hobbies.length -1]);
biodata.ucapkata();

// Array didalam Object

var peserta = [
	{
		name : "fardan",
		age : 20
	},
	{
		name : "ibnu",
		age : 20
	}
];
console.log(peserta);
console.log("Peserta pertama", peserta[0].name);
console.log("Umur Peserta Pertama", peserta[0].age);









console.log(2 === '2');
