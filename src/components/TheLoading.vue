<template>
  <div
    class="fixed top-0 left-0 flex items-center justify-center w-screen h-screen z-50"
  >
    <div class="bg-gray-700 opacity-50 w-full h-full fixed top-0 left-0"></div>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style scoped>
span {
  background-color: #39f;
  width: 25px;
  height: 25px;
  margin: 0 5px;
  border-radius: 50%;
  z-index: 40;

  animation: loading 1s alternate infinite;
}

span:nth-child(1) {
  animation-delay: -0.3s;
}

span:nth-child(2) {
  animation-delay: -0.66s;
}

@keyframes loading {
  from {
    transform: translateY(-20px);
  }

  to {
    transform: translateY(0);
  }
}
</style>
