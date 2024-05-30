<template>
  <div>
    <h1>Characters List</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Birth Year</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="character in characters" :key="character.name">
          <td>{{ character.name }}</td>
          <td>{{ character.height }}</td>
          <td>{{ character.birth_year }}</td>
          <td>{{ character.gender }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="prevPage" :disabled="page === 1">Previous</button>
    <button @click="nextPage" :disabled="!hasMore">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characters: [],
      page: 1,
      hasMore: true,
    };
  },
  methods: {
    fetchCharacters() {
      fetch(`https://swapi.dev/api/people/?page=${this.page}`)
        .then((response) => response.json())
        .then((data) => {
          this.characters = data.results;
          this.hasMore = !!data.next;
        });
    },
    nextPage() {
      if (this.hasMore) {
        this.page++;
        this.fetchCharacters();
      }
    },
    prevPage() {
      if (this.page > 1) {
        this.page--;
        this.fetchCharacters();
      }
    },
  },
  mounted() {
    this.fetchCharacters();
  },
};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background-color: #f4f4f4;
}
</style>
