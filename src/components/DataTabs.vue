<template>
	<div class="asteroid_display_class">
		<div class="title_information">
			<h1>NASA ASTEROID INFORMATION</h1>
			<p>Click on the Below Menu Items to see relevant data</p>
		</div>

		<div class="tab">
			<button
				class="tablinks"
				v-on:click="openTab($event, 'asteroid_display')"
				id="defaultOpen"
			>
				Top 10 Asteroids Display
			</button>
			<button class="tablinks" v-on:click="openTab($event, 'search_by_date')">
				Search Asteroids by Date
			</button>
			<button class="tablinks" v-on:click="openTab($event, 'search_by_id')">
				Search Asteroids by ID
			</button>
		</div>
		<div id="asteroid_display" class="tabcontent">
			<AsteroidDisplay />
		</div>
		<div id="search_by_date" class="tabcontent">
			<AsteroidSearchByDate />
		</div>
		<div id="search_by_id" class="tabcontent">
			<AsteroidSearchById />
		</div>
	</div>
</template>
<script>
import AsteroidDisplay from "./AsteroidDisplay";
import AsteroidSearchByDate from "./AsteroidSearchByDate";
import AsteroidSearchById from "./AsteroidSearchById";
export default {
	name: "DataTabs",
	components: {
		AsteroidDisplay,
		AsteroidSearchByDate,
		AsteroidSearchById
	},
	methods: {
		openTab(evt, tabName) {
			var i, tabcontent, tablinks;
			tabcontent = document.getElementsByClassName("tabcontent");
			for (i = 0; i < tabcontent.length; i++) {
				tabcontent[i].style.display = "none";
			}
			tablinks = document.getElementsByClassName("tablinks");
			for (i = 0; i < tablinks.length; i++) {
				tablinks[i].className = tablinks[i].className.replace(" active", "");
			}
			document.getElementById(tabName).style.display = "block";
			evt.currentTarget.className += " active";
		}
	}
};
</script>
<style scoped>
body {
	font-family: Arial;
}

.asteroid_display_class {
	border: 10px solid green;
	height: 2000px;
}

.title_information {
	border-bottom: 10px solid green;
	padding-left: 600px;
}

h1 {
	color: blue;
}

/* Style the tab */
.tab {
	overflow: hidden;
	border: 1px solid #ccc;
	background-color: #f1f1f1;
	margin-left: auto;
	margin-right: auto;
	width: 80%;
	border-bottom: 1px solid green;
}

/* Style the buttons inside the tab */
.tab button {
	background-color: inherit;
	border: none;
	outline: none;
	cursor: pointer;
	padding: 14px 16px;
	transition: 0.3s;
	font-size: 30px;
	width: 30%;
}

/* Change background color of buttons on hover */
.tab button:hover {
	background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
	background-color: darkgray;
}

/* Style the tab content */
.tabcontent {
	display: none;
	padding: 6px 12px;
	border: 1px solid yellow;
	border-top: none;
	height: 2000px;
}

/* Style the close button */
.topright {
	float: right;
	cursor: pointer;
	font-size: 28px;
}
</style>
