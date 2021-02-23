<template>
  <div class="admin-pages">
    <PageTitle
      icon="fa fa-cogs"
      main="Management"
      sub="Registration of Offers, Users"
    />
    <div class="admin-pages-tabs">
      <b-card no-body class="radius">
        <b-tabs card>
          <b-tab title="Offers">
            <OffersAdmin />
          </b-tab>
          <b-tab title="Users">
            <UsersAdmin />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import UsersAdmin from "./UsersAdmin";
import OffersAdmin from "./OffersAdmin";

export default {
  name: "AdminPages",
  components: {
    PageTitle,
    UsersAdmin,
    OffersAdmin,
  },
};
</script>

<style>
.admin-pages-tabs {
  margin-top: 10px;
}

.radius {
  border-radius: 10px;
}
</style>