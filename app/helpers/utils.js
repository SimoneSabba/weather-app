
var daysMap = {
  "0":"Sunday",
  "1":"Monday",
  "2":"Tuesday",
  "3":"Wednesday",
  "4":"Thursday",
  "5":"Friday",
  "6":"Saturday"
};

var monthsMap = {
  "0":"Jan",
  "1":"Feb",
  "2":"Mar",
  "3":"Apr",
  "4":"May",
  "5":"June",
  "6":"July",
  "7":"Aug",
  "8":"Sept",
  "9":"Oct",
  "10":"Nov",
  "11":"Dec"
};

/*
* Prepare icon url path
*/
function getIconPath(icon) {
	let basepath = './app/images/icons/';
	let extension = '.svg';

	return basepath + icon + extension;
}

/*
* Format date in the format DD, M (eg: Monday, Oct 10 )
*/
function formatDate(d) {
	let date = new Date(d * 1000);
  	let day = daysMap[date.getDay()]
  	let month = monthsMap[date.getMonth()] + ' ' + date.getDate();
  	
  	return day + ', ' + month;
}

/*
* API EXPORTS
*/
var utils = {
	getIconPath: getIconPath,
	formatDate: formatDate
};

export default utils;