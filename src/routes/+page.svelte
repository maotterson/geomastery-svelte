<script lang="ts">
	import { countries } from "../stores/countries-store";

</script>

<h1>Countries</h1>
<ul>
    {#each $countries as country}
    <li>
        {country.name} - {country.capital}
    </li>
    {/each}
</ul>
