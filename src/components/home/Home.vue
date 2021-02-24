<template>
  <div class="home-content">
    <b-row v-if="offers.length">
      <b-col
        lg="3"
        md="12"
        sm="12"
        v-for="offer in offers"
        :key="offer.id"
        class="d-flex align-items-stretch"
      >
        <b-card :title="offer.advertiser_name" tag="article" class="mb-2">
          <b-card-text>
            <strong>Description:</strong>
            {{ offer.description }}
          </b-card-text>

          <template #footer>
            <div @click="accessOffer(offer.url)">Access</div>
          </template>
        </b-card>
      </b-col>
    </b-row>
    <b-row v-else>
      <b-col md="12" sm="12" class="mt-2 text-center">
        <h1>Not offers yet</h1>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { baseApiUrl } from "@/global";
import axios from "axios";

export default {
  name: "Home",
  data: function () {
    return {
      offers: [],
    };
  },
  methods: {
    filterArray(array, filters) {
      const filterKeys = Object.keys(filters);
      return array.filter((item) => {
        return filterKeys.every((key) => {
          if (typeof filters[key] !== "function") return true;
          return filters[key](item[key]);
        });
      });
    },
    getAndFormatOffers() {
      axios.get(`${baseApiUrl}/offers`).then((res) => {
        const date = new Date().toISOString();

        const filters = {
          ends_at: (ends_at) => {
            if (ends_at == undefined) return true;
            if (date <= ends_at) return true;
          },
          starts_at: (starts_at) => date >= starts_at,
          active: (active) => active == true,
        };
        this.offers = this.filterArray(res.data, filters);
      });
    },
    accessOffer(link) {
      location.href = link;
    },
  },
  mounted() {
    this.getAndFormatOffers();
  },
};
</script>

<style>
.card-footer {
  background-color: #e3eaf1;
  color: #66718a;
  cursor: pointer;
  text-align: center;
}

.card-footer:hover {
  background-color: purple;
  color: #11e374;
}
</style>