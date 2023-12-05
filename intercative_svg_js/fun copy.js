const canadamap = document.getElementById("canada-map");
const provinceInfo = document.getElementById("provinceInfo");
const allProvinces = canadamap.querySelectorAll("g");
 canadamap.addEventListener("click", mostrar, false);
	
	function mostrar(e){ 
		const province = e.target.parentNode;
		  if(e.target.nodeName == "path") {
		     for (var i=0; i < allProvinces.length; i++) {
			   allProvinces[i].classList.remove("active");
		     }
		province.classList.add("active");
		const provinceName = province.querySelector("title").innerHTML;
		const provincePara = province.querySelector("desc p");
		const btnCerrar = province.querySelector("button");
		provinceInfo.innerHTML = "";
		provinceInfo.insertAdjacentHTML("afterbegin","<h1>"+provinceName+"</h1><p>"+provincePara.innerHTML+"</p>"+"<p>"+btnCerrar.innerHTML+ "</p>");
		provinceInfo.classList.add("show");

		}
	}

