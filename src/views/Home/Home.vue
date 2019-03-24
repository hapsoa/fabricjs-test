<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-btn @click="addRect">의상 추가</v-btn>
        <v-btn @click="addImage">정해진 Image 추가</v-btn>
        <v-btn @click="cancelSelect">선택 취소</v-btn>
        <Canvas ref="canvas"/>
      </v-flex>
      <v-flex>
        <v-text-field
          label="Select Image"
          @click="pickFile"
          v-model="imageName"
          prepend-icon="attach_file"
        ></v-text-field>
        <input
          type="file"
          style="display: none"
          ref="image"
          accept="image/*"
          @change="onFilePicked"
        >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts" src="./Home.ts" />
