<template>
  <div style="margin: 10px">
    <v-row>
      <v-col v-for="(item, i) in $store.state.products" :key="i">
        <v-card>
          <v-card-subtitle>ID: {{ item.id }}</v-card-subtitle>
          <v-card-title>{{ item.name }}</v-card-title>
          <v-card-subtitle>Price: {{ item.price }}</v-card-subtitle>
          <v-card-subtitle>Count: {{ item.count }}</v-card-subtitle>
          <v-card-actions>
            <v-btn outlined rounded text> Buy </v-btn>
            <v-btn outlined rounded text> Open </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
