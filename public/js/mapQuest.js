function initMap() {
	// add your code here
	L.mapquest.key = '6c2k8cP7oQhFA8pVP7HaTcCI3CRYQscn'; 
	
	var map = L.mapquest.map('map',{
		center: [32.8792208, -117.2392868],
		layers: L.mapquest.tileLayer('map'),
		zoom: 14,
		zoomControl: false
	});
	
	L.marker([32.88, -117.236]).addTo(map);
}