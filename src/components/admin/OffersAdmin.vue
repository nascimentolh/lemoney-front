<template>
  <div class="users-admin">
    <b-form>
      <input type="hidden" id="offer-id" v-model="offer.id" />
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group
            label="Advertiser Name:"
            label-for="offer-advertiser-name"
          >
            <b-form-input
              id="offer-advertiser-name"
              type="text"
              v-model="offer.advertiser_name"
              :readonly="mode === 'remove'"
              required
              placeholder="inform the advertiser name"
            />
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="URL:" label-for="offer-url">
            <b-form-input
              id="offer-url"
              type="text"
              v-model="offer.url"
              :readonly="mode === 'remove'"
              required
              placeholder="inform the URI"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12" sm="12">
          <b-form-group label="Description:" label-for="offer-description">
            <b-form-textarea
              id="textarea"
              v-model="offer.description"
              placeholder="Enter something..."
              :readonly="mode === 'remove'"
              required
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-row>
      <b-form-checkbox
        id="offer-premium"
        v-model="offer.premium"
        value="true"
        v-show="mode === 'save'"
        unchecked-value="false"
        class="mt-3 mb-3"
      >
        Premium?
      </b-form-checkbox>
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Starts At:" label-for="offer-starts-at">
            <date-picker
              v-model="offer.starts_at"
              required
              :readonly="mode === 'remove'"
            ></date-picker>
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="Ends At:" label-for="offer-ends-at">
            <date-picker
              v-model="offer.ends_at"
              :readonly="mode === 'remove'"
            ></date-picker>
          </b-form-group>
        </b-col>
      </b-row>
      <b-button variant="success" v-if="mode === 'save'" @click="save"
        >Salvar</b-button
      >
      <b-button variant="danger" v-if="mode === 'remove'" @click="remove"
        >Delete</b-button
      >
      <b-button class="ml-2" @click="reset">Cancelar</b-button>
    </b-form>
    <b-table
      :items="users"
      :fields="fields"
      class="mb-0 p-0 mt-3"
      :tbody-tr-class="rowClass"
    >
      <template #cell(actions)="data">
        <b-button variant="warning" @click="loadOffer(data.item)" class="mr-2">
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button
          variant="success"
          @click="changeStatusOffer(data.item)"
          class="mr-2"
          v-if="data.item.active"
        >
          <i class="fa fa-check"></i>
        </b-button>
        <b-button
          variant="danger"
          @click="changeStatusOffer(data.item)"
          class="mr-2"
          v-else
        >
          <i class="fa fa-close"></i>
        </b-button>
        <b-button
          variant="danger"
          @click="loadOffer(data.item, 'remove')"
          class="mr-2"
        >
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";
import datePicker from "vue-bootstrap-datetimepicker";
import "pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css";
export default {
  name: "UsersAdmin",
  components: {
    datePicker,
  },
  data: function () {
    return {
      mode: "save",
      offer: {},
      users: [],
      fields: [
        { key: "id", label: "Codigo", sortable: true },
        { key: "advertiser_name", label: "Advertiser", sortable: true },
        { key: "premium", label: "Premium", sortable: true },
        {
          key: "actions",
          label: "Actions",
          sortable: false,
        },
      ],
    };
  },
  watch: {
    offer: function () {
      this.offer.starts_at
        ? (this.offer.starts_at = new Date(this.offer.starts_at))
        : null;
      this.offer.ends_at
        ? (this.offer.ends_at = new Date(this.offer.ends_at))
        : null;
    },
  },
  methods: {
    rowClass(item, type) {
      if (!item || type !== "row") return;
      if (item.active) {
        return "table-success";
      } else {
        return "table-danger";
      }
    },
    loadOffers() {
      const url = `${baseApiUrl}/offers`;
      axios.get(url).then((res) => {
        this.users = res.data;
      });
    },
    reset() {
      this.mode = "save";
      this.offer = { premium: false };
      this.loadOffers();
    },
    save() {
      const method = this.offer.id ? "put" : "post";
      const id = this.offer.id ? `/${this.offer.id}` : "";

      axios[method](`${baseApiUrl}/offers${id}`, this.offer)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    loadOffer(offer, mode = "save") {
      this.mode = mode;
      this.offer = { ...offer };
    },
    changeStatusOffer(offer) {
      offer.active = offer.active ? false : true;
      axios
        .put(`${baseApiUrl}/offers/${offer.id}`, offer)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      const id = this.offer.id;
      axios
        .delete(`${baseApiUrl}/offers/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
  },
  mounted() {
    this.loadOffers();
  },
};
</script>

<style>
</style>