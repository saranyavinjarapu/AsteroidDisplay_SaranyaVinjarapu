<template>
	<div>
		<div class="search_form">
			<form @submit="getAsteroidDataById($event)">
				<div class="search_form_inputs">
					<label for="asteroid_id">Enter the Asteroid Id : </label>
					<input
						class="asteroid_id_bar"
						type="text"
						v-model="asteroid_id"
					/><br /><br />
					<input type="submit" value="Submit" />
				</div>
			</form>
		</div>
		<div id="table_container">
			<table id="asteroid_table_by_id">
				<tr>
					<th>Asteroid Name</th>
					<th>Asteroid Id</th>
					<th>NASA JPN URL</th>
				</tr>
				<tr
					v-for="asteroidDataById in asteroidDataByIdList"
					:key="asteroidDataById.id"
				>
					<td>{{ asteroidDataById.name }}</td>
					<td>{{ asteroidDataById.id }}</td>
					<td>{{ asteroidDataById.nasa_jpl_url }}</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	name: "AsteroidSearchById",
	data() {
		return {
			asteroid_id: "",
			asteroidDataByIdList: []
		};
	},
	methods: {
		async getAsteroidDataById(form_event) {
			form_event.preventDefault();
			const apiKey = "ydl7nVUxNWm2Vid24ecGBL3L6R6dp8fHXbT4NfZO";
			const finalAsteroidByIdData = [];
			try {
				const response = await fetch(
					`https://api.nasa.gov/neo/rest/v1/neo/${
						this.asteroid_id
					}?api_key=${apiKey}`
				);
				const json_data = await response.json();

				finalAsteroidByIdData.push({
					name: json_data.name,
					id: json_data.id,
					nasa_jpl_url: json_data.nasa_jpl_url
				});
				this.asteroidDataByIdList = finalAsteroidByIdData;
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
	height: 100px;
	padding-top: 30px;
	padding-left: 300px;
}

.asteroid_id_bar {
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

#table_container {
	padding-top: 50px;
}

th,
td {
	border: 1px solid black;
	border-collapse: collapse;
	padding: 15px;
	text-align: left;
}

#asteroid_table_by_id tr:nth-child(even) {
	background-color: #eee;
}
#asteroid_table_by_id tr:nth-child(odd) {
	background-color: #fff;
}
#asteroid_table_by_id th {
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
