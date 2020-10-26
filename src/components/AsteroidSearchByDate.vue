<template>
	<div>
		<div class="search_form">
			<form @submit="getAsteroidDataByDate($event)">
				<div class="search_form_inputs">
					<label for="start_date">Pick a Start Date : </label>
					<input
						class="asteroid_date_bar"
						type="date"
						v-model="start_date"
					/><br /><br />
					<label for="end_date">Pick an End Date : </label>
					<input
						class="asteroid_date_bar"
						type="date"
						v-model="end_date"
					/><br /><br />
					<input type="submit" value="Submit" />
				</div>
			</form>
		</div>
		<div id="table_container">
			<table id="asteroid_table_by_date">
				<tr>
					<th>Asteroid Name</th>
					<th>Asteroid Id</th>
					<th>NASA JPN URL</th>
					<th>Closest Approach Date</th>
				</tr>
				<tr
					v-for="asteroidDataByDate in asteroidDataByDateList"
					:key="asteroidDataByDate.id"
				>
					<td>{{ asteroidDataByDate.name }}</td>
					<td>{{ asteroidDataByDate.id }}</td>
					<td>{{ asteroidDataByDate.nasa_jpl_url }}</td>
					<td>
						{{ asteroidDataByDate.close_approach_data[0].close_approach_date }}
					</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	name: "AsteroidSearchByDate",
	data() {
		return {
			start_date: "",
			end_date: "",
			asteroidDataByDateList: []
		};
	},
	methods: {
		async getAsteroidDataByDate(form_event) {
			form_event.preventDefault();
			const apiKey = "ydl7nVUxNWm2Vid24ecGBL3L6R6dp8fHXbT4NfZO";
			try {
				const response = await fetch(
					`https://api.nasa.gov/neo/rest/v1/feed?start_date=${
						this.start_date
					}&end_date=${this.end_date}&api_key=${apiKey}`
				);
				const json_data = await response.json();
				const near_earth_objects_data = json_data.near_earth_objects;
				const finalAsteroidDataByDate = [];

				for (var p in near_earth_objects_data) {
					for (var q = 0; q < near_earth_objects_data[p].length; q++) {
						finalAsteroidDataByDate.push(near_earth_objects_data[p][q]);
					}
				}

				for (var i = 0; i < 10; i++) {
					this.asteroidDataByDateList.push(finalAsteroidDataByDate[i]);
				}
			} catch (error) {
				console.log("error");
			}
		}
	}
};
</script>
<style scoped>
.search_form {
	padding-top: 50px;
	height: 200px;
}
.search_form_inputs {
	margin-top: auto;
	margin-right: auto;
	margin-left: auto;
	padding-top: 10px;
	border: 1px solid black;
	width: 55%;
	height: 150px;
	padding-top: 30px;
	padding-left: 300px;
}

#table_container {
	padding-top: 120px;
}
.asteroid_date_bar {
	height: 40px;
}
label {
	font-size: 25px;
}

table {
	width: 80%;
	margin-left: auto;
	margin-right: auto;
	padding-top: 50px;
}

th,
td {
	border: 1px solid black;
	border-collapse: collapse;
	padding: 15px;
	text-align: left;
}

#asteroid_table_by_date tr:nth-child(even) {
	background-color: #eee;
}
#asteroid_table_by_date tr:nth-child(odd) {
	background-color: #fff;
}
#asteroid_table_by_date th {
	background-color: black;
	color: white;
}

input[type="submit"] {
	padding-top: 1px;
	background-color: #1aa832;
	color: white;
	border: 1px solid #ccc;
	height: 50px;
	width: 400px;
	font-size: 30px;
}
button {
	padding-top: 1px;
	background-color: #1aa832;
	color: white;
	border: 1px solid #ccc;
	height: 50px;
	width: 400px;
	font-size: 30px;
}
</style>
