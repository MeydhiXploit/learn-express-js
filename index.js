// jadi kita harus membuat Objectnya terlebih dahulu
const express = require("express");
const app = express();

app.use((req, res) => {
  console.log("we got request");
  res.send({ message: "hello world" });
});
// jangan lupa ini di jalankan ulang ketika sudah mendapatkan datanya

app.listen(8080, () => {
  console.log("Server is running  on http://localhost:8080");
});

// jadi kita itu baru menjalankan service di dalam nodejsnya
