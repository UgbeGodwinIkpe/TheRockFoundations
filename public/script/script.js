 // array of possible states in the same order as they appear in the country selection list

 const countryLists = new Array(6)
 countryLists["empty"] = ["Select your State"];
 countryLists["Nigeria"] = ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kanu", "Kastina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "River", "Sokoto", "Tarabar", "Yobe", "Zamfara"];
 countryLists["Ghana"] = ["Ahafo Region", "Ashanti Region", "Bono Region", "Bono East Region", "Central Region", "Bono East Region", "Eastern Region", "Bono East Region", "Greater Accra Region", "Northern Region", "North East Region", "Oti Region", "Savannah Region", "Upper East Region", "Upper West Region", "Volta Region", "Western Region", "Western North Region"];
 countryLists["Gambia"] = ["West Coast Province", "Upper River Province", "North Bank Province", "Central River Province", "Lower River Division Province", "Banjul Province"];
 countryLists["USA"] = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawali", "Idaho", "Illinois", "Indiana", "Lowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
 countryLists["Canada"] = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon"];

 // array of possible local government in the same order as they appear in the state selection list
 const stateLists = new Array(12)
 stateLists["empty"] = ["Select your LGA"];
 stateLists["Abia"] = ["Arochukwu", "Ini", "Obi Ngwa", "Umuahia South", "Umuahia North", "Ikwuano", "Isiukwato", "Ukwa West", "Aba South", "Aba North", "Isiala Ngwa North", "Isiala Ngwa South", "Obingwa", "Umunneochi", "Ugwunagbo", "Ukwa East"]
 stateLists["Adamawa"] = ["Demsa", "Fufore", "Ganaya", "Gireri", "Gombi", "Guyuk", "Hong", "Jada", "Lomurde", "Madagali", "Maiho", "Mayo-Belwa", "Mubi North", "Mubi South", "Numan", "Shelleng", "Song", "Tougo"]
 stateLists["Akwa Ibom"] = ["Abak", "Eastern Obolo", "Eket", "Essien Udim", "Etim Ekpo", "Etina", "Ibeno", "Ibesikpo Asutan", "Ibiono Ibom", "Ika", "Ikono", "Ikot Abasi", "Ikot Ekpene", "Ini"]
 stateLists["Anambra"] = ["Aguata", "Anambra East", "Anambra West", "Anaocha", "Awka North", "Awka South", "Ayamelum", "Dunukofia", "Ekwusigo", "Idemili North", "Idemili South", "Ihiala", "Njikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North", "Onitsha South", "Orumba North", "Orumba South", "Oyi"]
 stateLists["Bauchi"] = ["Alkaleri", "Bauchi", "Bogoro", "Dambam", "Darazo", "Dass", "Gamawa", "Giade", "Ganjuwa", "Jama'are", "Itas - Gadau", "Katagum", "Kirfi", "Misau", "Ningi", "Shira", "Tafawa Balewa", "Toro", "Warji", "Zaki"]
 stateLists["Bayelsa"] = ["Brass", "Ekeremor", "Kolokuma/Opokuma", "Nembe", "Ogbia", "Sagbama", "Southern Ijaw", "Yenagoa"]
 stateLists["Benue"] = ["Ado", "Agatu", "Apa", "Buruku", "Gboko", "Guma", "Gwer East", "Gwer West", "Katsina", "Konshisha", "Kwande", "Logo", "Makurdi", "Ogbadibo", "Ohimini", "Oju", "Okpokwu", "Utokpo", "Tarka", "Utum", "Ushongo", "Vandeikya"]
 stateLists["Borno"] = ["Abadam", "Askira/Uba", "Bama", "Bayo", "Biu", "Chibok", "Damboa", " Dikwa", "Gubio", "Guzamala", "Gwoza", "Hawul", "Jere", "Kaga", "Kala", "Konduga", "Kukawa", "Kwaya", "Mafa", "Magumeri", "Maiduguri", "Marte", "Monguno", "Mobbar", "Ngala", "Nganzai", "Shani"]
 stateLists["Cross River"] = ["Abi", "Akampa", "Bakasi", "Bekwarra", "Biase", "Boki", "Calabar South", "Calabar Maunicipal", "Ikom", "Obanliku", "Obubra", "Obudu", "Odukpani", "Ogoja", "Ugep", "Yakur", "Yala"]
 stateLists["Delta"] = ["Aniocha North", "Aniocha South", "Bomadi", "Burutu", "Ethiope East", "Ethiope West", "Ika North", "Ika South", "Isoko North", "Isoko South", "Ndokwa East", "Ndokwa West", "Okpe", "Oshimili North", "Oshimili South", "Patani", "Sapele", "Udu", "Ughelli North", "Ughelli South", "Ukwuani", "Uvwie", "Warri North", "Warri South", "Warri South West"]
 stateLists["Ebonyi"] = ["Abakaliki", "Afikpo North", "Afikpo South", "Ebonyi", "Ezza North", "Ezza South", "Ikwo", "Ishielu", "Ivo", "Izzi", "Ohaozara", "Ohaukwu", "Onicha"]
 stateLists["Edo"] = ["Akoko-Edo", "Esan Central", "Esan North-East", "Egor", "Esan South-East", "Esan West", "Etsako Central", "Etsako East", "Iguebe", "Etsako West", "Ikpoba-Okha", "Oredo", "Orhionmwon", "Ovia North-East", "Ovia South-West", "Owan East", "Owan West", "Uhunmwond"]

 /* CountryChange() function is called from the onchange event of a select element.
  * param selectObj - the select object which fired the on change event. 
  */
 function countryChange(selectObj) {
     // get the index of the selected option 
     let idx = selectObj.selectedIndex;
     // get the value of the selected option 
     let which = selectObj.options[idx].value;
     // use the selected option value to retrieve the list of items from the countryLists array 
     cList = countryLists[which];
     // get the state select element via its known id 
     let cSelect = document.getElementById("state");
     // remove the current options from the country select 
     const len = cSelect.options.length;
     while (cSelect.options.length > 0) {
         cSelect.remove(0);
     }
     var newOption;
     // create new options 
     for (let i = 0; i < cList.length; i++) {
         newOption = document.createElement("option");
         newOption.value = cList[i]; // assumes option string and value are the same 
         newOption.text = cList[i];
         // add the new option 
         try {
             cSelect.add(newOption); // this will fail in DOM browsers but is needed for IE 
         } catch (e) {
             cSelect.appendChild(newOption);
         }
     }
 }

 /* Function stateChange() is called from the onchange event of a select element.
  * param selectObj - the select object which fired the on change event. 
  */

 function stateChange(selectObj) {
     // get the index of the selected option 
     let idx = selectObj.selectedIndex;
     // get the value of the selected option 
     let which = selectObj.options[idx].value;
     // use the selected option value to retrieve the list of items from the countryLists array 
     stateList = stateLists[which];
     // get the state select element via its known id 
     let sSelect = document.getElementById("lga");
     // remove the current options from the country select 
     const len = sSelect.options.length;
     while (sSelect.options.length > 0) {
         sSelect.remove(0);
     }
     var newOption;
     // create new options 
     for (let i = 0; i < stateList.length; i++) {
         newOption = document.createElement("option");
         newOption.value = stateList[i]; // assumes option string and value are the same 
         newOption.text = stateList[i];
         // add the new option 
         try {
             sSelect.add(newOption); // this will fail in DOM browsers but is needed for IE 
         } catch (e) {
             sSelect.appendChild(newOption);
         }
     }
 }