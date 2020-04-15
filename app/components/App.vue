<template>
  <Page>
    <ActionBar>
      <GridLayout width="100%" columns="auto">
        <Label class="title" text="Welcome to NativeScript-Vue!" />
      </GridLayout>
    </ActionBar>

    <GridLayout columns="*" rows="*">
      <Button text="Go to Detail Page and get bird with ID 2" @tap="gotoDetail" />
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import detail from "./Detail.vue";
export default {
  data() {
    return {};
  },
  methods: {
    gotoDetail() {
      this.$navigateTo(detail, {
        props: {
          birdID: 2 ,
        },
      });
    },
  },
};
</script>

<style scoped></style>
