<template>
	<div>
		<div v-if="user" class="alert alert-success" role="alert">
			You are logged in!
		</div>
		<div><DataTabs /></div>
	</div>
</template>
<script>
import DataTabs from "./DataTabs";
import { mapGetters } from "vuex";
export default {
	components: {
		DataTabs
	},
	computed: {
		// map `this.user` to `this.$store.getters.user`
		...mapGetters({
			user: "user"
		})
	}
};
</script>
