<template>
  <Page>
    <Label v-if="$apollo.loading" text="loading" textWrap="true" />
    <StackLayout v-else>
      <Label :text="bird.isim" textWrap="true" class="p-20 m-20" />
      <Button text="get data" @tap="getData" />
    </StackLayout>
  </Page>
</template>

<script>
import { gql } from "apollo-boost";

export default {
  props: ["birdID"],
  // data: () => ({
  //   bird: {
  //     isim: null,
  //   },
  // }),
  apollo: {
    bird: {
      query: gql`
        query($id: ID!) {
          bird(id: $id) {
            id
            isim
          }
        }
      `,
      variables() {
        return {
          id: this.birdID,
        };
      },
    },
  },
  methods: {
    getData() {
      console.log("bird data: ", this.bird);
    },
  },
  mounted() {},
};
</script>

<style></style>
